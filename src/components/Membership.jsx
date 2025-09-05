import React from 'react';
import { 
  IoPeopleOutline, 
  IoDocumentTextOutline, 
  IoTimeOutline,
  IoMailOutline,
  IoArrowBackOutline,
  IoBusinessOutline,
  IoNewspaperOutline,
  IoHandRightOutline
} from 'react-icons/io5';

const Membership = ({ onNavigate }) => {
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
          Membership
        </h2>
      </div>

      <div className="signup-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #6366F1',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoNewspaperOutline size={48} color="#6366F1" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: '#1F2937', 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Sign Up for Membership & Newsletter
          </h3>
          <p style={{ 
            color: '#374151', 
            margin: '0 0 2rem 0',
            fontSize: '1.1rem',
            lineHeight: 1.5
          }}>
            Sign up for our membership and monthly newsletter here:
          </p>
          
          <a 
            href="https://docs.google.com/document/d/1vL-W46-4EsIPwUCJdmM33lLOFHux-Csy/mobilebasic"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFFFFF',
              backgroundColor: '#6366F1',
              border: '2px solid #6366F1',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4F46E5';
              e.currentTarget.style.borderColor = '#4F46E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6366F1';
              e.currentTarget.style.borderColor = '#6366F1';
            }}
          >
            <IoDocumentTextOutline size={24} />
            Sign Up Now
          </a>
        </div>
      </div>

      <div className="volunteer-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #10B981',
          borderRadius: '12px',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <IoTimeOutline size={48} color="#10B981" />
            <h3 style={{ 
              color: '#1F2937', 
              fontSize: '1.8rem', 
              margin: 0,
              fontWeight: '600'
            }}>
              Time and Skills
            </h3>
          </div>
          
          <p style={{ 
            color: '#374151', 
            margin: '0 0 1.5rem 0',
            fontSize: '1.1rem',
            lineHeight: 1.5
          }}>
            One important way to support Indigo Regen is to donate some of your 
            valuable time and skills.
          </p>
          
          <p style={{ 
            color: '#374151', 
            margin: '0 0 1rem 0',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            Currently we are looking for help with…
          </p>
          
          <div style={{ 
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid #10B981',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#374151',
              fontSize: '1rem'
            }}>
              <span>•</span>
              <span style={{ fontStyle: 'italic' }}>???</span>
            </div>
          </div>
          
          <p style={{ 
            color: '#374151', 
            margin: '0 0 1rem 0',
            fontSize: '1rem'
          }}>
            Email us at:
          </p>
          
          <a 
            href="mailto:volunteer@indigoregen.com.au?subject=Volunteer Inquiry"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#10B981',
              textDecoration: 'none',
              fontSize: '1rem',
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
            <IoMailOutline size={20} />
            volunteer@indigoregen.com.au
          </a>
        </div>
      </div>

      <div className="about-section" style={{ 
        background: '#F8F9FA',
        border: '2px solid #8B5CF6',
        borderRadius: '12px',
        padding: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <IoBusinessOutline size={48} color="#8B5CF6" />
          <h3 style={{ 
            color: '#1F2937', 
            fontSize: '1.8rem', 
            margin: 0,
            fontWeight: '600'
          }}>
            About Indigo Regen Inc.
          </h3>
        </div>
        
        <p style={{ 
          color: '#374151', 
          margin: '0 0 1rem 0',
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          A.B.N. 24469535565
        </p>
        
        <p style={{ 
          color: '#374151', 
          margin: 0,
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          Indigo Regen Inc. is a registered not-for-profit organization that creates and celebrates 
          regenerative practices that nurture the health of local communities, biodiversity and our 
          planet.
        </p>
      </div>
    </div>
  );
};

export default Membership;