import React from 'react';
import { 
  IoGlobeOutline, 
  IoDownloadOutline,
  IoDocumentTextOutline,
  IoImageOutline,
  IoMailOutline,
  IoArrowBackOutline,
  IoCafeOutline,
  IoLeafOutline,
  IoLinkOutline,
  IoPlayOutline,
  IoNutritionOutline
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
      title: "We Endorse PBT Image",
      description: "Endorsement image for Plant Based Treaty support",
      filename: "We Endorse PBT.jpg",
      size: "245 KB",
      type: "image"
    }
  ];

  const externalLinks = [
    {
      title: "How to be a good ancestor",
      description: "Inspiring video about our responsibility to future generations",
      url: "https://youtu.be/61hRq0D8Zcs",
      type: "video"
    },
    {
      title: "Cafe food waste action plan",
      description: "CAFE FOOD WASTE ACTION PLAN",
      url: "#", // No URL provided
      type: "document"
    },
    {
      title: "Bunanoon plastic bottle free town",
      description: "Learn about Bundanoon - Australia's first plastic bottle free town",
      url: "https://bundanoonontap.com/",
      type: "website"
    },
    {
      title: "How much carbon to make a sandwich",
      description: "Educational video about the carbon footprint of food production",
      url: "https://youtu.be/jRQEi-C5GDg",
      type: "video"
    },
    {
      title: "Responsible cafes on why use coffee cups",
      description: "Video about sustainable coffee cup practices in cafes",
      url: "https://youtu.be/A_KQ_2jpRRo",
      type: "video"
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
          Plant Based Treaty
        </h2>
      </div>

      {/* Plant-Based Treaty Section */}
      <div className="plant-treaty-section" style={{ marginBottom: '4rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #F97316',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <IoGlobeOutline size={48} color="#F97316" />
            <h3 style={{ 
              color: '#1F2937', 
              fontSize: '2rem', 
              margin: 0,
              fontWeight: '600'
            }}>
              Plant-Based Treaty
            </h3>
          </div>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '1rem'
          }}>
            The Plant Based Treaty is a grassroots campaign designed to put food systems 
            at the centre of combating the climate crisis.
          </p>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            The Plant Based Treaty addresses emissions from animal agriculture and promotes the shift to plant 
            based food systems as a critical solution to climate change.
          </p>
        </div>

        <h4 style={{ 
          color: '#1F2937', 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          Documents
        </h4>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
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
                e.currentTarget.style.borderColor = '#F97316';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#6366F1';
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

        <h4 style={{ 
          color: '#1F2937', 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          External Resources
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {externalLinks.map((link, index) => (
            link.url === "#" ? (
              <div
                key={index}
                style={{
                  background: '#F8F9FA',
                  border: '2px solid #8B5CF6',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: 0.7
                }}
              >
                <IoDocumentTextOutline size={40} color="#8B5CF6" />
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1F2937', 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {link.title}
                  </h4>
                  <p style={{ 
                    color: '#374151', 
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>
                    {link.description}
                  </p>
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#F8F9FA',
                  border: '2px solid #10B981',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#059669';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#10B981';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.type === 'video' ? (
                  <IoPlayOutline size={40} color="#10B981" />
                ) : link.type === 'website' ? (
                  <IoGlobeOutline size={40} color="#10B981" />
                ) : (
                  <IoDocumentTextOutline size={40} color="#10B981" />
                )}
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1F2937', 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {link.title}
                  </h4>
                  <p style={{ 
                    color: '#374151', 
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>
                    {link.description}
                  </p>
                </div>
                <IoLinkOutline size={24} color="#10B981" />
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantBasedTreaty;
