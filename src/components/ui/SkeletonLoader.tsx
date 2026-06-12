export default function SkeletonLoader() {
  return (
    <div
      className="skeleton-loader"
      role="status"
      aria-label="Cargando contenido"
    >
      <div className="skeleton-header">
        <div className="skeleton-bar skeleton-logo" />
        <div className="skeleton-bar skeleton-nav" />
      </div>
      <main className="skeleton-main">
        <section className="skeleton-section">
          <div className="skeleton-bar skeleton-title" />
          <div className="skeleton-bar skeleton-text" />
          <div className="skeleton-bar skeleton-text short" />
        </section>
        <section className="skeleton-section">
          <div className="skeleton-bar skeleton-title" />
          <div className="skeleton-bar skeleton-text" />
          <div className="skeleton-grid">
            <div className="skeleton-card">
              <div className="skeleton-bar skeleton-card-title" />
              <div className="skeleton-bar skeleton-card-text" />
              <div className="skeleton-bar skeleton-card-text short" />
            </div>
            <div className="skeleton-card">
              <div className="skeleton-bar skeleton-card-title" />
              <div className="skeleton-bar skeleton-card-text" />
              <div className="skeleton-bar skeleton-card-text short" />
            </div>
            <div className="skeleton-card">
              <div className="skeleton-bar skeleton-card-title" />
              <div className="skeleton-bar skeleton-card-text" />
              <div className="skeleton-bar skeleton-card-text short" />
            </div>
          </div>
        </section>
        <section className="skeleton-section">
          <div className="skeleton-bar skeleton-title" />
          <div className="skeleton-bar skeleton-text" />
          <div className="skeleton-projects">
            <div className="skeleton-card large">
              <div className="skeleton-bar skeleton-card-tag" />
              <div className="skeleton-bar skeleton-card-title" />
              <div className="skeleton-bar skeleton-card-text" />
              <div className="skeleton-bar skeleton-card-text" />
            </div>
            <div className="skeleton-card large">
              <div className="skeleton-bar skeleton-card-tag" />
              <div className="skeleton-bar skeleton-card-title" />
              <div className="skeleton-bar skeleton-card-text" />
              <div className="skeleton-bar skeleton-card-text" />
            </div>
          </div>
        </section>
        <section className="skeleton-section">
          <div className="skeleton-bar skeleton-title" />
          <div className="skeleton-bar skeleton-text" />
          <div className="skeleton-contact">
            <div className="skeleton-bar skeleton-contact-item" />
            <div className="skeleton-bar skeleton-contact-item" />
            <div className="skeleton-bar skeleton-contact-item" />
          </div>
        </section>
      </main>
      <footer className="skeleton-footer">
        <div className="skeleton-bar skeleton-footer-text" />
      </footer>
    </div>
  );
}
