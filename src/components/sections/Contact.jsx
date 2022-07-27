import React from 'react';

export default function Contact() {
  return (
    <section id="contact-section" className="section gap">
      <div
        className="bg"
        data-anchor-target="#contact-section"
        data-bottom-top="transform: translate3d(0px, -150px, 0px);"
        data-top-bottom="transform: translate3d(0px, 150px, 0px);"
      />
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="center">
            <h1 className="section-heading">Get In Touch</h1>
            <span className="divider center" />
            <p className="contact-description">
              Have a sweet project in mind or just want to say hi? Feel free to send me a message!
            </p>
          </div>
          <div className="contact-wrapper">
            <div id="contactform" className="form-wrapper">
              {/* <form id="contactform" className="form-wrapper" method="POST" autoComplete="off"> */}
              {/* <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <div className="input-wrapper">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input type="text" name="name" className="contact-input" id="name" required="" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  name="_replyto"
                  className="contact-input"
                  id="email"
                  required=""
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="subject" className="input-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="_subject"
                  className="contact-input"
                  id="subject"
                  required=""
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="message" className="input-label" id="message-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="contact-input autoExpand"
                  id="message"
                  required=""
                  defaultValue={''}
                />
              </div> */}
              <a
                href="mailto:hichem.fantar@outlook.com"
                className="message-btn"
                target="_blank"
                rel="noreferrer">
                {/* <button className="message-btn"> */}
                <span>Send Message</span>
                {/* </button> */}
              </a>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
