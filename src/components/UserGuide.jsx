import React, { useState, useEffect } from 'react';
import { 
  IoBookOutline, 
  IoStatsChartOutline, 
  IoLeafOutline, 
  IoCarOutline, 
  IoHomeOutline, 
  IoCallOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline
} from 'react-icons/io5';
import userGuideContent from '../data/userGuideContent.json';

const MediaSection = ({ media }) => {
  const { src, title, type } = media;
  
  // Auto-detect media type if not specified
  const getMediaType = () => {
    if (type) return type;
    const extension = src.split('.').pop().toLowerCase();
    return ['mp4', 'mov', 'avi', 'webm'].includes(extension) ? 'video' : 'image';
  };

  const mediaType = getMediaType();

  return (
    <div className="media-section" style={{ 
      flex: '1',
      minWidth: '300px',
      maxWidth: '100%'
    }}>
      {mediaType === 'video' ? (
        <video 
          controls 
          muted
          autoPlay
          loop
          className="demo-video"
          style={{ 
            objectFit: 'fill',
            width: '100%',
            height: 'auto',
            borderRadius: '8px'
          }}
          poster={`/videos/${title.toLowerCase()}-poster.jpg`}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src={src}
          alt={title}
          className="demo-image"
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
      )}
      <p className="media-caption" style={{
        textAlign: 'center',
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#bdc3c7',
        fontStyle: 'italic'
      }}>{title}</p>
    </div>
  );
};

const Section = ({ section, isMobile, sectionId }) => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <div className="bullet-points">
          {content.map((item, index) => (
            <p key={index} className="bullet-point" dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
      );
    }
    return <p className="paragraph" dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const hasMedia = section.media;
  
  return (
    <div 
      id={sectionId}
      className={hasMedia ? "section-with-media" : "section-content"} 
      style={{ 
        marginBottom: '2rem',
        display: hasMedia ? 'flex' : 'block',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1rem' : '2rem',
        alignItems: isMobile ? 'stretch' : 'flex-start',
        scrollMarginTop: '2rem'
      }}
    >
      <div 
        className="section-content" 
        style={{ 
          flex: hasMedia ? '1' : 'auto',
          minWidth: hasMedia && !isMobile ? '300px' : 'auto'
        }}
      >
        {section.subheading && (
          <h3 style={{ 
            marginTop: '2rem', 
            marginBottom: '1rem', 
            color: '#ecf0f1', 
            fontSize: '1.3rem' 
          }}>
            {section.subheading}
          </h3>
        )}
        {renderContent(section.content)}
      </div>
      {hasMedia && (
        <MediaSection media={section.media} />
      )}
    </div>
  );
};

const DynamicPage = ({ pageKey, isMobile }) => {
  const pageData = userGuideContent[pageKey];
  
  if (!pageData) return <div>Page not found</div>;

  const generateSectionId = (index, section) => {
    if (section.subheading) {
      return `${pageKey}-${section.subheading.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    }
    return `${pageKey}-section-${index}`;
  };

  return (
    <div className="section">
      <h2 className="section-title">{pageData.title}</h2>
      {pageData.sections.map((section, index) => (
        <Section 
          key={index} 
          section={section} 
          isMobile={isMobile}
          sectionId={generateSectionId(index, section)}
        />
      ))}
    </div>
  );
};

function UserGuide() {
  const [currentPage, setCurrentPage] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedPages, setExpandedPages] = useState({});
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get sections with subheadings for each page
  const getPageSections = (pageKey) => {
    const pageData = userGuideContent[pageKey];
    if (!pageData) return [];
    
    return pageData.sections
      .map((section, index) => ({
        ...section,
        id: section.subheading 
          ? `${pageKey}-${section.subheading.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
          : `${pageKey}-section-${index}`,
        index
      }))
      .filter(section => section.subheading);
  };

  const pages = {
    introduction: { 
      component: () => <DynamicPage pageKey="introduction" isMobile={isMobile} />, 
      title: 'Introduction',
      icon: IoBookOutline,
      color: '#3498db'
    },
    analyze: { 
      component: () => <DynamicPage pageKey="analyze" isMobile={isMobile} />, 
      title: 'Analyze',
      icon: IoStatsChartOutline,
      color: '#e74c3c'
    },
    cultivate: { 
      component: () => <DynamicPage pageKey="cultivate" isMobile={isMobile} />, 
      title: 'Cultivate',
      icon: IoLeafOutline,
      color: '#27ae60'
    },
    harvest: { 
      component: () => <DynamicPage pageKey="harvest" isMobile={isMobile} />, 
      title: 'Harvest',
      icon: IoCarOutline,
      color: '#f39c12'
    },
    gardens: { 
      component: () => <DynamicPage pageKey="gardens" isMobile={isMobile} />, 
      title: 'Gardens',
      icon: IoHomeOutline,
      color: '#9b59b6'
    },
    support: { 
      component: () => <DynamicPage pageKey="support" isMobile={isMobile} />, 
      title: 'Support',
      icon: IoCallOutline,
      color: '#1abc9c'
    }
  };

  const renderPage = () => {
    const PageComponent = pages[currentPage].component;
    return <PageComponent />;
  };

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    setExpandedPages(prev => ({ ...prev, [pageId]: true }));
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Handle pending scroll after page change
  useEffect(() => {
    if (pendingScrollTarget) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setPendingScrollTarget(null);
      }, 100); // Small delay to ensure page content is rendered

      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingScrollTarget]);

  const handleSectionNavigation = (sectionId, targetPage) => {
    // Extract page from sectionId if targetPage not provided
    const pageKey = targetPage || sectionId.split('-')[0];
    
    if (pageKey !== currentPage) {
      // Navigate to different page first, then scroll
      setCurrentPage(pageKey);
      setExpandedPages(prev => ({ ...prev, [pageKey]: true }));
      setPendingScrollTarget(sectionId);
    } else {
      // Same page, scroll immediately
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const togglePageExpansion = (pageId) => {
    setExpandedPages(prev => ({ ...prev, [pageId]: !prev[pageId] }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="user-guide-container" style={{ display: 'flex', minHeight: '100vh', gap: 0 }}>
      {/* Mobile Header */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: '#2c3e50',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          zIndex: 1001,
          borderBottom: '1px solid #34495e'
        }}>
          <button
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              color: '#ecf0f1',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isSidebarOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
          </button>
          <h3 style={{
            margin: '0 0 0 1rem',
            fontSize: '1.2rem',
            color: '#ecf0f1',
            fontWeight: '600'
          }}>
            {pages[currentPage].title}
          </h3>
        </div>
      )}

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="sidebar" style={{ 
        width: isMobile ? '320px' : '320px',
        minWidth: isMobile ? '320px' : '320px', 
        position: 'fixed',
        top: isMobile ? '60px' : 0,
        left: isMobile ? 0 : 0,
        height: isMobile ? 'calc(100vh - 60px)' : '100vh',
        backgroundColor: '#2c3e50',
        padding: isMobile ? '1rem 1.5rem' : '2rem 1.5rem',
        overflowY: 'auto',
        borderRight: '1px solid #34495e',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        transform: isMobile ? (isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
        visibility: isMobile ? (isSidebarOpen ? 'visible' : 'hidden') : 'visible',
        transition: isMobile ? 'transform 0.3s ease, visibility 0.3s ease' : 'none',
        zIndex: 1000
      }}>
        {!isMobile && (
          <h3 style={{ 
            margin: '0 0 2rem 0', 
            fontSize: '1.4rem', 
            fontWeight: '700',
            color: '#ecf0f1',
            borderBottom: '2px solid #3498db',
            paddingBottom: '0.5rem'
          }}>
            User Guide
          </h3>
        )}
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Object.entries(pages).map(([pageId, page]) => {
              const IconComponent = page.icon;
              const isActive = currentPage === pageId;
              const isExpanded = expandedPages[pageId];
              const sections = getPageSections(pageId);
              const hasSections = sections.length > 0;
              
              return (
                <li key={pageId} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button 
                      onClick={() => handlePageChange(pageId)}
                      style={{ 
                        background: isActive ? '#34495e' : 'none', 
                        border: 'none', 
                        color: isActive ? page.color : '#bdc3c7', 
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '1rem',
                        padding: '0.75rem 1rem',
                        flex: 1,
                        borderRadius: '6px',
                        transition: 'all 0.3s ease',
                        fontWeight: isActive ? '600' : '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = '#34495e';
                          e.target.style.color = page.color;
                          e.target.style.transform = 'translateX(4px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#bdc3c7';
                          e.target.style.transform = 'translateX(0)';
                        }
                      }}
                    >
                      <IconComponent 
                        size={18} 
                        style={{ 
                          color: isActive ? page.color : '#bdc3c7',
                          transition: 'color 0.3s ease' 
                        }} 
                      />
                      {page.title}
                    </button>
                    {hasSections && (
                      <button
                        onClick={() => togglePageExpansion(pageId)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#bdc3c7',
                          cursor: 'pointer',
                          padding: '0.5rem',
                          marginLeft: '0.5rem',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {isExpanded ? <IoChevronDownOutline size={16} /> : <IoChevronForwardOutline size={16} />}
                      </button>
                    )}
                  </div>
                  
                  {hasSections && isExpanded && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0 2rem' }}>
                      {sections.map((section) => (
                        <li key={section.id} style={{ marginBottom: '0.25rem' }}>
                          <button
                            onClick={() => handleSectionNavigation(section.id, pageId)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#95a5a6',
                              cursor: 'pointer',
                              textAlign: 'left',
                              fontSize: '0.9rem',
                              padding: '0.5rem 0.75rem',
                              width: '100%',
                              borderRadius: '4px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#34495e';
                              e.target.style.color = '#ecf0f1';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'transparent';
                              e.target.style.color = '#95a5a6';
                            }}
                          >
                            {section.subheading}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ 
        flex: 1, 
        marginLeft: isMobile ? '0' : '320px',
        marginTop: isMobile ? '60px' : '0',
        padding: isMobile ? '1rem' : '2rem',
        minHeight: isMobile ? 'calc(100vh - 60px)' : '100vh'
      }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default UserGuide;