import React from 'react';
import { 
  IoGameControllerOutline, 
  IoSchoolOutline,
  IoMailOutline,
  IoArrowBackOutline,
  IoGlobeOutline,
  IoLinkOutline
} from 'react-icons/io5';

const AdaptionGame = ({ onNavigate }) => {
  return (
    <div className="adaption-game-container" style={{ 
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
          Play the Adaption Game
        </h2>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Learn about climate adaptation and regenerative practices through interactive 
          gaming experiences. Develop practical skills while having fun and making a 
          positive impact on your understanding of environmental solutions.
        </p>
      </div>

      {/* TAG Climate Drill Section */}
      <div className="tag-climate-drill-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #10B981',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoGlobeOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#1F2937', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Tag Climate Drill
          </h3>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Experience interactive climate adaptation scenarios through the TAG Climate Drill. 
            This engaging platform helps communities and organisations prepare for climate 
            challenges through simulation exercises and collaborative problem solving.
          </p>
          
          <a 
            href="https://www.tagclimatedrill.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFFFFF',
              backgroundColor: '#10B981',
              border: '2px solid #10B981',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#059669';
              e.currentTarget.style.borderColor = '#059669';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#10B981';
              e.currentTarget.style.borderColor = '#10B981';
            }}
          >
            <IoLinkOutline size={24} />
            Play TAG Climate Drill
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdaptionGame;