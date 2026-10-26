import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Clean SVG icons for GitHub & LinkedIn
const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <div className="glass-card" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.7' }}>
          I'm currently looking for an industrial attachment opportunity ({personalInfo.attachmentPeriod}). Let's connect!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--glass-border)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem'
          }}>
            <Phone size={16} color="var(--accent-blue)" />
            <span>Phone: <strong style={{ color: '#fff' }}>{personalInfo.phone}</strong></span>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '3px 8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Copy phone"
            >
              {copiedType === 'phone' ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              {copiedType === 'phone' ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem'
          }}>
            <Mail size={16} color="var(--accent-blue)" />
            <span>Email: <strong style={{ color: '#fff' }}>{personalInfo.email}</strong></span>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '3px 8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              title="Copy email"
            >
              {copiedType === 'email' ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              {copiedType === 'email' ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
