import React from 'react';
import { 
  IoLeafOutline, 
  IoLocationOutline, 
  IoMailOutline,
  IoPeopleOutline,
  IoSunnyOutline,
  IoWaterOutline,
  IoNutritionOutline,
  IoFlowerOutline,
  IoMapOutline,
  IoTimeOutline,
  IoArrowBackOutline,
  IoDocumentTextOutline,
  IoDownloadOutline
} from 'react-icons/io5';

const CommunityGardens = ({ onNavigate }) => {
  const documents = [
    {
      title: "HMST Community Garden Manual",
      description: "Complete manual for establishing and maintaining community gardens",
      filename: "HMST-Community Garden Manual.pdf",
      size: "4.2 MB"
    },
    {
      title: "Values of Community Garden Proposal",
      description: "Proposal document outlining the community and environmental values of garden projects",
      filename: "values of Community Garden Proposal.docx.pdf",
      size: "1.8 MB"
    },
    {
      title: "Start a Garden Guide",
      description: "Practical guide for starting your own community or home garden",
      filename: "start a garden.pdf",
      size: "2.1 MB"
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

  const gardens = [
    {
      name: "Quercus Community Garden",
      location: "Beechworth",
      description: "Community garden initiative focused on sustainable food production and community connection",
      features: ["Community plots", "Sustainable practices", "Local food production", "Community workshops"],
      contact: "gardens@indigoregen.com.au",
      status: "Active - Community Partner",
      website: "https://quercusbeechworth.org.au/community-garden"
    },
    {
      name: "Beechworth Community Early Years Learning Centre Garden",
      location: "Beechworth",
      description: "Educational garden program for early childhood learning, teaching children about plants and food",
      features: ["Early years education", "Hands-on learning", "Child-friendly plots", "Nature connection"],
      contact: "gardens@indigoregen.com.au",
      status: "Active - Educational Partner",
      website: null
    },
    {
      name: "Montessori Beechworth Garden",
      location: "Beechworth",
      description: "Montessori-integrated garden program supporting hands-on environmental education",
      features: ["Montessori curriculum", "Child-led learning", "Environmental education", "Seasonal activities"],
      contact: "gardens@indigoregen.com.au",
      status: "Active - Educational Partner",
      website: "https://www.beechworthmontessori.vic.edu.au"
    },
    {
      name: "Old Beechworth Gaol Garden",
      location: "Beechworth Historic Precinct",
      description: "Heritage site garden project combining historical preservation with sustainable growing",
      features: ["Heritage integration", "Historical education", "Sustainable tourism", "Community events"],
      contact: "gardens@indigoregen.com.au",
      status: "Active - Heritage Partner",
      website: "https://www.theobg.com.au"
    }
  ];

  const resources = [
    {
      icon: IoSunnyOutline,
      title: "Growing Guides",
      description: "Seasonal planting calendars and crop rotation guides for our local climate",
      color: "#F59E0B"
    },
    {
      icon: IoWaterOutline,
      title: "Water Wise Gardening",
      description: "Techniques for water conservation, mulching, and drought-resistant plants",
      color: "#06B6D4"
    },
    {
      icon: IoNutritionOutline,
      title: "Soil Health",
      description: "Composting workshops, soil testing, and natural fertilizer preparation",
      color: "#10B981"
    },
    {
      icon: IoFlowerOutline,
      title: "Native Plants",
      description: "Information about indigenous plants that support local ecosystems",
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="community-gardens-container" style={{ 
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
          Community Gardens
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Join our growing network of community gardens and PODS (Portable Organic 
          Demonstration Sites) projects. Whether you're a beginner or experienced 
          gardener, there's a place for you to grow food, learn skills, and connect 
          with your community.
        </p>
      </div>

      <div className="video-section" style={{ 
        textAlign: 'center', 
        marginBottom: '3rem' 
      }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          fontWeight: '600'
        }}>
          Community Gardens in Action
        </h3>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#1E1B4B',
          border: '2px solid #7C3AED',
          borderRadius: '12px',
          padding: '1rem',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%' // 16:9 aspect ratio
          }}>
            <iframe
              src="https://www.youtube.com/embed/WOEz7zpg828"
              title="Community Gardens Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>

      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          What We Offer
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {resources.map((resource, index) => (
            <div 
              key={index}
              style={{
                background: '#1E1B4B',
                border: `2px solid ${resource.color}`,
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 25px rgba(124, 58, 237, 0.3)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <resource.icon size={48} color={resource.color} style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#E8D5FF', marginBottom: '1rem', fontSize: '1.2rem' }}>{resource.title}</h4>
              <p style={{ color: '#E8D5FF', opacity: 0.9, margin: 0 }}>
                {resource.description}
              </p>
            </div>
          ))}
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
          Garden Resources & Guides
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
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

      <div className="gardens-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Our Garden Sites
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {gardens.map((garden, index) => (
            <div 
              key={index}
              style={{
                background: '#1E1B4B',
                border: '2px solid #E8D5FF',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8D5FF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: '#E8D5FF', 
                  margin: 0,
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {garden.name}
                </h4>
                <span style={{ 
                  color: garden.status.includes('Available') ? '#10B981' : garden.status.includes('Needed') ? '#F59E0B' : '#7C3AED',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  background: garden.status.includes('Available') ? 'rgba(16, 185, 129, 0.1)' : garden.status.includes('Needed') ? 'rgba(245, 158, 11, 0.1)' : 'rgba(124, 58, 237, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  border: `1px solid ${garden.status.includes('Available') ? '#10B981' : garden.status.includes('Needed') ? '#F59E0B' : '#7C3AED'}`
                }}>
                  {garden.status}
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <IoLocationOutline size={16} color="#7C3AED" />
                <span style={{ color: '#E8D5FF', fontSize: '0.9rem', opacity: 0.9 }}>
                  {garden.location}
                </span>
              </div>
              
              <p style={{ 
                color: '#E8D5FF', 
                opacity: 0.9,
                margin: '0 0 1rem 0',
                fontSize: '1rem',
                lineHeight: 1.5
              }}>
                {garden.description}
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <h5 style={{ color: '#E8D5FF', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Features:</h5>
                <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                  {garden.features.map((feature, idx) => (
                    <li key={idx} style={{ color: '#E8D5FF', opacity: 0.9, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`mailto:${garden.contact}?subject=Interest in ${garden.name}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#7C3AED',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  border: '2px solid #7C3AED',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  marginRight: garden.website ? '1rem' : '0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7C3AED';
                  e.currentTarget.style.color = '#E8D5FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#7C3AED';
                }}
              >
                <IoMailOutline size={16} />
                Get Involved
              </a>
              
              {garden.website && (
                <a 
                  href={garden.website}
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
                    e.currentTarget.style.color = '#E8D5FF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#10B981';
                  }}
                >
                  <IoMapOutline size={16} />
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pods-info-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#1E1B4B',
          border: '2px solid #10B981',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoMapOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#E8D5FF', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            PODS Projects
          </h3>
          <p style={{ 
            color: '#E8D5FF', 
            marginBottom: '1rem',
            opacity: 0.9,
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Our Portable Organic Demonstration Sites (PODS) bring urban agriculture 
            to community spaces, demonstrating how food can be grown in small areas 
            using sustainable methods.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ padding: '1rem' }}>
              <IoTimeOutline size={24} color="#10B981" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#E8D5FF', margin: '0 0 0.5rem 0' }}>Flexible Setup</h4>
              <p style={{ color: '#E8D5FF', opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>
                Mobile systems that can be moved to different community locations
              </p>
            </div>
            <div style={{ padding: '1rem' }}>
              <IoPeopleOutline size={24} color="#10B981" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#E8D5FF', margin: '0 0 0.5rem 0' }}>Community Led</h4>
              <p style={{ color: '#E8D5FF', opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>
                Managed by local volunteers with regular workshops and events
              </p>
            </div>
            <div style={{ padding: '1rem' }}>
              <IoLeafOutline size={24} color="#10B981" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ color: '#E8D5FF', margin: '0 0 0.5rem 0' }}>Educational</h4>
              <p style={{ color: '#E8D5FF', opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>
                Demonstrate sustainable growing techniques and permaculture principles
              </p>
            </div>
          </div>
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
          Ready to Grow with Us?
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Whether you're interested in getting a garden plot, volunteering, or learning 
          about sustainable growing, we'd love to connect with you!
        </p>
        
        <a 
          href="mailto:gardens@indigoregen.com.au?subject=Community Gardens Interest"
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
            e.currentTarget.style.background = '#7C3AED';
            e.currentTarget.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.1)';
            e.currentTarget.style.color = '#7C3AED';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Gardens
        </a>
      </div>
    </div>
  );
};

export default CommunityGardens;