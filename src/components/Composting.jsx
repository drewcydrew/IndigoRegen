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
          margin: '0 auto 1.5rem auto'
        }}>
          Learn about our community composting initiatives and how you can reduce 
          food waste while creating valuable soil amendments for local gardens and 
          regenerative agriculture projects.
        </p>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.1rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          See our <button 
            onClick={() => onNavigate && onNavigate('coolseats')}
            style={{
              background: 'transparent',
              color: '#9333EA',
              border: 'none',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '500',
              padding: 0
            }}
          >
            Cool Seats
          </button> also!
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
            <h3 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Community Composting</h3>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Join our neighbourhood composting hubs where organic waste is transformed 
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
            <h3 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Home Composting</h3>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Learn techniques for backyard composting and small space solutions that 
              work for apartments and urban settings.
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
            <h3 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Soil Health</h3>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Discover how composting improves soil health, increases biodiversity 
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
          More content coming soon
        </h3>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          We're developing comprehensive resources on composting techniques, 
          community programs and educational materials.
        </p>
        <p style={{ 
          color: '#374151', 
          fontSize: '1rem',
          marginBottom: '1.5rem'
        }}>
          Check back soon for:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Composting guidelines
            </p>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Workshop schedules
            </p>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Community hub locations
            </p>
          </div>
          <div>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Equipment sharing
            </p>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Troubleshooting tips
            </p>
            <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              • Success stories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composting;
