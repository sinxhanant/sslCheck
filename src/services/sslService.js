const checkSSL = async (domain) => {
    try {
      const response = await fetch('http://localhost:5000/api/check-ssl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      });
      if (!response.ok) throw new Error('Failed to fetch SSL details.');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  
  export default checkSSL;
  