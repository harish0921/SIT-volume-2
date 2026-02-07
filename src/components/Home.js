import React from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../data/content';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5 mt-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">{homeContent.hero.title}</h1>
              <h2 className="h3 mb-4">{homeContent.hero.subtitle}</h2>
              <p className="lead mb-4">{homeContent.hero.description}</p>
              <Link to={homeContent.hero.buttonLink} className="btn btn-light btn-lg">
                {homeContent.hero.buttonText}
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <i className="bi bi-mortarboard-fill" style={{ fontSize: '15rem', opacity: 0.3 }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Why Choose Us?</h2>
              <p className="lead text-muted">Discover what makes us the leading EdTech platform</p>
            </div>
          </div>
          <div className="row g-4">
            {homeContent.features.map((feature) => (
              <div key={feature.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <i className={`bi ${feature.icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                    <h5 className="card-title mt-3 mb-3">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            {homeContent.stats.map((stat) => (
              <div key={stat.id} className="col-6 col-md-3">
                <div className="p-4">
                  <h2 className="display-4 fw-bold text-primary mb-2">{stat.number}</h2>
                  <p className="text-muted fw-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
