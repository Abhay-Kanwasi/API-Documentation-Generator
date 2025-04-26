import { useState } from 'react';

interface CodeInputProps {
  onSubmit: (code: string) => void;
}

export const CodeInput = ({ onSubmit }: CodeInputProps) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit} className="code-input-form">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        className="code-textarea"
      />
      <button type="submit" className="submit-button">
        Generate Documentation
      </button>
    </form>
  );
};