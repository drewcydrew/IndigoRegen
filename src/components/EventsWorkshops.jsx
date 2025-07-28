import React from 'react';
import { 
  IoCalendarOutline, 
  IoLocationOutline, 
  IoTimeOutline,
  IoPeopleOutline,
  IoBookOutline,
  IoLeafOutline,
  IoMailOutline,
  IoTicketOutline
} from 'react-icons/io5';

const EventsWorkshops = () => {
  const upcomingEvents = [
    {
      title: "Community Composting Workshop",
      description: "Learn hands-on techniques for composting at home and in community spaces",
      date: "August 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Community Garden Center",
      capacity: "25 participants",
      type: "Workshop"
    },
    {
      title: "Sustainable Living Seminar",
      description: "Explore practical strategies for reducing environmental impact in daily life",
      date: "September 8, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Local Community Hall",
      capacity: "50 participants",
      type: "Seminar"
    }
  ];

  const pastEvents = [
    {
      title: "Cool Seats Installation Workshop",
      description: "Hands-on training for installing and maintaining Cool Seats in communities",
      date: "June 20, 2025",
      attendees: "18 participants"
    },
    {
      title: "Regenerative Agriculture Talk",
      description: "Expert presentation on soil health and sustainable farming practices",
      date: "May 15, 2025",
      attendees: "35 participants"
    }
  ];

  const handleEventInquiry = () => {
    const mailtoLink = "mailto:events@indigoregen.com.au?subject=Event Inquiry&body=Hello Indigo Regen Team,%0D%0A%0D%0AI'm interested in learning more about your upcoming events and workshops.%0D%0A%0D%0APlease provide information about:%0D%0A- Upcoming workshop dates%0D%0A- Registration process%0D%0A- Event locations%0D%0A%0D%0AThank you!";
    window.location.href = mailtoLink;
  };

  return (
    <div className="events-workshops-container" style={{ 
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
          Events & Workshops
        </h2>
        <p style={{ 
          color: '#E8D5FF', 
          fontSize: '1.2rem', 
          opacity: 0.9,
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Join our community events and educational workshops to learn about sustainable 
          living, regenerative practices, and environmental stewardship. Connect with 
          like-minded individuals and build skills for a more sustainable future.
        </p>
      </div>

      <div className="features-section" style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#1E1B4B',
            border: '2px solid #7C3AED',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoBookOutline size={48} color="#7C3AED" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Educational Workshops</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Hands-on learning experiences covering composting, permaculture, 
              sustainable living practices, and environmental restoration techniques.
            </p>
          </div>

          <div style={{
            background: '#1E1B4B',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoPeopleOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Community Building</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Connect with neighbors and environmental enthusiasts through regular 
              gatherings, skill-sharing sessions, and collaborative projects.
            </p>
          </div>

          <div style={{
            background: '#1E1B4B',
            border: '2px solid #F59E0B',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoLeafOutline size={48} color="#F59E0B" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#E8D5FF', marginBottom: '1rem' }}>Practical Skills</h3>
            <p style={{ color: '#E8D5FF', opacity: 0.9 }}>
              Learn actionable skills you can implement immediately, from home 
              composting to community garden management and sustainable living practices.
            </p>
          </div>
        </div>
      </div>

      <div className="upcoming-events-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Upcoming Events
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '1.5rem'
        }}>
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              style={{
                background: '#1E1B4B',
                border: '2px solid #10B981',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#10B981';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <IoTicketOutline size={24} color="#10B981" />
                <span style={{ 
                  color: '#10B981', 
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {event.type}
                </span>
              </div>
              
              <h4 style={{ 
                color: '#E8D5FF', 
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                fontWeight: '600'
              }}>
                {event.title}
              </h4>
              
              <p style={{ 
                color: '#E8D5FF', 
                opacity: 0.9,
                margin: '0 0 1rem 0',
                fontSize: '1rem',
                lineHeight: 1.5
              }}>
                {event.description}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IoCalendarOutline size={16} color="#7C3AED" />
                  <span style={{ color: '#E8D5FF', fontSize: '0.9rem' }}>{event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IoTimeOutline size={16} color="#7C3AED" />
                  <span style={{ color: '#E8D5FF', fontSize: '0.9rem' }}>{event.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IoLocationOutline size={16} color="#7C3AED" />
                  <span style={{ color: '#E8D5FF', fontSize: '0.9rem' }}>{event.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IoPeopleOutline size={16} color="#7C3AED" />
                  <span style={{ color: '#E8D5FF', fontSize: '0.9rem' }}>{event.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="past-events-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#E8D5FF', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Past Events
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {pastEvents.map((event, index) => (
            <div 
              key={index}
              style={{
                background: '#1E1B4B',
                border: '2px solid #E8D5FF',
                borderRadius: '12px',
                padding: '1.5rem',
                opacity: 0.8
              }}
            >
              <h4 style={{ 
                color: '#E8D5FF', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                {event.title}
              </h4>
              <p style={{ 
                color: '#E8D5FF', 
                opacity: 0.8,
                margin: '0 0 1rem 0',
                fontSize: '0.95rem'
              }}>
                {event.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ 
                  color: '#7C3AED', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {event.date}
                </span>
                <span style={{ 
                  color: '#10B981', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {event.attendees}
                </span>
              </div>
            </div>
          ))}
        </div>
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
          Want to Join Our Events?
        </h3>
        <p style={{ 
          color: '#E8D5FF', 
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>
          Stay updated on upcoming workshops and community events. We'd love to have you join us!
        </p>
        
        <button
          onClick={handleEventInquiry}
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
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#7C3AED';
            e.target.style.color = '#E8D5FF';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(124, 58, 237, 0.1)';
            e.target.style.color = '#7C3AED';
          }}
        >
          <IoMailOutline size={24} />
          Contact Us About Events
        </button>
      </div>
    </div>
  );
};

export default EventsWorkshops;