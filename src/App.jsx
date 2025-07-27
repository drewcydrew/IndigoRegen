import { useState, useEffect } from 'react'
import MissionStatement from './components/MissionStatement'
import UserGuide from './components/UserGuide'
import './App.css'

function App() {
  const [missionAccepted, setMissionAccepted] = useState(false)
  const [activeTab, setActiveTab] = useState('mission')
  
  useEffect(() => {
    // Check URL parameters on mount
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get('tab')
    if (tab === 'user-guide' || tab === 'mission') {
      setActiveTab(tab === 'user-guide' ? 'guide' : 'mission')
    }
  }, [])

  const handleAccept = () => {
    setMissionAccepted(true)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // Update URL parameter
    const url = new URL(window.location)
    url.searchParams.set('tab', tab === 'guide' ? 'user-guide' : 'mission')
    window.history.pushState({}, '', url)
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
            handleTabChange('guide')
          }}
        >
          View Link
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
              className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => handleTabChange('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`tab-button ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => handleTabChange('guide')}
            >
              Links
            </button>
          </div>
        </div>

        <div className="modal-header">
          <div className="modal-header-content">
            <img 
              src="/library-icon.jpg" 
              alt="Indigo Regen Logo" 
              className="modal-logo"
            />
            <h1 className="modal-title">
              {activeTab === 'mission' ? 'Our Mission' : 'Indigo Regen Links'}
            </h1>
          </div>
        </div>

        <div className="scroll-content">
          <div className="content-container">
            {activeTab === 'mission' ? (
              <MissionStatement onAccept={handleAccept} />
            ) : (
              <UserGuide />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App