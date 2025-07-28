import React from 'react';
import { 
  IoBusinessOutline, 
  IoDownloadOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

const IndigoRegenDocs = ({ onNavigate }) => {
  const documents = [
    {
      title: "Indigo Regen ABN and TFN",
      description: "Official Australian Business Number and Tax File Number documentation",
      filename: "Indigo Regen ABN and TFN.docx.pdf",
      size: "156 KB"
    },
    {
      title: "Indigo Regen Inc Membership Form (Draft)",
      description: "Draft membership application form for joining Indigo Regen Inc",
      filename: "Indigo Regen Inc Membership form draft.docx.pdf",
      size: "298 KB"
    },
    {
      title: "Indigo Regen Inc. Model Rules",
      description: "Official model rules and governance structure for the organization",
      filename: "Indigo Regen Inc. Model rules.docx.pdf",
      size: "445 KB"
    },
    {
      title: "Indigo Regen Inc. Model Rules (Version 2)",
      description: "Alternative version of the model rules document",
      filename: "Indigo Regen Inc. Model rules.docx (1).pdf",
      size: "445 KB"
    }
  ];

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="indigo-regen-docs-container" style={{ 
      padding: '2rem 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => onNavigate && onNavigate('home')}
          style={{
            background: 'transparent',
            color: '#7C3AED',
            border: '2px solid #7C3AED',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#7C3AED';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#7C3AED';
          }}
        >
          <IoArrowBackOutline size={20} />
          Back to Home
        </button>
      </div>

      <div className="intro-section" style={{ 
        textAlign: 'center', 
        marginBottom: '3rem' 
      }}>
        <h2 style={{ 
          color: '#E8D5FF', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          🧾 Indigo Regen Inc.
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Official documents and resources for Indigo Regen Inc., including 
          membership information, governance structures, and legal documentation.
        </p>
      </div>

      <div className="documents-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Available Documents
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {documents.map((doc, index) => (
            <div 
              key={index}
              style={{
                background: '#1E1B4B',
                border: '2px solid #E8D5FF',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => handleDownload(doc.filename)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8D5FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <IoDocumentTextOutline size={40} color="#7C3AED" />
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  color: '#E8D5FF', 
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {doc.title}
                </h4>
                <p style={{ 
                  color: '#E8D5FF', 
                  opacity: 0.8,
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  {doc.description}
                </p>
                <span style={{ 
                  color: '#7C3AED', 
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {doc.size}
                </span>
              </div>
              <IoDownloadOutline size={24} color="#7C3AED" />
            </div>
          ))}
        </div>
      </div>

      <div className="info-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#1E1B4B',
          border: '2px solid #7C3AED',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoBusinessOutline size={48} color="#7C3AED" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#E8D5FF', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            About Indigo Regen Inc.
          </h3>
          <p style={{ 
            color: '#E8D5FF', 
            marginBottom: '1rem',
            opacity: 0.9,
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Indigo Regen Inc. is a registered not-for-profit organization dedicated to 
            promoting regenerative practices in our community. These documents provide 
            transparency about our structure, governance, and membership processes.
          </p>
        </div>
      </div>

      <div className="contact-section" style={{ 
        background: '#1E1B4B',
        border: '2px solid #7C3AED',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Interested in Membership?
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Want to learn more about becoming a member of Indigo Regen Inc.?
        </p>
        
        <a 
          href="mailto:membership@indigoregen.com.au?subject=Membership Inquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#7C3AED',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: 'rgba(124, 58, 237, 0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #7C3AED',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#7C3AED';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(124, 58, 237, 0.1)';
            e.target.style.color = '#7C3AED';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Membership
        </a>
      </div>
    </div>
  );
};

export default IndigoRegenDocs;
