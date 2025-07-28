import { IoArrowBackOutline } from 'react-icons/io5';

function MissionStatement({ onAccept, onNavigate }) {
  return (
    <>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => onNavigate && onNavigate('home')}
          style={{
            background: 'transparent',
            color: '#7C3AED',
            border: '2px solid #7C3AED',
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
            e.target.style.background = '#7C3AED';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#7C3AED';
          }}
        >
          <IoArrowBackOutline size={20} />
          Back to Home
        </button>
      </div>

      <p className="last-updated">Updated: April 17, 2025</p>

      <p className="introduction">
        Indigo Regen Inc. is dedicated to creating and celebrating regenerative practices 
        that nurture the health of local communities and our planet. We believe that 
        meaningful change happens when communities come together to share knowledge, 
        resources, and hope for a sustainable future.
      </p>

      <div className="section">
        <h2 className="section-title">1. Our Vision</h2>
        <p className="paragraph">
          Creating and celebrating regenerative practices that nurture the health of 
          local communities and our planet. We envision vibrant communities where 
          people actively participate in healing the earth through everyday actions, 
          shared wisdom, and collective care.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">2. Our Values</h2>
        <p className="paragraph">
          Everything we do is guided by our core values:
        </p>
        <div className="bullet-points">
          <p className="bullet-point">
            • <strong>Respect</strong> – For people, nature, and traditional knowledge
          </p>
          <p className="bullet-point">
            • <strong>Integrity</strong> – Acting authentically and transparently
          </p>
          <p className="bullet-point">
            • <strong>Kindness</strong> – Approaching all interactions with compassion
          </p>
          <p className="bullet-point">
            • <strong>Future focus</strong> – Making decisions for generations to come
          </p>
          <p className="bullet-point">
            • <strong>Inclusivity</strong> – Welcoming all voices and perspectives
          </p>
          <p className="bullet-point">
            • <strong>Collaboration</strong> – Working together for greater impact
          </p>
          <p className="bullet-point">
            • <strong>Curiosity</strong> – Continuously learning and growing
          </p>
          <p className="bullet-point">
            • <strong>Sustainability</strong> – Living within planetary boundaries
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">3. What We Do</h2>
        <p className="paragraph">
          We support our communities through diverse regenerative initiatives:
        </p>
        <div className="bullet-points">
          <p className="bullet-point">
            • <strong>Reducing food waste</strong> through composting programs and community education
          </p>
          <p className="bullet-point">
            • <strong>Growing more food</strong> via community gardens and portable growing systems (PODS)
          </p>
          <p className="bullet-point">
            • <strong>Reducing textile waste</strong> with slow fashion shows and sustainable clothing initiatives
          </p>
          <p className="bullet-point">
            • <strong>Sharing knowledge</strong> through research, workshops, newsletters, and community events
          </p>
          <p className="bullet-point">
            • <strong>Supporting sustainable transport</strong> with car sharing and community transport solutions
          </p>
          <p className="bullet-point">
            • <strong>Promoting natural burial</strong> and end-of-life practices that honor the earth
          </p>
          <p className="bullet-point">
            • <strong>Reducing emissions</strong> and building climate resilience in our communities
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">4. How We Connect</h2>
        <p className="paragraph">
          Community is at the heart of everything we do. We bring people together through:
        </p>
        <div className="bullet-points">
          <p className="bullet-point">
            • Yoga, dance, meditation, and mindful movement practices
          </p>
          <p className="bullet-point">
            • Shared meals featuring plant-based foods and local ingredients
          </p>
          <p className="bullet-point">
            • Nature walks, tree planting, and wildlife habitat creation
          </p>
          <p className="bullet-point">
            • Skill-sharing workshops and libraries of things
          </p>
          <p className="bullet-point">
            • Music, song, and celebration of our collective achievements
          </p>
          <p className="bullet-point">
            • Recording oral histories and preserving community wisdom
          </p>
          <p className="bullet-point">
            • Supporting each other through volunteering and resource sharing
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">5. Join Our Community</h2>
        <p className="paragraph">
          Whether you're interested in composting, community gardening, reducing waste, 
          learning new skills, or simply connecting with like-minded neighbors, there's 
          a place for you in the Indigo Regen community. Together, we can create the 
          regenerative future our planet needs.
        </p>
        <p className="paragraph">
          Every action counts – from riding bikes and using public transport to 
          nurturing friendships and welcoming newcomers. Join us in building a 
          communication network that supports both people and planet.
        </p>
      </div>

      <div className="action-buttons-container">
        <button className="accept-button" onClick={onAccept}>
          <span>Join Our Community</span>
          <span className="checkmark">✓</span>
        </button>
      </div>
    </>
  )
}

export default MissionStatement
