import React from 'react';
import { 
  IoLeafOutline, 
  IoGlobeOutline, 
  IoMailOutline,
  IoPeopleOutline,
  IoDownloadOutline,
  IoDocumentTextOutline
} from 'react-icons/io5';

const CoolSeats = () => {
  const documents = [
  {
    title: "Proof of Concept for Cool Seat Project for Shire",
    description: "Initial project proposal and feasibility study for implementing Cool Seats in the Shire community",
    filename: "Proof of concept for Cool Seat project for Shire.pdf",
    size: "2.3 MB"
  },
  {
    title: "The Cool Seat Project",
    description: "Comprehensive project documentation, design specifications, and implementation guidelines",
    filename: "The Cool Seat Project.pdf",
    size: "4.1 MB"
  }
];

  const handleDownload = (filename) => {
    // Create a download link - in a real app, this would point to actual files
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cool-seats-container" style={{ 
      padding: '2rem 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
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
          Cool Seats
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Cool Seats are innovative composting benches that combine community seating 
          with sustainable waste management. These beautiful, functional installations 
          provide gathering spaces while actively contributing to soil health and 
          carbon sequestration.
        </p>
      </div>

      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#1E1B4B',
            border: '2px solid #7C3AED',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoLeafOutline size={48} color="#7C3AED" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Composting Technology</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Built-in composting chambers process organic waste while you sit and relax, 
              turning kitchen scraps into rich soil amendment.
            </p>
          </div>

          <div style={{
            background: '#1E1B4B',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoPeopleOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Community Gathering</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Designed as comfortable seating for conversations, workshops, and 
              community events while serving an environmental purpose.
            </p>
          </div>

          <div style={{
            background: '#1E1B4B',
            border: '2px solid #F59E0B',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoGlobeOutline size={48} color="#F59E0B" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Environmental Impact</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Each Cool Seat diverts organic waste from landfills, reduces methane 
              emissions, and creates valuable compost for local gardens.
            </p>
          </div>
        </div>
      </div>

      <div className="documents-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Documentation & Resources
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
          Want Cool Seats in Your Community?
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Interested in installing Cool Seats in your local area? We'd love to help you get started!
        </p>
        
        <a 
          href="mailto:coolseats@indigoregen.com.au?subject=Cool Seats Installation Inquiry"
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
          Contact Us About Cool Seats
        </a>
      </div>
    </div>
  );
};

export default CoolSeats;
