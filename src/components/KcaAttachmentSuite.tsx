import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Building2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Edit3,
  Calendar,
  Send
} from 'lucide-react';
import { personalInfo, completedCoursework, currentStudies } from '../data/portfolioData';

export const KcaAttachmentSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'letter' | 'cv' | 'resume'>('letter');
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Editable fields for personalization
  const [fullName, setFullName] = useState(personalInfo.name);
  const [studentId, setStudentId] = useState('2502692');
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [recipientTitle, setRecipientTitle] = useState('The Director, Directorate of ICT Services');
  const [attachmentDates, setAttachmentDates] = useState('September 2026 – November 2026');

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const getApplicationLetterText = () => {
    return `${fullName}
Student Reg. No: ${studentId}
School of Technology, KCA University
P.O. Box 56808-00200, Nairobi, Kenya
Email: ${email} | Phone: ${phone}

Date: ${currentDate}

${recipientTitle}
KCA University
Main Campus, Off Thika Road, Ruaraka
P.O. Box 56808-00200
Nairobi, Kenya

Dear Sir/Madam,

RE: APPLICATION FOR INDUSTRIAL ATTACHMENT IN THE ICT SERVICES DEPARTMENT (${attachmentDates.toUpperCase()})

I am writing to formally submit my application for a three-month industrial attachment opportunity in the Directorate of ICT Services at KCA University, scheduled for ${attachmentDates}. I am a dedicated second-year student at KCA University pursuing a Diploma in Information Technology (Registration No: ${studentId}).

Having achieved strong academic results in foundational technology coursework—including Web Development (Grade A), Computer Architecture (Grade A), Database Systems (Grade A-), and Operating Systems (Grade B)—and currently taking Java Programming, Network Design, and Data Structures, I have cultivated both solid theoretical comprehension and keen practical abilities. Furthermore, as an active self-taught cloud enthusiast, I regularly work with Linux environments, AWS cloud principles, and SQL database management.

As a proud KCA University student, I am intimately familiar with our campus digital ecosystem and passionate about serving our academic community. During this attachment, I aim to add immediate value by assisting your technical team with:
• Campus hardware diagnostics, PC assembly, and lab workstation maintenance.
• Local area network (LAN/WLAN) connectivity, IP troubleshooting, and cabling.
• End-user support for students, faculty, and administrative staff.
• Database administration tasks and web application upkeep.

In addition to technical aptitude, my achievement as a National Runner-Up (2nd Place, Kenya) in the Junior Achievers competition reflects my strong teamwork, problem-solving mindset, and dedication to excellence.

This attachment is a curriculum requirement toward my Diploma in Information Technology. I have attached my Curriculum Vitae and academic course records for your consideration. I would be honoured to attend an interview at your convenience.

Thank you very much for your time and kind consideration.

Yours faithfully,

${fullName}
Diploma in Information Technology Student
KCA University (Reg No: ${studentId})`;
  };

  const getCvText = () => {
    return `CURRICULUM VITAE

PERSONAL DETAILS
Name: ${fullName}
Student Reg. No: ${studentId}
Institution: KCA University (School of Technology)
Email: ${email}
Phone: ${phone}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
Motivated Diploma in Information Technology student at KCA University seeking a 3-month industrial attachment (${attachmentDates}) in KCA University's ICT Services department. Passionate about cloud security, systems administration, and web applications. Junior Achievers Kenya national runner-up with proven diligence, quick learning ability, and hands-on IT troubleshooting skills.

EDUCATION BACKGROUND
• 2025 – 2027 (Expected): Diploma in Information Technology
  KCA University, Nairobi, Kenya
  Key Grades: Web Development (A), Computer Architecture (A), Database Systems (A-), Operating Systems (B)
  Current Units: Java Programming, Network Design, Application Programming, Data Structures
• Completed: Kenya Certificate of Secondary Education (KCSE)
  AgaKhan High School

TECHNICAL COMPETENCIES
• Operating Systems & Cloud: Linux (Ubuntu/Debian CLI), AWS Cloud Fundamentals, Windows Server / Desktop OS
• Networking & Hardware: LAN/WLAN troubleshooting, TCP/IP, Router/Switch basics, PC assembly, hardware diagnostics
• Database & Development: SQL (MySQL/PostgreSQL), HTML5, CSS3, JavaScript, Java OOP principles
• IT Support & Administration: Software installation, user tech support, lab workstation maintenance

ACHIEVEMENTS & AWARDS
• 2nd Place National Runner-Up – Junior Achievers Kenya
• Live Web & E-Commerce Implementations (WhatsApp API integration on Vercel, responsive showcase portals)

PROJECTS
1. Perfume Store: Live e-commerce platform with automated WhatsApp checkout.
2. Car Showcase: Fully responsive multi-device automotive gallery.
3. Interactive Portfolio & Tech Showcase: Modern web application built for cloud and IT roles.

REFEREES
1. School of Technology
   KCA University
   P.O. Box 56808-00200, Nairobi
   Email: technology@kcau.ac.ke | Tel: +254 710 888 022

2. Industrial Attachment Coordinator / Head of Department
   School of Technology, KCA University
   P.O. Box 56808-00200, Nairobi, Kenya`;
  };

  const handleCopy = () => {
    const text = activeTab === 'letter' ? getApplicationLetterText() : getCvText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="kca-application" className="section">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(59, 130, 246, 0.15)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          padding: '6px 16px',
          borderRadius: '9999px',
          color: '#93c5fd',
          fontSize: '0.85rem',
          marginBottom: '1rem'
        }}>
          <Building2 size={16} />
          <span>KCA University Attachment Application Suite</span>
        </div>
        <h2>KCA Attachment Application & Documents</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1rem' }}>
          Tailored formal application documents for your industrial attachment at KCA University ICT Services. View, edit details, copy to clipboard, or export directly to PDF.
        </p>
      </div>

      {/* Control Bar */}
      <div className="glass-card" style={{ padding: '1.25rem 1.75rem', marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('letter')}
              style={{
                background: activeTab === 'letter' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid ' + (activeTab === 'letter' ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.55rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} />
              Formal Application Letter
            </button>
            <button
              onClick={() => setActiveTab('cv')}
              style={{
                background: activeTab === 'cv' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid ' + (activeTab === 'cv' ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.55rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <GraduationCap size={16} />
              Attachment CV (Curriculum Vitae)
            </button>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                background: isEditing ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: isEditing ? '#93c5fd' : '#fff',
                border: '1px solid var(--glass-border)',
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem'
              }}
            >
              <Edit3 size={15} />
              {isEditing ? 'Done Editing' : 'Customize Details'}
            </button>

            <button
              onClick={handleCopy}
              className="btn btn-outline"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
            >
              {copied ? <Check size={15} color="#4ade80" /> : <Copy size={15} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
            >
              <Printer size={15} />
              Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Edit fields drawer */}
        {isEditing && (
          <div style={{
            marginTop: '1.25rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--glass-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Full Name / Preferred Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                KCA Student Reg. Number
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Student Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Recipient Designation
              </label>
              <input
                type="text"
                value={recipientTitle}
                onChange={(e) => setRecipientTitle(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Attachment Period
              </label>
              <input
                type="text"
                value={attachmentDates}
                onChange={(e) => setAttachmentDates(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Document Paper Container */}
      <div className="printable-document-container">
        {activeTab === 'letter' ? (
          <div className="formal-paper">
            {/* Header / Sender */}
            <div className="paper-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '2px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.6rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>
                    {fullName.toUpperCase()}
                  </h1>
                  <p style={{ margin: '4px 0 0', color: '#1e3a8a', fontWeight: 600, fontSize: '0.95rem' }}>
                    Diploma in Information Technology • Student Reg. No: {studentId}
                  </p>
                  <p style={{ margin: '2px 0 0', color: '#475569', fontSize: '0.88rem' }}>
                    School of Technology, KCA University
                  </p>
                </div>
                <div style={{ textAlign: 'right', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  <p style={{ margin: 0 }}>P.O. Box 56808-00200, Nairobi</p>
                  <p style={{ margin: 0 }}>Email: <strong>{email}</strong></p>
                  <p style={{ margin: 0 }}>Phone: <strong>{phone}</strong></p>
                </div>
              </div>

              {/* Date */}
              <p style={{ color: '#334155', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Date: {currentDate}
              </p>

              {/* Recipient */}
              <div style={{ marginBottom: '1.75rem', color: '#1e293b', lineHeight: '1.5', fontSize: '0.95rem' }}>
                <p style={{ margin: 0, fontWeight: 700 }}>{recipientTitle}</p>
                <p style={{ margin: 0 }}>KCA University</p>
                <p style={{ margin: 0 }}>Main Campus, Off Thika Road, Ruaraka</p>
                <p style={{ margin: 0 }}>P.O. Box 56808-00200, Nairobi, Kenya</p>
              </div>

              {/* Salutation */}
              <p style={{ color: '#1e293b', fontWeight: 600, marginBottom: '1.25rem' }}>
                Dear Sir/Madam,
              </p>

              {/* Reference */}
              <div style={{
                background: '#eff6ff',
                borderLeft: '4px solid #2563eb',
                padding: '0.75rem 1rem',
                marginBottom: '1.5rem',
                color: '#1e3a8a',
                fontWeight: 700,
                fontSize: '0.98rem'
              }}>
                RE: APPLICATION FOR INDUSTRIAL ATTACHMENT IN THE ICT SERVICES DEPARTMENT ({attachmentDates.toUpperCase()})
              </div>
            </div>

            {/* Letter Body */}
            <div className="paper-body" style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.75' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                I am writing to formally submit my application to undertake my mandatory three-month industrial attachment in the Directorate of ICT Services at KCA University, commencing from <strong>{attachmentDates}</strong>. I am currently an ongoing second-year student at KCA University pursuing a <strong>Diploma in Information Technology</strong> under student registration number <strong>{studentId}</strong>.
              </p>

              <p style={{ marginBottom: '1.25rem' }}>
                Throughout my coursework at KCA University, I have maintained exemplary academic performance in core technical disciplines, including <strong>Web Development (Grade A)</strong>, <strong>Computer Architecture (Grade A)</strong>, <strong>Database Systems (Grade A-)</strong>, and <strong>Operating Systems (Grade B)</strong>. I am currently undertaking units in Java Programming, Network Design, Application Programming, and Data Structures. Furthermore, as an avid technology practitioner, I actively engage with <strong>Linux command-line systems</strong>, <strong>cloud concepts (AWS)</strong>, and <strong>SQL database architectures</strong>.
              </p>

              <p style={{ marginBottom: '1.25rem' }}>
                As a student of KCA University, I possess immediate familiarity with our university's digital platforms, laboratories, and student community needs. I am enthusiastic about lending proactive support to KCA University's ICT team in:
              </p>

              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  <strong>Workstation & Hardware Maintenance:</strong> Diagnosing desktop/laptop hardware faults, PC installation, and maintaining laboratory computers for students and staff.
                </li>
                <li>
                  <strong>Networking & Connectivity:</strong> Assisting in monitoring LAN/WLAN access points, Ethernet termination, cable management, and IP troubleshooting.
                </li>
                <li>
                  <strong>User & Student Support:</strong> Resolving portal login issues, credential resets, Wi-Fi onboarding, and operating system configuration.
                </li>
                <li>
                  <strong>Web & Database Upkeep:</strong> Supporting departmental website updates, digital portals, and structured query maintenance.
                </li>
              </ul>

              <p style={{ marginBottom: '1.25rem' }}>
                In addition to my technical knowledge, my experience as a <strong>National Runner-Up (2nd place in Kenya) in the Junior Achievers competition</strong> has fostered strong interpersonal communication, ethical accountability, and a high degree of adaptability. I am eager to contribute positively to our university's digital operations under your seasoned mentorship.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                This attachment is an essential component of my curriculum requirements. Attached herewith are my detailed Curriculum Vitae and coursework summary. I will welcome the opportunity to discuss my application in an interview at your convenience.
              </p>

              <p style={{ marginBottom: '2rem' }}>
                Thank you for your consideration.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <p style={{ margin: 0 }}>Yours faithfully,</p>
                <div style={{ height: '40px' }}></div>
                <p style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>{fullName}</p>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
                  Student Registration No: {studentId}
                </p>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
                  Diploma in Information Technology, KCA University
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="formal-paper">
            {/* CV Header */}
            <div className="paper-header" style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.8rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>
                    {fullName.toUpperCase()}
                  </h1>
                  <p style={{ margin: '4px 0 0', color: '#1e3a8a', fontWeight: 700, fontSize: '1rem' }}>
                    Information Technology Diploma Candidate • KCA University
                  </p>
                  <p style={{ margin: '2px 0 0', color: '#475569', fontSize: '0.9rem' }}>
                    Student Reg. No: <strong>{studentId}</strong> | Attachment Window: <strong>{attachmentDates}</strong>
                  </p>
                </div>
                <div style={{ textAlign: 'right', color: '#475569', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  <p style={{ margin: 0 }}>Email: <strong>{email}</strong></p>
                  <p style={{ margin: 0 }}>Phone: <strong>{phone}</strong></p>
                  <p style={{ margin: 0 }}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* CV Body */}
            <div className="paper-body" style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.65' }}>
              {/* Objective */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  CAREER OBJECTIVE
                </h3>
                <p style={{ margin: 0 }}>
                  A driven, high-achieving 2nd-year Diploma in Information Technology student at KCA University seeking an industrial attachment within KCA University's Directorate of ICT Services. Dedicated to applying academic knowledge in computer architecture, web technologies, database systems, and networking to maintain seamless digital services, troubleshoot hardware/software challenges, and deliver exceptional IT support to faculty and students.
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  EDUCATION & ACADEMIC QUALIFICATIONS
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a' }}>
                    <span>Diploma in Information Technology</span>
                    <span>2025 – 2027 (Expected)</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600 }}>KCA University, Nairobi, Kenya</div>
                  <div style={{ marginTop: '4px', fontSize: '0.9rem' }}>
                    <strong>Key Coursework Highlights:</strong> Web Development (Grade A), Computer Architecture (Grade A), Database Systems (Grade A-), Operating Systems (Grade B).
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    <strong>Current Units:</strong> Java Programming, Network Design, Application Programming, Data Structures.
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a' }}>
                    <span>Kenya Certificate of Secondary Education (KCSE)</span>
                    <span>Completed</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600 }}>AgaKhan High School, Nairobi</div>
                  <div style={{ fontSize: '0.9rem' }}>Grade: C</div>
                </div>
              </div>

              {/* Technical Proficiencies */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  TECHNICAL & PROFESSIONAL COMPETENCIES
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                  <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <strong style={{ color: '#0f172a', display: 'block' }}>IT Support & Maintenance</strong>
                    <span>PC troubleshooting, OS formatting/installation, printer setup, campus lab maintenance.</span>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Networking & Infrastructure</strong>
                    <span>LAN/WLAN connectivity, RJ45 crimping, IP addressing, router/switch connectivity.</span>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Linux & Cloud</strong>
                    <span>Ubuntu/Debian command line, user privileges, shell basics, AWS Cloud foundational concepts.</span>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Web & Databases</strong>
                    <span>HTML5, CSS3, JavaScript, Java OOP, Relational Database queries in SQL (MySQL/Postgres).</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  PROJECTS & PRACTICAL WORK
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a' }}>
                    <span>Perfume Store (E-Commerce with WhatsApp API)</span>
                    <span style={{ fontSize: '0.85rem', color: '#2563eb' }}>first-class-perfume.vercel.app</span>
                  </div>
                  <p style={{ margin: '2px 0 0', fontSize: '0.9rem' }}>
                    Engineered a fully responsive commercial store integrating custom WhatsApp checkout hooks to facilitate customer communications and payment orders.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a' }}>
                    <span>Car Showcase & Interactive Web Portals</span>
                    <span style={{ fontSize: '0.85rem', color: '#2563eb' }}>becca-afk.github.io/car-website</span>
                  </div>
                  <p style={{ margin: '2px 0 0', fontSize: '0.9rem' }}>
                    Created modern, highly optimized multi-page galleries displaying automotive inventory with responsive cross-browser layouts.
                  </p>
                </div>
              </div>

              {/* Honors & Awards */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  HONORS & LEADERSHIP
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  <li>
                    <strong>National Runner-Up (2nd Place, Kenya):</strong> Junior Achievers National Competition — recognized for exemplary entrepreneurship, presentation, and team collaboration.
                  </li>
                  <li>
                    <strong>Continuous Self-Improvement:</strong> Dedicated independent study in cloud cybersecurity, Linux administration, and open-source software tools.
                  </li>
                </ul>
              </div>

              {/* Referees */}
              <div>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px' }}>
                  REFEREES
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Dean / Head of Department</strong>
                    <span style={{ display: 'block' }}>School of Technology, KCA University</span>
                    <span style={{ display: 'block' }}>P.O. Box 56808-00200, Nairobi, Kenya</span>
                    <span style={{ display: 'block', color: '#2563eb' }}>Email: technology@kcau.ac.ke</span>
                    <span>Phone: +254 710 888 022</span>
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Industrial Attachment Coordinator</strong>
                    <span style={{ display: 'block' }}>School of Technology, KCA University</span>
                    <span style={{ display: 'block' }}>P.O. Box 56808-00200, Nairobi, Kenya</span>
                    <span style={{ display: 'block', color: '#2563eb' }}>Email: attachment@kcau.ac.ke</span>
                    <span>Phone: +254 710 888 022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .printable-document-container {
          background: #020617;
          padding: 2rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
        }

        .formal-paper {
          background: #ffffff;
          color: #1e293b;
          max-width: 820px;
          margin: 0 auto;
          padding: 3rem 3.5rem;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          font-family: 'Times New Roman', Times, serif;
          position: relative;
        }

        @media (max-width: 768px) {
          .formal-paper {
            padding: 2rem 1.5rem;
          }
        }

        /* Clean Print Styling */
        @media print {
          body * {
            visibility: hidden;
          }
          header, footer, nav, .hero, .cta-container, #profile, #education, #projects, #documents, #skills, #contact, .glass-card {
            display: none !important;
          }
          .printable-document-container, .printable-document-container * {
            visibility: visible;
          }
          .printable-document-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #ffffff !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
          .formal-paper {
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            font-size: 11pt !important;
          }
        }
      `}</style>
    </section>
  );
};
