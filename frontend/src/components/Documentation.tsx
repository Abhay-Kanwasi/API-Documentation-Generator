import { Documentation as DocType } from '../types/api';

interface DocumentationProps {
  documentation: DocType[];
}

export const Documentation = ({ documentation }: DocumentationProps) => {
  return (
    <div className="documentation">
      <h2>Generated Documentation</h2>
      {documentation.map((doc, index) => (
        <div key={index} className="doc-item">
          <h3>{doc.method} {doc.endpoint}</h3>
          <p>{doc.description}</p>
          {doc.parameters && doc.parameters.length > 0 && (
            <div className="parameters">
              <h4>Parameters:</h4>
              <ul>
                {doc.parameters.map((param, pIndex) => (
                  <li key={pIndex}>
                    <strong>{param.name}</strong> ({param.type}): {param.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};