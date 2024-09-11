const express = require('express');
const https = require('https');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const fetchSSLCertificate = (domain) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      port: 443,
      rejectUnauthorized: false,
    };

    const req = https.request(`https://${domain}`, options, (res) => {
      const certificate = res.connection.getPeerCertificate();
      if (certificate) {
        resolve(certificate);
      } else {
        reject('No certificate found.');
      }
    });

    req.on('error', (e) => reject(e));
    req.end();
  });
};

app.post('/api/check-ssl', async (req, res) => {
  const { domain } = req.body;

  try {
    const certificate = await fetchSSLCertificate(domain);

    const isValid = new Date(certificate.valid_to) > new Date();
    const domainValid = certificate.subject.CN === domain;
    const selfSigned = certificate.issuer.CN === certificate.subject.CN;

    const result = {
      isValid,
      expirationDate: certificate.valid_to,
      issuer: certificate.issuer.CN,
      subject: certificate.subject.CN,
      domainValid,
      caValid: !selfSigned,
      selfSigned,
      revoked: false, 
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch SSL certificate.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
