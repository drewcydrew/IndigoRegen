import React, { useState } from 'react';
import { 
  IoLeafOutline, 
  IoGlobeOutline, 
  IoMailOutline, 
  IoCallOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
  IoCalendarOutline,
  IoHeartOutline,
  IoBookOutline,
  IoShareSocialOutline,
  IoCarOutline
} from 'react-icons/io5';
import CoolSeats from './CoolSeats';

const QuickLinkCard = ({ icon: Icon, title, description, link, color, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div 
      className="quick-link-card"
      onClick={handleClick}
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
        minHeight: '200px',
        justifyContent: 'center',
        gap: '1rem',
        ':hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 25px rgba(${color}, 0.3)`
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 8px 25px ${color}40`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = color;
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

function UserGuide() {
  const [activeSection, setActiveSection] = useState('quicklinks');

  const quickLinks = [
    {
      icon: IoLeafOutline,
      title: 'Community Gardens',
      description: 'Find local community gardens, join PODS growing projects, and learn about sustainable food production in our area.',
      color: '#7C3AED',
      onClick: () => window.open('mailto:gardens@indigoregen.com.au?subject=Community Gardens Inquiry', '_blank')
    },
    {
      icon: IoHeartOutline,
      title: 'Volunteer',
      description: 'Get involved with composting programs, slow fashion shows, and other community regenerative initiatives.',
      color: '#10B981',
      onClick: () => window.open('mailto:volunteer@indigoregen.com.au?subject=Volunteer Inquiry', '_blank')
    },
    {
      icon: IoCalendarOutline,
      title: 'Events & Workshops',
      description: 'Join our yoga sessions, nature walks, skill-sharing workshops, and celebratory community events.',
      color: '#F59E0B',
      onClick: () => window.open('mailto:events@indigoregen.com.au?subject=Events Inquiry', '_blank')
    },
    {
      icon: IoNewspaperOutline,
      title: 'Newsletter',
      description: 'Subscribe to our newsletter for updates on regenerative practices, local columns, and community news.',
      color: '#EF4444',
      onClick: () => window.open('mailto:newsletter@indigoregen.com.au?subject=Newsletter Subscription', '_blank')
    },
    {
      icon: IoPeopleOutline,
      title: 'Skill Sharing',
      description: 'Connect with neighbors to share resources, skills, and equipment. Build our community network.',
      color: '#8B5CF6',
      onClick: () => window.open('mailto:skillshare@indigoregen.com.au?subject=Skill Sharing', '_blank')
    },
    {
      icon: IoShareSocialOutline,
      title: 'Transport Sharing',
      description: 'Join our car share network, community transport initiatives, and promote sustainable travel.',
      color: '#06B6D4',
      onClick: () => window.open('mailto:transport@indigoregen.com.au?subject=Transport Sharing', '_blank')
    },
    {
      icon: IoBookOutline,
      title: 'Learning Resources',
      description: 'Access our library of things, educational materials on permaculture, and regenerative practices.',
      color: '#84CC16',
      onClick: () => window.open('mailto:learning@indigoregen.com.au?subject=Learning Resources', '_blank')
    },
    {
      icon: IoCarOutline,
      title: 'Cool Seats',
      description: 'Learn about our innovative composting benches that combine community seating with sustainable waste management.',
      color: '#9333EA',
      onClick: () => setActiveSection('coolseats')
    },
    {
      icon: IoGlobeOutline,
      title: 'Climate Action',
      description: 'Join our efforts in emissions reduction, climate resilience, and supporting the plant-based treaty.',
      color: '#F97316',
      onClick: () => window.open('mailto:climate@indigoregen.com.au?subject=Climate Action', '_blank')
    }
  ];

  const QuickLinksPage = () => (
    <div className="quick-links-container" style={{ 
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
          Quick Links & Resources
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Connect with our community initiatives and find the resources you need 
          to participate in regenerative practices that nurture both people and planet.
        </p>
      </div>

      <div 
        className="quick-links-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}
      >
        {quickLinks.map((link, index) => (
          <QuickLinkCard key={index} {...link} />
        ))}
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
          Get In Touch
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Have questions or want to get more involved? We'd love to hear from you!
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="mailto:hello@indigoregen.com.au"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#7C3AED',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            <IoMailOutline size={24} />
            hello@indigoregen.com.au
          </a>
          
          <a 
            href="tel:+61XXXXXXXXX"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#7C3AED',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            <IoCallOutline size={24} />
            Call Us
          </a>
        </div>
        
        <p style={{ 
          color: '#E8D5FF', 
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          We typically respond within 24-48 hours. All inquiries welcome!
        </p>
      </div>
    </div>
  );

  const CoolSeatsPageWithBackButton = () => (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => setActiveSection('quicklinks')}
          style={{
            background: 'transparent',
            color: '#7C3AED',
            border: '2px solid #7C3AED',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
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
          ← Back to Quick Links
        </button>
      </div>
      <CoolSeats />
    </div>
  );

  return (
    <div>
      {/* Content */}
      {activeSection === 'quicklinks' ? <QuickLinksPage /> : <CoolSeatsPageWithBackButton />}
    </div>
  );
}

export default UserGuide;