import React from 'react';
import { 
  IoCalendarOutline, 
  IoLocationOutline, 
  IoTimeOutline,
  IoPeopleOutline,
  IoBookOutline,
  IoLeafOutline,
  IoMailOutline,
  IoTicketOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoArrowBackOutline
} from 'react-icons/io5';

const EventsWorkshops = ({ onNavigate }) => {
  const documents = [
    {
      title: "Summit of Food Waste 2025 May - Michael Mobbs",
      description: "Documentation and findings from the Food Waste Summit featuring Michael Mobbs",
      filename: "summit of food waste 2025 May.pdf",
      size: "3.4 MB"
    },
    {
      title: "Summit of Food Waste 2025 May (Alternative)",
      description: "Alternative documentation from the Food Waste Summit",
      filename: "summit of food waste 2025 May (1).pdf",
      size: "3.4 MB"
    }
  ];

  const pastEvents = [
    {
      title: "Cool Seats Installation Workshop",
      description: "Hands-on training for installing and maintaining Cool Seats in communities",
      date: "June 20, 2025",
      participants: "18"
    },
    {
      title: "Regenerative Agriculture Talk",
      description: "Expert presentation on soil health and sustainable farming practices",
      date: "May 15, 2025",
      participants: "35"
    }
  ];

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/documents/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <p style={{ 
          color: '#374151', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Join our community events and educational workshops to learn about sustainable 
          living, regenerative practices, and environmental stewardship. Connect with 
          like-minded individuals and build skills for a more sustainable future.
        </p>
      </div>

      <div className="why-attend-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Why Attend?
        </h3>
        
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
            <IoBookOutline size={48} color="#6366F1" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Educational Workshops</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Hands-on learning experiences on composting, permaculture, and sustainable living.
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            border: '2px solid #10B981',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <IoPeopleOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Community Building</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Opportunities to meet and connect with neighbors and fellow environmental enthusiasts.
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
            <h4 style={{ color: '#1F2937', marginBottom: '1rem', fontSize: '1.3rem' }}>Practical Skills</h4>
            <p style={{ color: '#374151', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>
              Gain real-world skills that you can apply at home and in your community.
            </p>
          </div>
        </div>
      </div>

      <div className="event-resources-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Event Resources
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleDownload("summit of food waste 2025 May.pdf")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F59E0B';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IoDocumentTextOutline size={40} color="#F59E0B" />
            <div style={{ flex: 1 }}>
              <h4 style={{ 
                color: '#1F2937', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Summit of Food Waste 2025 May - Michael Mobbs
              </h4>
              <p style={{ 
                color: '#374151', 
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem'
              }}>
                Documentation and findings from the Food Waste Summit featuring Michael Mobbs
              </p>
              <span style={{ 
                color: '#F59E0B', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                3.4 MB
              </span>
            </div>
            <IoDownloadOutline size={24} color="#F59E0B" />
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #6366F1',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleDownload("summit of food waste 2025 May (1).pdf")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F59E0B';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IoDocumentTextOutline size={40} color="#F59E0B" />
            <div style={{ flex: 1 }}>
              <h4 style={{ 
                color: '#1F2937', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Summit of Food Waste 2025 May (Alt)
              </h4>
              <p style={{ 
                color: '#374151', 
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem'
              }}>
                Alternative documentation from the Food Waste Summit
              </p>
              <span style={{ 
                color: '#F59E0B', 
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                3.4 MB
              </span>
            </div>
            <IoDownloadOutline size={24} color="#F59E0B" />
          </div>
        </div>
      </div>

      <div className="upcoming-events-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
          fontSize: '2rem', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Upcoming Events
        </h3>
        
        <div style={{
          background: '#F8F9FA',
          border: '2px solid #10B981',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <IoCalendarOutline size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
          <h4 style={{ 
            color: '#1F2937', 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            New Events Coming Soon!
          </h4>
          <p style={{ 
            color: '#374151', 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            We're planning exciting new workshops and community events. Stay tuned for 
            announcements about upcoming sessions on composting, permaculture design, 
            sustainable living practices, and more community initiatives.
          </p>
          <p style={{ 
            color: '#374151', 
            fontSize: '1rem',
            marginBottom: '0'
          }}>
            Follow up with us to be notified when new events are scheduled!
          </p>
        </div>
      </div>

      <div className="past-events-section" style={{ marginBottom: '3rem' }}>
        <h3 style={{ 
          color: '#1F2937', 
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
          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #8B5CF6',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 0.5rem 0',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Cool Seats Installation Workshop
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <IoCalendarOutline size={16} color="#8B5CF6" />
                <span style={{ 
                  color: '#8B5CF6', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Date: June 20, 2025
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IoPeopleOutline size={16} color="#10B981" />
                <span style={{ 
                  color: '#10B981', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Participants: 18
                </span>
              </div>
            </div>
          </div>

          <div 
            style={{
              background: '#F8F9FA',
              border: '2px solid #8B5CF6',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h4 style={{ 
              color: '#1F2937', 
              margin: '0 0 0.5rem 0',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Regenerative Agriculture Talk
            </h4>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <IoCalendarOutline size={16} color="#8B5CF6" />
                <span style={{ 
                  color: '#8B5CF6', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Date: May 15, 2025
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IoPeopleOutline size={16} color="#10B981" />
                <span style={{ 
                  color: '#10B981', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Participants: 35
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsWorkshops;