import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { DocumentItem } from '../types';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.8)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="var(--accent-blue)" />
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{document.title}</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1, minHeight: '450px', background: '#050505', position: 'relative' }}>
          <iframe
            src={document.fileUrl}
            title={document.title}
            style={{
              width: '100%',
              height: '100%',
              minHeight: '450px',
              border: 'none'
            }}
          />
        </div>

        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.8)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            {document.description}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={document.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <ExternalLink size={15} />
              Open New Tab
            </a>
            <a
              href={document.fileUrl}
              download
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={15} />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
