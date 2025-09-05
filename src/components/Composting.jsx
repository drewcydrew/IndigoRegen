import React from 'react';
import { 
  IoLeafOutline, 
  IoNutritionOutline, 
  IoRefreshOutline,
  IoMailOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

const Composting = ({ onNavigate }) => {
  return (
    <div className="composting-container" style={{ 
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
          🍃 Composting Programs
        </h2>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Learn about our community composting initiatives and how you can reduce 
          food waste while creating valuable soil amendments for local gardens and 
          regenerative agriculture projects.
        </p>
      </div>

      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#F8F9FA',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoRefreshOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#1F2937', marginBottom: '1rem' }}>Community Composting</h3>
            <p style={{ color: '#374151' }}>
              Join our neighborhood composting hubs where organic waste is transformed 
              into rich compost for community gardens and local food production.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #F59E0B',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoLeafOutline size={48} color="#F59E0B" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#1F2937', marginBottom: '1rem' }}>Home Composting</h3>
            <p style={{ color: '#374151' }}>
              Learn techniques for backyard composting, vermicomposting, and small-space 
              solutions that work for apartments and urban settings.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #8B5CF6',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoNutritionOutline size={48} color="#8B5CF6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#1F2937', marginBottom: '1rem' }}>Soil Health</h3>
            <p style={{ color: '#374151' }}>
              Discover how composting improves soil health, increases biodiversity, 
              and supports regenerative farming practices in our local ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="placeholder-section" style={{ 
        background: '#F8F9FA',
        border: '2px solid #6366F1',
        borderRadius: '12px',
        padding: '3rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '1.8rem', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          More Content Coming Soon
        </h3>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          We're developing comprehensive resources on composting techniques, 
          community programs, and educational materials. Check back soon for:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Composting Guides</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Workshop Schedules</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Community Hub Locations</h4>
          </div>
          <div>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Equipment Sharing</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Troubleshooting Tips</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Success Stories</h4>
          </div>
        </div>
      </div>

      <div className="contact-section" style={{ 
        background: '#F8F9FA',
        border: '2px solid #10B981',
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
          Join Our Composting Community
        </h3>
        <p style={{ 
          color: '#374151', 
          marginBottom: '1.5rem'
        }}>
          Interested in starting or joining a composting program? We'd love to help you get started!
        </p>
        
        <a 
          href="mailto:composting@indigoregen.com.au?subject=Composting Program Inquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#10B981',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #10B981',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#10B981';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
            e.currentTarget.style.color = '#10B981';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Composting
        </a>
      </div>
    </div>
  );
};

export default Composting;
