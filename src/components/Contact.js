import React, { useState } from 'react';
import { contactContent } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        submitted: true,
        message: 'Please fill in all required fields.',
        type: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        submitted: true,
        message: 'Please enter a valid email address.',
        type: 'error'
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitStatus({
      submitted: true,
      message: 'Thank you for your message! We will get back to you soon.',
      type: 'success'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitStatus({
        submitted: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="mt-5">
      {/* Header Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">{contactContent.title}</h1>
              <p className="lead">{contactContent.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="lead text-muted">{contactContent.description}</p>
            </div>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="mb-4">
                <h3 className="mb-4">Contact Information</h3>
                {contactContent.contactInfo.map((info) => (
                  <div key={info.id} className="mb-4">
                    <div className="d-flex align-items-start">
                      <i className={`bi ${info.icon} text-primary me-3`} style={{ fontSize: '1.5rem' }}></i>
                      <div>
                        <h5 className="mb-1">{info.title}</h5>
                        <p className="text-muted mb-0">{info.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="mb-4">Send us a Message</h3>
                  
                  {submitStatus.submitted && (
                    <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                      {submitStatus.message}
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSubmitStatus({ submitted: false, message: '' })}
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg">
                          <i className="bi bi-send me-2"></i>Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
