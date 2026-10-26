import React from 'react';
import { ArrowRight, FileText, Building2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-badge">
        <ShieldCheck size={16} />
        <span>KCA University Student (Reg No: 2502692) • Attachment: {personalInfo.attachmentPeriod}</span>
      </div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.headline}</p>
      <div className="cta-container">
        <a href="#kca-application" className="btn btn-primary">
          <Building2 size={16} />
          KCA Attachment Letter & CV
        </a>
        <a href="#projects" className="btn btn-outline">
          View Projects
          <ArrowRight size={16} />
        </a>
        <a href="#documents" className="btn btn-outline">
          <FileText size={16} />
          My Documents
        </a>
      </div>
    </section>
  );
};
