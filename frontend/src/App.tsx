import { useState, useEffect } from 'react';
import { CodeInput } from './components/CodeInput';
import { Documentation } from './components/Documentation';
import { apiService } from './services/api';
import { Documentation as DocType } from './types/api';
import './App.css';

function App() {
  const [status, setStatus] = useState<string>('');
  const [documentation, setDocumentation] = useState<DocType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    checkApiStatus();
    loadDocumentation();
  }, []);

  const checkApiStatus = async () => {
    try {
      const response = await apiService.checkStatus();
      setStatus(response.message || '');
    } catch (err) {
      setError('Failed to connect to API');
    }
  };

  const loadDocumentation = async () => {
    try {
      const response = await apiService.getDocs();
      if (response.data) {
        setDocumentation(response.data);
      }
    } catch (err) {
      setError('Failed to load documentation');
    }
  };

  const handleCodeSubmit = async (code: string) => {
    try {
      const response = await apiService.analyzeCode(code);
      if (response.data) {
        setDocumentation([...documentation, response.data]);
      }
    } catch (err) {
      setError('Failed to analyze code');
    }
  };

  return (
    <div className="App">
      <h1>API Documentation Generator</h1>
      {status && <p className="status-message">{status}</p>}
      {error && <p className="error-message">{error}</p>}
      
      <div className="main-content">
        <CodeInput onSubmit={handleCodeSubmit} />
        <Documentation documentation={documentation} />
      </div>
    </div>
  );
}

export default App;
