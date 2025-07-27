function PrivacyPolicy({ onAccept }) {
  return (
    <>
      <p className="last-updated">Effective Date: April 17, 2025</p>

      <p className="introduction">

        Thank you for using Indigo Regen. Your privacy is important to us. This
        Privacy Policy outlines how your data is handled when you use our app.
      </p>

      <div className="section">
        <h2 className="section-title">1. Data Usage and Storage</h2>
        <p className="paragraph">
          Our application connects to a test development database that
          contains dummy regenerative agriculture data. This data is used solely for
          demonstration and testing purposes and does not represent real
          users, projects, or any personal information.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">2. Saved Lists</h2>
        <p className="paragraph">
          Users have the ability to save lists that include:
        </p>
        <div className="bullet-points">
          <p className="bullet-point">
            • Selected project data (from the dummy dataset)
          </p>
          <p className="bullet-point">
            • Text-based search parameters
          </p>
        </div>
        <p className="paragraph">
          These saved lists are now stored online and are accessible to all
          users of the application. Lists are associated with anonymous
          session IDs and are not linked to any personal accounts. Please be
          aware that saved lists may be viewed or modified by other users.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">3. No Personal Data Collection</h2>
        <p className="paragraph">
          We do not collect, store, or share any personal data or identifiable
          information. The app operates without requiring a login, and no
          user-identifying information is transmitted.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">4. Third-Party Access</h2>
        <p className="paragraph">
          There is no integration with third-party services. However, as saved
          lists are stored in a shared cloud database, they may be visible to
          other app users.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">5. Changes to This Policy</h2>
        <p className="paragraph">
          If we make any changes to this Privacy Policy, we will update the
          effective date at the top. We encourage you to review this policy
          periodically.
        </p>
      </div>

      <div className="action-buttons-container">
        <button className="accept-button" onClick={onAccept}>
          <span>I Accept</span>
          <span className="checkmark">✓</span>
        </button>
      </div>
    </>
  )
}

export default PrivacyPolicy