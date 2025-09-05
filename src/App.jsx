import { useState, useEffect } from 'react'
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
        <div className="tab-header">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleTabChange('home')}
            >
              Home
            </button>
            <button 
              className={`tab-button ${activeTab === 'composting' ? 'active' : ''}`}
              onClick={() => handleTabChange('composting')}
            >
              Composting
            </button>
            <button 
              className={`tab-button ${activeTab === 'gardens' ? 'active' : ''}`}
              onClick={() => handleTabChange('gardens')}
            >
              Community Gardens
            </button>
            <button 
              className={`tab-button ${activeTab === 'game' ? 'active' : ''}`}
              onClick={() => handleTabChange('game')}
            >
              Play The Adaption Game
            </button>
            <button 
              className={`tab-button ${activeTab === 'permaculture' ? 'active' : ''}`}
              onClick={() => handleTabChange('permaculture')}
            >
              Permaculture
            </button>
            <button 
              className={`tab-button ${activeTab === 'coolseats' ? 'active' : ''}`}
              onClick={() => handleTabChange('coolseats')}
            >
              Cool Seats
            </button>
            <button 
              className={`tab-button ${activeTab === 'plantbased' ? 'active' : ''}`}
              onClick={() => handleTabChange('plantbased')}
            >
              Plant Based Treaty
            </button>
            <button 
              className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => handleTabChange('events')}
            >
              Events
            </button>
            <button 
              className={`tab-button ${activeTab === 'membership' ? 'active' : ''}`}
              onClick={() => handleTabChange('membership')}
            >
              Membership
            </button>
          </div>
        </div>

        <div className="modal-header">
          <div className="modal-header-content">
            <img 
              src="/indigo-regen-icon.jpg" 
              alt="Indigo Regen Logo" 
              className="modal-logo"
            />
            <h1 className="modal-title">
              {activeTab === 'home' ? 'Indigo Regen' : 
               activeTab === 'gardens' ? 'Community Gardens' :
               activeTab === 'composting' ? 'Composting Programs' :
               activeTab === 'events' ? 'Events & Workshops' :
               activeTab === 'coolseats' ? 'Cool Seats' :
               activeTab === 'permaculture' ? 'Permaculture & Sustainability' :
               activeTab === 'plantbased' ? 'Plant-Based Treaty' :
               activeTab === 'membership' ? 'Membership' :
               activeTab === 'game' ? 'Play The Adaption Game' :
               'Indigo Regen'}
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