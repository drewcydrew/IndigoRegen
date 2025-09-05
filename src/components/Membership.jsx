import React from 'react';
import { 
  IoPeopleOutline, 
  IoDocumentTextOutline, 
  IoHeartOutline,
  IoMailOutline,
  IoArrowBackOutline,
  IoCheckmarkCircleOutline,
  IoBusinessOutline
} from 'react-icons/io5';

const Membership = ({ onNavigate }) => {
  const benefits = [
    {
      icon: IoPeopleOutline,
      title: "Community Network",
      description: "Connect with like-minded individuals passionate about regenerative practices",
      color: "#6366F1"
    },
    {
      icon: IoHeartOutline,
      title: "Priority Access",
      description: "Get early access to workshops, events, and new community initiatives",
      color: "#10B981"
    },
    {
      icon: IoDocumentTextOutline,
      title: "Resources & Guides",
      description: "Access exclusive educational materials and implementation guides",
      color: "#F59E0B"
    },
    {
      icon: IoBusinessOutline,
      title: "Governance Participation",
      description: "Have a voice in organizational decisions and future direction",
      color: "#8B5CF6"
    }
  ];

  const membershipTypes = [
    {
      name: "Community Member",
      price: "Free",
      description: "Join our community and participate in public events and initiatives",
      features: [
        "Access to public events",
        "Community newsletter",
        "Basic resource library",
        "Volunteer opportunities"
      ]
    },
    {
      name: "Supporting Member",
      price: "$25/year",
      description: "Support our mission while gaining additional access and benefits",
      features: [
        "All Community Member benefits",
        "Priority event registration",
        "Exclusive workshops",
        "Member directory access",
        "Quarterly member meetings"
      ]
    },
    {
      name: "Organizational Member",
      price: "$100/year",
      description: "Perfect for businesses and organizations wanting to support regenerative practices",
      features: [
        "All Supporting Member benefits",
        "Organizational recognition",
        "Partnership opportunities",
        "Bulk workshop discounts",
        "Custom consultation sessions"
      ]
    }
  ];

  return (
    <div className="membership-container" style={{ 
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
          🤝 Join Our Community
        </h2>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Become a member of Indigo Regen Inc. and help build a more sustainable and 
          regenerative future for our communities. Choose the membership level that 
          works best for you.
        </p>
      </div>

      <div className="benefits-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Why Become a Member?
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                background: '#F8F9FA',
                border: `2px solid ${benefit.color}`,
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
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
              <benefit.icon size={48} color={benefit.color} style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.2rem' }}>{benefit.title}</h4>
              <p style={{ color: '#374151', margin: 0 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="membership-types-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Membership Options
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {membershipTypes.map((type, index) => (
            <div 
              key={index}
              style={{
                background: '#F8F9FA',
                border: '2px solid #6366F1',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative'
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
                margin: '0 0 0.5rem 0',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                {type.name}
              </h4>
              
              <div style={{ 
                fontSize: '2rem',
                fontWeight: '700',
                color: '#6366F1',
                margin: '1rem 0'
              }}>
                {type.price}
              </div>
              
              <p style={{ 
                color: '#374151', 
                margin: '0 0 1.5rem 0',
                fontSize: '1rem',
                lineHeight: 1.5
              }}>
                {type.description}
              </p>
              
              <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                {type.features.map((feature, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <IoCheckmarkCircleOutline size={16} color="#10B981" />
                    <span style={{ color: '#374151', fontSize: '0.9rem' }}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={`mailto:membership@indigoregen.com.au?subject=${type.name} Membership Inquiry`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366F1',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '0.75rem 1.5rem',
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
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section" style={{ 
        background: '#F8F9FA',
        border: '2px solid #6366F1',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Questions About Membership?
        </h3>
        <p style={{ 
          color: '#374151', 
          marginBottom: '1.5rem'
        }}>
          We're here to help you find the right membership option for your needs and interests.
        </p>
        
        <a 
          href="mailto:membership@indigoregen.com.au?subject=Membership Questions"
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
          Contact Us About Membership
        </a>
      </div>
    </div>
  );
};

export default Membership;
