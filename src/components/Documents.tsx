import React, { useState } from 'react';
import { FileText, Award, Mail, Download, Eye } from 'lucide-react';
import { documentsList } from '../data/portfolioData';
import { DocumentItem } from '../types';
import { DocumentModal } from './DocumentModal';

export const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  const getDocIcon = (type: DocumentItem['iconType']) => {
    switch (type) {
      case 'cv':
        return <FileText size={32} />;
      case 'resume':
        return <Award size={32} />;
      case 'letter':
        return <Mail size={32} />;
      default:
        return <FileText size={32} />;
    }
  };

  return (
    <section id="documents" className="section">
      <h2>Professional Documents</h2>
      <div className="docs-grid">
        {documentsList.map((doc) => (
          <div key={doc.id} className="doc-card">
            <div className="doc-icon-wrapper">
              {getDocIcon(doc.iconType)}
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>
              {doc.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.5rem 0 1.5rem', flexGrow: 1 }}>
              {doc.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setSelectedDoc(doc)}
                className="btn btn-outline"
                style={{
                  flex: 1,
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center'
                }}
              >
                <Eye size={14} />
                Preview
              </button>
              <a
                href={doc.fileUrl}
                download
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.82rem',
                  justifyContent: 'center'
                }}
              >
                <Download size={14} />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <DocumentModal
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
};
