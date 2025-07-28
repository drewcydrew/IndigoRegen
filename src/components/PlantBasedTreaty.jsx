import React from 'react';
import { 
  IoGlobeOutline, 
  IoDownloadOutline,
  IoDocumentTextOutline,
  IoImageOutline,
  IoMailOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

const PlantBasedTreaty = ({ onNavigate }) => {
  const documents = [
    {
      title: "Plant Based Treaty's 40 Suggested Proposals",
      description: "Comprehensive document outlining 40 proposals for plant-based policy changes",
      filename: "Plant Based Treaty's 40 suggested proposals - Google Docs.pdf",
      size: "2.1 MB",
      type: "pdf"
    },
    {
      title: "Plant Based Treaty's 40 Suggested Proposals (Alternative)",
      description: "Alternative version of the 40 proposals document",
      filename: "Plant Based Treaty's 40 suggested proposals - Google Docs (1).pdf",
      size: "2.1 MB",
      type: "pdf"
    },
    {
      title: "We Endorse PBT Image",
      description: "Endorsement image for Plant Based Treaty support",
      filename: "We Endorse PBT.jpg",
      size: "245 KB",
      type: "image"
    },
    {
      title: "We Endorse PBT Image (Alternative)",
      description: "Alternative endorsement image for Plant Based Treaty",
      filename: "We Endorse PBT (1).jpg",
      size: "245 KB",
      type: "image"
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
    <div className="plant-based-treaty-container" style={{ 
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
          🥦 Plant-Based Treaty
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          The Plant Based Treaty is a grassroots campaign designed to put food systems 
          at the center of combating the climate crisis. Explore our resources and 
          learn how to support this important initiative.
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
          Available Resources
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
                e.currentTarget.style.borderColor = '#F97316';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8D5FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {doc.type === 'image' ? (
                <IoImageOutline size={40} color="#F97316" />
              ) : (
                <IoDocumentTextOutline size={40} color="#F97316" />
              )}
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
                  color: '#F97316', 
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {doc.size}
                </span>
              </div>
              <IoDownloadOutline size={24} color="#F97316" />
            </div>
          ))}
        </div>
      </div>

      <div className="info-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#1E1B4B',
          border: '2px solid #F97316',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoGlobeOutline size={48} color="#F97316" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#E8D5FF', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            About the Plant Based Treaty
          </h3>
          <p style={{ 
            color: '#E8D5FF', 
            marginBottom: '1rem',
            opacity: 0.9,
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            The Plant Based Treaty addresses the urgent need to reduce emissions from animal 
            agriculture and transition to more sustainable plant-based food systems. It calls 
            for governments, organizations, and individuals to take action on climate-friendly 
            food policies.
          </p>
        </div>
      </div>

      <div className="contact-section" style={{ 
        background: '#1E1B4B',
        border: '2px solid #F97316',
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
          Support the Plant Based Treaty
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Want to learn more about supporting the Plant Based Treaty or organizing in your community?
        </p>
        
        <a 
          href="mailto:climate@indigoregen.com.au?subject=Plant Based Treaty Inquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#F97316',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: 'rgba(249, 115, 22, 0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #F97316',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#F97316';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(249, 115, 22, 0.1)';
            e.target.style.color = '#F97316';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Plant Based Treaty
        </a>
      </div>
    </div>
  );
};

export default PlantBasedTreaty;
