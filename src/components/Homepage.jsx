import React from 'react';
import { 
  IoLeafOutline, 
  IoGlobeOutline, 
  IoMailOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
  IoCalendarOutline,
  IoHeartOutline,
  IoBookOutline,
  IoShareSocialOutline,
  IoCarOutline,
  IoArrowForwardOutline,
  IoNutritionOutline,
  IoGameControllerOutline
} from 'react-icons/io5';

const QuickLinkCard = ({ icon: Icon, title, description, color, onClick }) => {
  return (
    <div 
      className="quick-link-card"
      onClick={onClick}
      style={{
        background: '#F8F9FA',
        border: `2px solid ${color}`,
        borderRadius: '12px',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '220px',
        justifyContent: 'center',
        gap: '1rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 8px 25px rgba(99, 102, 241, 0.2)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Icon size={48} color={color} />
      <h3 style={{ 
        margin: 0, 
        color: '#1F2937', 
        fontSize: '1.3rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <p style={{ 
        margin: 0, 
        color: '#374151', 
        fontSize: '0.95rem',
        lineHeight: 1.5
      }}>
        {description}
      </p>
    </div>
  );
};

const Homepage = ({ onNavigate }) => {
  const quickLinks = [
    {
      icon: IoLeafOutline,
      title: 'Community Gardens',
      description: 'Find local community gardens, join PODS growing projects, and learn about sustainable food production.',
      color: '#7C3AED',
      onClick: () => onNavigate && onNavigate('gardens')
    },
    {
      icon: IoNutritionOutline,
      title: 'Composting Programs',
      description: 'Join community composting hubs, learn home composting techniques, and reduce food waste.',
      color: '#10B981',
      onClick: () => onNavigate && onNavigate('composting')
    },
    {
      icon: IoCalendarOutline,
      title: 'Events & Workshops',
      description: 'Join our yoga sessions, nature walks, skill-sharing workshops, and community celebrations.',
      color: '#F59E0B',
      onClick: () => onNavigate && onNavigate('eventsworkshops')
    },
    {
      icon: IoBookOutline,
      title: 'Permaculture Resources',
      description: 'Access guides on permaculture, sustainable living, and regenerative practices.',
      color: '#84CC16',
      onClick: () => onNavigate && onNavigate('permaculture')
    },
    {
      icon: IoCarOutline,
      title: 'Cool Seats',
      description: 'Learn about our innovative composting benches that combine seating with waste management.',
      color: '#9333EA',
      onClick: () => onNavigate && onNavigate('coolseats')
    },
    {
      icon: IoGlobeOutline,
      title: 'Plant-Based Treaty',
      description: 'Join our efforts in emissions reduction, climate resilience, and supporting the plant-based treaty.',
      color: '#F97316',
      onClick: () => onNavigate && onNavigate('plantbased')
    },
    {
      icon: IoPeopleOutline,
      title: 'Membership',
      description: 'Become a member and join our community of people working towards regenerative practices.',
      color: '#EC4899',
      onClick: () => onNavigate && onNavigate('membership')
    },
    {
      icon: IoGameControllerOutline,
      title: 'Adaption Game',
      description: 'Learn climate adaptation through interactive gameplay and engaging educational challenges.',
      color: '#06B6D4',
      onClick: () => onNavigate && onNavigate('game')
    }
  ];

  return (
    <div className="homepage-container" style={{
      padding: '0',
      maxWidth: 'none',
      margin: '0',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
      position: 'relative'
    }}>
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        zIndex: 1
      }} />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '3rem 1rem' }}>
        {/* Hero Section with Mission Elements */}
        <div className="hero-section" style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          padding: '2rem 1rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #6366F1',
            borderRadius: '30px',
            padding: '4rem 3rem',
            marginBottom: '3rem',
            boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
            maxWidth: '1000px',
            margin: '0 auto 3rem auto'
          }}>
            <img 
              src="/indigo-regen-icon.jpg" 
              alt="Indigo Regen Logo" 
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                borderRadius: '25px',
                border: '4px solid #6366F1',
                padding: '1.5rem',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                marginBottom: '2rem',
                boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)'
              }}
            />
            <h1 style={{ 
              color: '#1F2937', 
              fontSize: '3.5rem', 
              marginBottom: '2rem',
              fontWeight: '800',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Welcome to Indigo Regen
            </h1>
            <p style={{ 
              color: '#374151', 
              fontSize: '1.4rem', 
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto 2rem auto',
              fontWeight: '600'
            }}>
              Creating and celebrating regenerative practices that nurture the health of 
              local communities and our planet.
            </p>
            <p style={{ 
              color: '#374151', 
              fontSize: '1.2rem', 
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto'
            }}>
              Indigo Regen is a new organisation based in Beechworth. We are a community 
              group running on the energy and ideas of volunteers.
            </p>
            <p style={{ 
              color: '#374151', 
              fontSize: '1.2rem', 
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto'
            }}>
              In response to challenges triggered by our warming climate, our aim is to 
              create safe, inclusive ways of sharing skills and knowledge that promote 
              and support sustainable actions and circular economies.
            </p>
            <p style={{ 
              color: '#374151', 
              fontSize: '1.2rem', 
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto'
            }}>
              By growing and sharing food and local resources, supporting local food 
              networks and reducing waste (food, plastics, textiles etc.) we can reduce 
              emissions and improve our natural environment for future generations together.
            </p>
            <p style={{ 
              color: '#374151', 
              fontSize: '1.2rem', 
              lineHeight: 1.6,
              maxWidth: '900px',
              margin: '0 auto 0 auto'
            }}>
              We believe that meaningful change happens when communities come 
              together to share knowledge, resources, and hope for a sustainable future.
            </p>
          </div>
        </div>

        {/* Join Us Button Section */}
        <div className="join-us-section" style={{
          background: '#FFFFFF',
          border: '3px solid #6366F1',
          borderRadius: '20px',
          padding: '3rem',
          margin: '0 auto 4rem auto',
          textAlign: 'center',
          maxWidth: '600px',
          boxShadow: '0 15px 30px rgba(99, 102, 241, 0.15)'
        }}>
          <p style={{ 
            color: '#1F2937', 
            fontSize: '1.3rem',
            margin: '0 0 2rem 0',
            fontWeight: '600'
          }}>
            Ready to join our regenerative community?
          </p>
          <button 
            onClick={() => onNavigate && onNavigate('membership')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#FFFFFF',
              backgroundColor: '#6366F1',
              border: '3px solid #6366F1',
              fontSize: '1.3rem',
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1F2937';
              e.currentTarget.style.borderColor = '#1F2937';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(31, 41, 55, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6366F1';
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(99, 102, 241, 0.3)';
            }}
          >
            <IoPeopleOutline size={28} />
            Join Us
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="links-section" style={{ 
          marginBottom: '3rem',
          padding: '0 1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            color: '#1F2937', 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: '700',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            Get Involved
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {quickLinks.map((link, index) => (
              <div
                key={index}
                onClick={link.onClick}
                style={{
                  background: '#FFFFFF',
                  border: `3px solid ${link.color}`,
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '240px',
                  justifyContent: 'center',
                  gap: '1rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.25)';
                  e.currentTarget.style.borderWidth = '4px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderWidth = '3px';
                }}
              >
                <link.icon size={56} color={link.color} />
                <h3 style={{ 
                  margin: 0, 
                  color: '#1F2937', 
                  fontSize: '1.4rem',
                  fontWeight: '700'
                }}>
                  {link.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  color: '#374151', 
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}>
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;