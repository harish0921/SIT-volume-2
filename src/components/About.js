import React from 'react';
import { aboutContent } from '../data/content';

const About = () => {
  return (
    <div className="mt-5">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">{aboutContent.title}</h1>
              <p className="lead">{aboutContent.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-center mb-5">{aboutContent.description}</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <i className="bi bi-bullseye text-primary" style={{ fontSize: '3rem' }}></i>
                  <h3 className="card-title mt-3 mb-3">{aboutContent.mission.title}</h3>
                  <p className="card-text text-muted">{aboutContent.mission.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <i className="bi bi-eye text-primary" style={{ fontSize: '3rem' }}></i>
                  <h3 className="card-title mt-3 mb-3">{aboutContent.vision.title}</h3>
                  <p className="card-text text-muted">{aboutContent.vision.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
              <p className="lead text-muted">The principles that guide everything we do</p>
            </div>
          </div>
          <div className="row g-4">
            {aboutContent.values.map((value) => (
              <div key={value.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body p-4">
                    <i className={`bi ${value.icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                    <h5 className="card-title mt-3 mb-3">{value.title}</h5>
                    <p className="card-text text-muted">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
