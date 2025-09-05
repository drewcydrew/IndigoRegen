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
      padding: '2rem 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Hero Section with Mission Elements */}
      <div className="hero-section" style={{ 
        textAlign: 'center', 
        marginBottom: '4rem',
        padding: '0 1rem'
      }}>
        <h1 style={{ 
          color: '#1F2937', 
          fontSize: '3rem', 
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Welcome to Indigo Regen
        </h1>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.3rem', 
          lineHeight: 1.6,
          maxWidth: '900px',
          margin: '0 auto 2rem auto'
        }}>
          Creating and celebrating regenerative practices that nurture the health of 
          local communities, biodiversity and our planet.
        </p>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.3rem', 
          lineHeight: 1.6,
          maxWidth: '900px',
          margin: '0 auto 2rem auto'
        }}>
          We believe that meaningful change happens when communities come 
          together to share knowledge, resources, and hope for a sustainable future.
        </p>
      </div>

      {/* Quick Links Section */}
      <div className="links-section" style={{ 
        marginBottom: '3rem',
        padding: '0 1rem'
      }}>
        <h2 style={{ 
          color: '#1F2937', 
          fontSize: '2.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Get Involved
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {quickLinks.map((link, index) => (
            <QuickLinkCard
              key={index}
              icon={link.icon}
              title={link.title}
              description={link.description}
              color={link.color}
              onClick={link.onClick}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="footer-section" style={{
        background: '#F8F9FA',
        border: '2px solid #6366F1',
        borderRadius: '12px',
        padding: '2rem',
        margin: '0 1rem',
        textAlign: 'center'
      }}>
        <div style={{ 
          marginTop: '0',
          paddingTop: '0'
        }}>
          <p style={{ 
            color: '#1F2937', 
            fontSize: '1.1rem',
            margin: '0 0 1rem 0',
            fontWeight: '500'
          }}>
            Ready to join our regenerative community?
          </p>
          <a 
            href="mailto:hello@indigoregen.com.au?subject=General Inquiry"
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
            <IoMailOutline size={24} />
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;