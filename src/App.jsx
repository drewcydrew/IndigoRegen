import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import Homepage from './components/Homepage'
import EventsWorkshops from './components/EventsWorkshops'
import CoolSeats from './components/CoolSeats'
import CommunityGardens from './components/CommunityGardens'
import PermacultureResources from './components/PermacultureResources'
import PlantBasedTreaty from './components/PlantBasedTreaty'
import Composting from './components/Composting'
import Membership from './components/Membership'
import AdaptionGame from './components/AdaptionGame'
import './App.css'

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate = (destination) => {
    switch(destination) {
      case 'coolseats':
        navigate('/coolseats')
        break
      case 'eventsworkshops':
      case 'events':
        navigate('/events')
        break
      case 'gardens':
        navigate('/gardens')
        break
      case 'permaculture':
        navigate('/permaculture')
        break
      case 'plantbased':
        navigate('/plantbased')
        break
      case 'composting':
        navigate('/composting')
        break
      case 'membership':
        navigate('/membership')
        break
      case 'game':
        navigate('/game')
        break
      case 'home':
      default:
        navigate('/')
    }
    setIsMobileNavOpen(false)
  }

  const tabItems = [
    { id: '/', label: 'Home', path: '/' },
    { id: '/composting', label: 'Composting', path: '/composting' },
    { id: '/gardens', label: 'Community Gardens', path: '/gardens' },
    { id: '/game', label: 'Play The Adaption Game', path: '/game' },
    { id: '/permaculture', label: 'Permaculture', path: '/permaculture' },
    { id: '/coolseats', label: 'Cool Seats', path: '/coolseats' },
    { id: '/plantbased', label: 'Plant Based Treaty', path: '/plantbased' },
    { id: '/events', label: 'Events', path: '/events' },
    { id: '/membership', label: 'Membership', path: '/membership' }
  ]

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/': return 'Indigo Regen'
      case '/gardens': return 'Community Gardens'
      case '/composting': return 'Composting Programs'
      case '/events': return 'Events & Workshops'
      case '/coolseats': return 'Cool Seats'
      case '/permaculture': return 'Permaculture & Sustainability'
      case '/plantbased': return 'Plant Based Treaty'
      case '/membership': return 'Membership'
      case '/game': return 'Play The Adaption Game'
      default: return 'Indigo Regen'
    }
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
                className={`side-nav-item ${location.pathname === tab.path ? 'active' : ''} ${tab.path === '/' ? 'home-nav-item' : ''}`}
                onClick={() => {
                  navigate(tab.path)
                  setIsMobileNavOpen(false)
                }}
              >
                {tab.path === '/' ? '🏠 Home' : tab.label}
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
            <Routes>
              <Route path="/" element={<Homepage onNavigate={handleNavigate} />} />
              <Route path="/gardens" element={<CommunityGardens onNavigate={handleNavigate} />} />
              <Route path="/composting" element={<Composting onNavigate={handleNavigate} />} />
              <Route path="/events" element={<EventsWorkshops onNavigate={handleNavigate} />} />
              <Route path="/coolseats" element={<CoolSeats onNavigate={handleNavigate} />} />
              <Route path="/permaculture" element={<PermacultureResources onNavigate={handleNavigate} />} />
              <Route path="/plantbased" element={<PlantBasedTreaty onNavigate={handleNavigate} />} />
              <Route path="/membership" element={<Membership onNavigate={handleNavigate} />} />
              <Route path="/game" element={<AdaptionGame onNavigate={handleNavigate} />} />
              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Homepage onNavigate={handleNavigate} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App