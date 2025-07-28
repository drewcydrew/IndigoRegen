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
  IoArrowForwardOutline
} from 'react-icons/io5';

const QuickLinkCard = ({ icon: Icon, title, description, color, onClick }) => {
  return (
    <div 
      className="quick-link-card"
      onClick={onClick}
      style={{
        background: '#1E1B4B',
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
        e.currentTarget.style.boxShadow = `0 8px 25px rgba(124, 58, 237, 0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Icon size={48} color={color} />
      <h3 style={{ 
        margin: 0, 
        color: '#E8D5FF', 
        fontSize: '1.3rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <p style={{ 
        margin: 0, 
        color: '#E8D5FF', 
        fontSize: '0.95rem',
        opacity: 0.9,
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
      onClick: () => window.open('mailto:gardens@indigoregen.com.au?subject=Community Gardens Inquiry', '_blank')
    },
    {
      icon: IoHeartOutline,
      title: 'Volunteer',
      description: 'Get involved with composting programs, slow fashion shows, and other regenerative initiatives.',
      color: '#10B981',
      onClick: () => window.open('mailto:volunteer@indigoregen.com.au?subject=Volunteer Inquiry', '_blank')
    },
    {
      icon: IoCalendarOutline,
      title: 'Events & Workshops',
      description: 'Join our yoga sessions, nature walks, skill-sharing workshops, and community celebrations.',
      color: '#F59E0B',
      onClick: () => onNavigate && onNavigate('eventsworkshops')
    },
    {
      icon: IoNewspaperOutline,
      title: 'Newsletter',
      description: 'Subscribe to our newsletter for updates on regenerative practices and community news.',
      color: '#EF4444',
      onClick: () => window.open('mailto:newsletter@indigoregen.com.au?subject=Newsletter Subscription', '_blank')
    },
    {
      icon: IoPeopleOutline,
      title: 'Skill Sharing',
      description: 'Connect with neighbors to share resources, skills, and equipment in our community network.',
      color: '#8B5CF6',
      onClick: () => window.open('mailto:skillshare@indigoregen.com.au?subject=Skill Sharing', '_blank')
    },
    {
      icon: IoShareSocialOutline,
      title: 'Transport Sharing',
      description: 'Join our car share network and community transport initiatives for sustainable travel.',
      color: '#06B6D4',
      onClick: () => window.open('mailto:transport@indigoregen.com.au?subject=Transport Sharing', '_blank')
    },
    {
      icon: IoBookOutline,
      title: 'Learning Resources',
      description: 'Access our library of things, educational materials on permaculture and regenerative practices.',
      color: '#84CC16',
      onClick: () => window.open('mailto:learning@indigoregen.com.au?subject=Learning Resources', '_blank')
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
      title: 'Climate Action',
      description: 'Join our efforts in emissions reduction, climate resilience, and supporting regenerative practices.',
      color: '#F97316',
      onClick: () => window.open('mailto:climate@indigoregen.com.au?subject=Climate Action', '_blank')
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
          color: '#E8D5FF', 
          fontSize: '3rem', 
          marginBottom: '1.5rem',
          fontWeight: '700'
        }}>
          Welcome to Indigo Regen
        </h1>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.3rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '900px',
          margin: '0 auto 2rem auto'
        }}>
          Creating and celebrating regenerative practices that nurture the health of 
          local communities and our planet. We believe that meaningful change happens 
          when communities come together to share knowledge, resources, and hope for 
          a sustainable future.
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <button 
            style={{
              background: '#7C3AED',
              color: '#E8D5FF',
              border: '2px solid #7C3AED',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onClick={() => onNavigate && onNavigate('mission')}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E8D5FF';
              e.currentTarget.style.color = '#1E1B4B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#7C3AED';
              e.currentTarget.style.color = '#E8D5FF';
            }}
          >
            Read Our Full Mission
            <IoArrowForwardOutline size={20} />
          </button>
        </div>
      </div>

      {/* Values Highlight */}
      <div className="values-section" style={{ 
        marginBottom: '4rem',
        padding: '0 1rem'
      }}>
        <h2 style={{ 
          color: '#E8D5FF', 
          fontSize: '2.2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Our Core Values
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: '#1E1B4B',
            border: '2px solid #7C3AED',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#E8D5FF', margin: '0 0 1rem 0' }}>Respect & Integrity</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9, margin: 0 }}>
              For people, nature, and traditional knowledge, acting authentically and transparently
            </p>
          </div>
          <div style={{
            background: '#1E1B4B',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#E8D5FF', margin: '0 0 1rem 0' }}>Kindness & Inclusivity</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9, margin: 0 }}>
              Approaching all interactions with compassion, welcoming all voices and perspectives
            </p>
          </div>
          <div style={{
            background: '#1E1B4B',
            border: '2px solid #F59E0B',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#E8D5FF', margin: '0 0 1rem 0' }}>Future Focus & Sustainability</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9, margin: 0 }}>
              Making decisions for generations to come, living within planetary boundaries
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="links-section" style={{ 
        marginBottom: '3rem',
        padding: '0 1rem'
      }}>
        <h2 style={{ 
          color: '#E8D5FF', 
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
        background: '#1E1B4B',
        border: '2px solid #E8D5FF',
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
            color: '#E8D5FF', 
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
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;