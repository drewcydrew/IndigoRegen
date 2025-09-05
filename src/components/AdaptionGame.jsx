import React from 'react';
import { 
  IoGameControllerOutline, 
  IoTrophyOutline, 
  IoConstructOutline,
  IoMailOutline,
  IoArrowBackOutline,
  IoPlayOutline,
  IoSchoolOutline,
  IoGlobeOutline
} from 'react-icons/io5';

const AdaptionGame = ({ onNavigate }) => {
  const gameFeatures = [
    {
      icon: IoConstructOutline,
      title: "Interactive Challenges",
      description: "Solve real-world environmental problems through engaging gameplay scenarios",
      color: "#6366F1"
    },
    {
      icon: IoSchoolOutline,
      title: "Learning Modules",
      description: "Educational content covering climate adaptation, sustainability, and regenerative practices",
      color: "#10B981"
    },
    {
      icon: IoTrophyOutline,
      title: "Achievement System",
      description: "Earn badges and track your progress as you master adaptation strategies",
      color: "#F59E0B"
    },
    {
      icon: IoGlobeOutline,
      title: "Community Impact",
      description: "See how your game actions translate to real-world environmental benefits",
      color: "#8B5CF6"
    }
  ];

  const gameModules = [
    {
      title: "Climate Resilience",
      description: "Learn to build systems that can withstand and adapt to climate changes",
      difficulty: "Beginner",
      duration: "30-45 minutes"
    },
    {
      title: "Regenerative Agriculture",
      description: "Explore farming techniques that restore soil health and sequester carbon",
      difficulty: "Intermediate",
      duration: "45-60 minutes"
    },
    {
      title: "Community Systems",
      description: "Design sustainable community infrastructure and social networks",
      difficulty: "Advanced",
      duration: "60-90 minutes"
    }
  ];

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
          Learn about climate adaptation and regenerative practices through an interactive 
          gaming experience. Develop practical skills while having fun and making a 
          positive impact on your understanding of environmental solutions.
        </p>
      </div>

      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Game Features
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {gameFeatures.map((feature, index) => (
            <div 
              key={index}
              style={{
                background: '#F8F9FA',
                border: `2px solid ${feature.color}`,
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
              <feature.icon size={48} color={feature.color} style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.2rem' }}>{feature.title}</h4>
              <p style={{ color: '#374151', margin: 0 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="modules-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Learning Modules
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {gameModules.map((module, index) => (
            <div 
              key={index}
              style={{
                background: '#F8F9FA',
                border: '2px solid #6366F1',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
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
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                {module.title}
              </h4>
              
              <p style={{ 
                color: '#374151', 
                margin: '0 0 1rem 0',
                fontSize: '1rem',
                lineHeight: 1.5
              }}>
                {module.description}
              </p>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                <span style={{ 
                  color: '#6366F1',
                  fontWeight: '500',
                  background: 'rgba(99, 102, 241, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}>
                  {module.difficulty}
                </span>
                <span style={{ color: '#374151' }}>
                  {module.duration}
                </span>
              </div>
              
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6366F1',
                  backgroundColor: 'transparent',
                  border: '2px solid #6366F1',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
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
                <IoPlayOutline size={16} />
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="placeholder-section" style={{ 
        background: '#F8F9FA',
        border: '2px solid #F59E0B',
        borderRadius: '12px',
        padding: '3rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <IoGameControllerOutline size={64} color="#F59E0B" style={{ marginBottom: '1rem' }} />
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '1.8rem', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Game Coming Soon!
        </h3>
        <p style={{ 
          color: '#374151', 
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          We're currently developing The Adaption Game with educational experts and 
          game designers. This interactive learning experience will help players 
          understand and implement real-world climate adaptation strategies.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Scenario-based challenges</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Progress tracking</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Multiplayer collaboration</h4>
          </div>
          <div>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Real-world applications</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Expert-developed content</h4>
            <h4 style={{ color: '#1F2937', margin: '0 0 0.5rem 0' }}>• Mobile & desktop support</h4>
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
          Get Notified When We Launch
        </h3>
        <p style={{ 
          color: '#374151', 
          marginBottom: '1.5rem'
        }}>
          Want to be among the first to play The Adaption Game? Get in touch to join our beta testing list!
        </p>
        
        <a 
          href="mailto:game@indigoregen.com.au?subject=Adaption Game Beta Interest"
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
          Join Beta Testing List
        </a>
      </div>
    </div>
  );
};

export default AdaptionGame;
