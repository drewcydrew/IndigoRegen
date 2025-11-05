import React from 'react';
import { 
  IoLeafOutline, 
  IoGlobeOutline, 
  IoMailOutline,
  IoPeopleOutline,
  IoDownloadOutline,
  IoDocumentTextOutline,
  IoArrowBackOutline,
  IoLinkOutline,
  IoLocationOutline
} from 'react-icons/io5';

const CoolSeats = ({ onNavigate }) => {
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

  const coolSeatsSites = [
    {
      name: "Quercus Community Garden",
      location: "Beechworth",
      description: "Community garden site featuring Cool Seats for composting workshops and garden meetings",
      website: "https://quercusbeechworth.org.au/community-garden",
      contact: "coolseats@indigoregen.com.au"
    },
    {
      name: "Beechworth Community Early Years Learning Centre",
      location: "Beechworth",
      description: "Educational site where children learn about composting and environmental responsibility through Cool Seats",
      website: null,
      contact: "coolseats@indigoregen.com.au"
    },
    {
      name: "Montessori Beechworth",
      location: "Beechworth",
      description: "Montessori educational environment incorporating Cool Seats into hands-on environmental learning",
      website: "https://www.beechworthmontessori.vic.edu.au",
      contact: "coolseats@indigoregen.com.au"
    },
    {
      name: "Old Beechworth Gaol",
      location: "Beechworth Historic Precinct",
      description: "Heritage site featuring Cool Seats for visitors and community events in the historic gardens",
      website: "https://www.theobg.com.au",
      contact: "coolseats@indigoregen.com.au"
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
    <div className="cool-seats-container" style={{ 
      padding: '2rem 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => onNavigate && onNavigate('home')}
          style={{
            background: 'transparent',
            color: '#6366F1',
            border: '2px solid #6366F1',
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
            e.target.style.background = '#6366F1';
            e.target.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#6366F1';
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
          color: '#1F2937', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          Cool Seats
        </h2>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          Cool Seats are innovative composting benches that combine community seating 
          with sustainable waste management.
        </p>
        
        <a 
          href="https://www.coolseats.com.au"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#6366F1',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: 'rgba(99, 102, 241, 0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #6366F1',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#6366F1';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
            e.currentTarget.style.color = '#6366F1';
          }}
        >
          <IoLinkOutline size={24} />
          https://www.coolseats.com.au
        </a>
      </div>

      <div className="why-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Why Cool Seats?
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#F8F9FA',
            border: '2px solid #9333EA',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoLeafOutline size={48} color="#9333EA" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Composting Technology</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Each bench includes a composting chamber that turns organic waste into nutrient-rich compost.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoPeopleOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Community Gathering</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Provides public seating while raising awareness about composting and sustainability.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #F59E0B',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoGlobeOutline size={48} color="#F59E0B" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Environmental Impact</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Reduces landfill waste, cuts methane emissions, and creates useful compost for gardens.
            </p>
          </div>
        </div>
      </div>

      <div className="sites-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Our Cool Seat Sites
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 1rem 0',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Quercus community garden
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <IoLocationOutline size={16} color="#6366F1" />
              <span style={{ color: '#374151', fontSize: '0.9rem' }}>
                Beechworth
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="mailto:coolseats@indigoregen.com.au?subject=Interest in Cool Seats at Quercus community garden"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366F1',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #6366F1',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6366F1';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6366F1';
                }}
              >
                <IoMailOutline size={16} />
                Get Involved
              </a>
              
              <a 
                href="https://quercusbeechworth.org.au/community-garden"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10B981',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #10B981',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#10B981';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#10B981';
                }}
              >
                <IoLinkOutline size={16} />
                Visit Site
              </a>
            </div>
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 1rem 0',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Beechworth Community Early Years Learning Centre
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <IoLocationOutline size={16} color="#6366F1" />
              <span style={{ color: '#374151', fontSize: '0.9rem' }}>
                Beechworth
              </span>
            </div>
            
            <a 
              href="mailto:coolseats@indigoregen.com.au?subject=Interest in Cool Seats at Beechworth Community Early Years Learning Centre"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#6366F1',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                border: '2px solid #6366F1',
                borderRadius: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6366F1';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#6366F1';
              }}
            >
              <IoMailOutline size={16} />
              Get Involved
            </a>
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 1rem 0',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Montessori Beechworth
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <IoLocationOutline size={16} color="#6366F1" />
              <span style={{ color: '#374151', fontSize: '0.9rem' }}>
                Beechworth
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="mailto:coolseats@indigoregen.com.au?subject=Interest in Cool Seats at Montessori Beechworth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366F1',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #6366F1',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6366F1';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6366F1';
                }}
              >
                <IoMailOutline size={16} />
                Get Involved
              </a>
              
              <a 
                href="https://www.beechworthmontessori.vic.edu.au"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10B981',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #10B981',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#10B981';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#10B981';
                }}
              >
                <IoLinkOutline size={16} />
                Visit Site
              </a>
            </div>
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 1rem 0',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              Old Beechworth Gaol
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <IoLocationOutline size={16} color="#6366F1" />
              <span style={{ color: '#374151', fontSize: '0.9rem' }}>
                Beechworth Historic Precinct
              </span>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="mailto:coolseats@indigoregen.com.au?subject=Interest in Cool Seats at Old Beechworth Gaol"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366F1',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #6366F1',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6366F1';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6366F1';
                }}
              >
                <IoMailOutline size={16} />
                Get Involved
              </a>
              
              <a 
                href="https://www.theobg.com.au"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#10B981',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #10B981',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#10B981';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#10B981';
                }}
              >
                <IoLinkOutline size={16} />
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="documents-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
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
              onClick={() => handleDownload(doc.filename)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#9333EA';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <IoDocumentTextOutline size={40} color="#9333EA" />
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  color: '#1F2937', 
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {doc.title}
                </h4>
                <p style={{ 
                  color: '#374151', 
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  {doc.description}
                </p>
                <span style={{ 
                  color: '#9333EA', 
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {doc.size}
                </span>
              </div>
              <IoDownloadOutline size={24} color="#9333EA" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoolSeats;
