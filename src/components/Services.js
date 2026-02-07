import React from 'react';
import { servicesContent } from '../data/content';

const Services = () => {
  return (
    <div className="mt-5">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">{servicesContent.title}</h1>
              <p className="lead">{servicesContent.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="lead text-muted">{servicesContent.description}</p>
            </div>
          </div>

          <div className="row g-4">
            {servicesContent.services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <i className={`bi ${service.icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h4 className="card-title text-center mb-3">{service.title}</h4>
                    <p className="card-text text-muted mb-4">{service.description}</p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Services;
