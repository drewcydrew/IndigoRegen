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
      <div className="intro-section" style={{ 
        textAlign: 'center', 
        marginBottom: '3rem' 
      }}>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
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
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Documents and guides
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleDownload("Getting-Started-with-Permaculture-Living-Milkwood.pdf")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#84CC16';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IoDocumentTextOutline size={40} color="#84CC16" />
            <div style={{ flex: 1 }}>
              <h4 style={{ 
                color: '#1F2937', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Getting started with permaculture
              </h4>
              <p style={{ 
                color: '#374151', 
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem'
              }}>
                Comprehensive guide to permaculture principles and practices for sustainable living
              </p>
              <span style={{ 
                color: '#84CC16', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                3.2 MB
              </span>
            </div>
            <IoDownloadOutline size={24} color="#84CC16" />
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleDownload("bintrim-cafes-restaurants-factsheet-160773.pdf")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#84CC16';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IoDocumentTextOutline size={40} color="#84CC16" />
            <div style={{ flex: 1 }}>
              <h4 style={{ 
                color: '#1F2937', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Bintrim Cafes & Restaurants Factsheet
              </h4>
              <p style={{ 
                color: '#374151', 
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem'
              }}>
                Resource guide for implementing sustainable practices in food service businesses
              </p>
              <span style={{ 
                color: '#84CC16', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                1.8 MB
              </span>
            </div>
            <IoDownloadOutline size={24} color="#84CC16" />
          </div>
        </div>
      </div>

      <div className="info-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #84CC16',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoLeafOutline size={48} color="#84CC16" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#1F2937', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            About Permaculture
          </h3>
          <p style={{ 
            color: '#374151', 
            marginBottom: '1rem',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Permaculture is a design philosophy that works with natural systems to create 
            sustainable and self sufficient human habitats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PermacultureResources;