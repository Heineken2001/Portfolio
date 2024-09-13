import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { axiosInstance } from "../../Services/axios";
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(async () => {
      if (isSent) return;
      const payload = {
        messageId: uuidv4(),
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }
      try {
        const response = await axiosInstance.post('/contactme', payload);
        console.log('00------', response);
        setIsSent(true);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
        setIsLoading(false);
      }
    }, 2000);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">Send A Message</h5>
                  </div>
                  <div>
                  {!isSent && <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject"
                      />
                    </div>
                    {errors.subject && (
                      <div className="invalid-feedback">
                        {errors.subject.message}
                      </div>
                    )}

                    <div className="mb-3">
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        rows="4"
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your Message"
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">
                          {errors.message.message}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isSent || isLoading}>
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                }
                  </div>
                {
                  isSent && <div className="lead">Message is sent to me! I will contact you soon 👋🏻👋🏻👋🏻</div>
                }
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                      Whether you want to get in touch, talk about a project
                      collaboration, or just say hi, I'd love to hear from
                      you.
                      <br />
                      Simply fill the from and send me an email.
                    </p>
                  </div>
                  <div className="socials">
                    <ul>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-codepen"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;

