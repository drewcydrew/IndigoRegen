import { useState, useEffect } from 'react'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import MissionStatement from './components/MissionStatement'
import Homepage from './components/Homepage'
import EventsWorkshops from './components/EventsWorkshops'
import CoolSeats from './components/CoolSeats'
import CommunityGardens from './components/CommunityGardens'
import PermacultureResources from './components/PermacultureResources'
import PlantBasedTreaty from './components/PlantBasedTreaty'
import IndigoRegenDocs from './components/IndigoRegenDocs'
import Composting from './components/Composting'
import Membership from './components/Membership'
import AdaptionGame from './components/AdaptionGame'
import './App.css'

function App() {
  const [missionAccepted, setMissionAccepted] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  
  useEffect(() => {
    // Check URL parameters on mount
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get('tab')
    if (tab && ['home', 'events', 'coolseats', 'gardens', 'permaculture', 'plantbased', 'composting', 'membership', 'game'].includes(tab)) {
      setActiveTab(tab)
    }
  }, [])

  const handleAccept = () => {
    setMissionAccepted(true)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsMobileNavOpen(false) // Close mobile nav when tab is selected
    // Update URL parameter
    const url = new URL(window.location)
    url.searchParams.set('tab', tab)
    window.history.pushState({}, '', url)
  }

  const handleNavigate = (destination) => {
    switch(destination) {
      case 'coolseats':
        handleTabChange('coolseats')
        break
      case 'eventsworkshops':
        handleTabChange('events')
        break
      case 'gardens':
        handleTabChange('gardens')
        break
      case 'permaculture':
        handleTabChange('permaculture')
        break
      case 'plantbased':
        handleTabChange('plantbased')
        break
      case 'composting':
        handleTabChange('composting')
        break
      case 'membership':
        handleTabChange('membership')
        break
      case 'game':
        handleTabChange('game')
        break
      default:
        handleTabChange('home')
    }
  }

  const tabItems = [
    { id: 'home', label: 'Home' },
    { id: 'composting', label: 'Composting' },
    { id: 'gardens', label: 'Community Gardens' },
    { id: 'game', label: 'Play The Adaption Game' },
    { id: 'permaculture', label: 'Permaculture' },
    { id: 'coolseats', label: 'Cool Seats' },
    { id: 'plantbased', label: 'Plant Based Treaty' },
    { id: 'events', label: 'Events' },
    { id: 'membership', label: 'Membership' }
  ]

  const getPageTitle = () => {
    switch(activeTab) {
      case 'home': return 'Indigo Regen'
      case 'gardens': return 'Community Gardens'
      case 'composting': return 'Composting Programs'
      case 'events': return 'Events & Workshops'
      case 'coolseats': return 'Cool Seats'
      case 'permaculture': return 'Permaculture & Sustainability'
      case 'plantbased': return 'Plant Based Treaty'
      case 'membership': return 'Membership'
      case 'game': return 'Play The Adaption Game'
      default: return 'Indigo Regen'
    }
  }

  if (missionAccepted) {
    return (
      <div className="accepted-container">
        <h1>Thank you!</h1>
        <p>You have joined our mission for regenerative agriculture.</p>
        <button 
          className="tab-button" 
          onClick={() => {
            setMissionAccepted(false)
            handleTabChange('home')
          }}
        >
          Return to Home
        </button>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="mission-container">
        {/* Mobile Navigation Overlay */}
        {isMobileNavOpen && (
          <div className="mobile-nav-overlay" onClick={() => setIsMobileNavOpen(false)} />
        )}
        
        {/* Side Navigation Panel */}
        <div className={`side-nav ${isMobileNavOpen ? 'open' : ''}`}>
          <div className="side-nav-header">
            <h3 style={{ color: '#1F2937', margin: 0, fontSize: '1.2rem' }}>Navigation</h3>
            <button
              className="nav-close-btn"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <IoCloseOutline size={24} />
            </button>
          </div>
          <div className="side-nav-items">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                className={`side-nav-item ${activeTab === tab.id ? 'active' : ''} ${tab.id === 'home' ? 'home-nav-item' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.id === 'home' ? '🏠 Home' : tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Header with Menu Button */}
        <div className="main-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <IoMenuOutline size={24} />
          </button>
          
          <div className="header-content">
            <img 
              src="/indigo-regen-icon.jpg" 
              alt="Indigo Regen Logo" 
              className="header-logo"
            />
            <h1 className="header-title">
              {getPageTitle()}
            </h1>
          </div>
        </div>

        <div className="scroll-content">
          <div className="content-container">
            {activeTab === 'home' ? (
              <Homepage onNavigate={handleNavigate} />
            ) : activeTab === 'gardens' ? (
              <CommunityGardens onNavigate={handleNavigate} />
            ) : activeTab === 'composting' ? (
              <Composting onNavigate={handleNavigate} />
            ) : activeTab === 'events' ? (
              <EventsWorkshops onNavigate={handleNavigate} />
            ) : activeTab === 'coolseats' ? (
              <CoolSeats onNavigate={handleNavigate} />
            ) : activeTab === 'permaculture' ? (
              <PermacultureResources onNavigate={handleNavigate} />
            ) : activeTab === 'plantbased' ? (
              <PlantBasedTreaty onNavigate={handleNavigate} />
            ) : activeTab === 'membership' ? (
              <Membership onNavigate={handleNavigate} />
            ) : activeTab === 'game' ? (
              <AdaptionGame onNavigate={handleNavigate} />
            ) : (
              <Homepage onNavigate={handleNavigate} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App