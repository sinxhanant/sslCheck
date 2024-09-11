import React, { useState } from 'react';
import Input from './components/Input';
import SearchButton from './components/SearchButton';
import Results from './components/Results';
import checkSSL from './services/sslService';
import './App.css';

function App() {

  const [domain, setDomain] = useState('');
  const [results, setResults] = useState(null);


  const handleInputChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await checkSSL(domain);
    setResults(result);
  };
  
  return (
    <div className="App">
          <div className="Background">
             <div className="Container">
                 <div className="head-top"><h1>sslCheck.</h1></div>
                   <div className="Upper-Cont">
                      <Input value={domain} onChange={handleInputChange} /><SearchButton onClick={handleSubmit} />
                     </div>
                  <div className="seperator"></div>
                  <div className="Lower-Cont">
                     <Results results={results} />
                  </div>
             </div>
            </div>
     
    </div>
  );
}

export default App;
