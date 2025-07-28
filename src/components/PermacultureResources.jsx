import React from 'react';
import { 
  IoLeafOutline, 
  IoDownloadOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

const PermacultureResources = ({ onNavigate }) => {
  const documents = [
    {
      title: "Getting Started with Permaculture Living",
      description: "Comprehensive guide to permaculture principles and practices for sustainable living",
      filename: "Getting-Started-with-Permaculture-Living-Milkwood.pdf",
      size: "3.2 MB"
    },
    {
      title: "Bintrim Cafes & Restaurants Factsheet",
      description: "Resource guide for implementing sustainable practices in food service businesses",
      filename: "bintrim-cafes-restaurants-factsheet-160773.pdf",
      size: "1.8 MB"
    },
    {
      title: "Bintrim Cafes & Restaurants Factsheet (Alternative)",
      description: "Additional resource guide for sustainable food service practices",
      filename: "bintrim-cafes-restaurants-factsheet-160773 (1).pdf",
      size: "1.8 MB"
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
    <div className="permaculture-resources-container" style={{ 
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
          🌻 Permaculture & Sustainability
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Explore our collection of permaculture guides and sustainability resources 
          to help you implement regenerative practices in your daily life and community.
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
                e.currentTarget.style.borderColor = '#84CC16';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8D5FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <IoDocumentTextOutline size={40} color="#84CC16" />
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
                  color: '#84CC16', 
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {doc.size}
                </span>
              </div>
              <IoDownloadOutline size={24} color="#84CC16" />
            </div>
          ))}
        </div>
      </div>

      <div className="info-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#1E1B4B',
          border: '2px solid #84CC16',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoLeafOutline size={48} color="#84CC16" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#E8D5FF', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            About Permaculture
          </h3>
          <p style={{ 
            color: '#E8D5FF', 
            marginBottom: '1rem',
            opacity: 0.9,
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Permaculture is a design philosophy that works with natural systems to create 
            sustainable and self-sufficient human habitats. These resources will help you 
            understand and implement permaculture principles in your home, garden, and community.
          </p>
        </div>
      </div>

      <div className="contact-section" style={{ 
        background: '#1E1B4B',
        border: '2px solid #84CC16',
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
          Want to Learn More?
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Interested in permaculture workshops or sustainable living practices? Get in touch!
        </p>
        
        <a 
          href="mailto:learning@indigoregen.com.au?subject=Permaculture & Sustainability Inquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#84CC16',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: 'rgba(132, 204, 22, 0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #84CC16',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#84CC16';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(132, 204, 22, 0.1)';
            e.target.style.color = '#84CC16';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Permaculture
        </a>
      </div>
    </div>
  );
};

export default PermacultureResources;
