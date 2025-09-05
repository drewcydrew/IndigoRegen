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
          🎮 Play The Adaption Game
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
            TAG Climate Drill
          </h3>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Experience interactive climate adaptation scenarios through the TAG Climate Drill. 
            This engaging platform helps communities and organizations prepare for climate 
            challenges through simulation exercises and collaborative problem-solving.
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

      {/* Future Game Section */}
      <div className="future-game-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #F59E0B',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoGameControllerOutline size={48} color="#F59E0B" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#1F2937', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Our Adaption Game - Coming Soon
          </h3>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            We're developing our own interactive learning game focused on regenerative practices 
            and community resilience. This game will help players understand local environmental 
            challenges and solutions specific to our region.
          </p>
          
          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid #F59E0B',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ 
              color: '#1F2937', 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              What to Expect
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              textAlign: 'left'
            }}>
              <div>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Local climate scenarios
                </p>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Community garden management
                </p>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Composting challenges
                </p>
              </div>
              <div>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Sustainable living tips
                </p>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Resource sharing networks
                </p>
                <p style={{ color: '#374151', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                  • Real-world impact tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Features */}
      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#F8F9FA',
            border: '2px solid #6366F1',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoSchoolOutline size={48} color="#6366F1" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Interactive Learning</h3>
            <p style={{ color: '#374151', margin: 0 }}>
              Learn through hands-on scenarios that mirror real-world environmental 
              challenges and community-based solutions.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #8B5CF6',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoGlobeOutline size={48} color="#8B5CF6" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Community Focus</h3>
            <p style={{ color: '#374151', margin: 0 }}>
              Games designed around community resilience, local resource management, 
              and collaborative environmental stewardship.
            </p>
          </div>
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
          Stay Updated
        </h3>
        <p style={{ 
          color: '#374151', 
          marginBottom: '1.5rem'
        }}>
          Want to be notified when our game launches or learn about other climate adaptation resources?
        </p>
        
        <a 
          href="mailto:game@indigoregen.com.au?subject=Adaption Game Updates"
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
          Get Updates
        </a>
      </div>
    </div>
  );
};

export default AdaptionGame;