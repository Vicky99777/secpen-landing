import React from 'react';

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Cybersecurity Powered by Data</h2>
        <p className="text-center mb-5">Our scraper aggregates vulnerability data to keep you ahead of threats.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Real-time Alerts</h5>
                <p className="card-text">Get notified instantly about new threats.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Comprehensive Data</h5>
                <p className="card-text">Access a wide range of cybersecurity data sources.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Easy Integration</h5>
                <p className="card-text">Seamlessly integrate with your existing security tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;