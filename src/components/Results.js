import React from 'react';

function Results({ results }) {
  if (!results) return null;

  return (
    <div className="results">
      <h2>SSL Certificate Details</h2>
      <p><strong>Validity Status:</strong> {results.isValid ? 'Valid' : 'Invalid'}</p>
      <p><strong>Expiration Date:</strong> {results.expirationDate}</p>
      <p><strong>Issuer:</strong> {results.issuer}</p>
      <p><strong>Subject:</strong> {results.subject}</p>
      <p><strong>Domain Validity:</strong> {results.domainValid ? 'Yes' : 'No'}</p>
      <p><strong>CA Valid:</strong> {results.caValid ? 'Yes' : 'No'}</p>
      <p><strong>Self Signed:</strong> {results.selfSigned ? 'Yes' : 'No'}</p>
      <p><strong>CRL/OCSP Status:</strong> {results.revoked ? 'Revoked' : 'Not Revoked'}</p>
    </div>
  );
}

export default Results;
