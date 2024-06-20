import React from "react";
import "./contact.css";
import officeIcon from "./images/office-png.png";
import locationIcon from "./images/location.png";
import mailIcon from "./images/mail.png";
import callIcon from "./images/call.png";
import facebookIcon from "./images/1.png";
import instagramIcon from "./images/3.png";
import twitterIcon from "./images/2.png";
import linkedInIcon from "./images/5.png";
const contactus = () => {
  return (
    <>
      <section>
        <div className="contactUs_container">
          <div className="contactUs_contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="contactUs_info">
                <li>
                  <span>
                    <img src={officeIcon} alt="Office Icon" />
                  </span>{" "}
                  {/* Enter company address Here */}
                  <span>
                    The Entrepreneurship <br />
                    Network(TEN)
                  </span>
                </li>
                <li>
                  <span>
                    <img src={locationIcon} alt="Location Icon" />
                  </span>{" "}
                  {/* Enter company address Here */}
                  <span>
                    Delhi, India
                    <br />
                    110001
                  </span>
                </li>
                <li>
                  <span>
                    <img src={mailIcon} alt="Mail Icon" />
                  </span>
                  <span>
                    <a href="mailto:@gmail.com">@gmail.com</a>
                  </span>{" "}
                  {/* Enter company gamil Here */}
                </li>
                <li>
                  <span>
                    <img src={callIcon} alt="Call Icon" />
                  </span>
                  <span>000-000-0000</span>{" "}
                  {/* Enter company phone number Here */}
                </li>
              </ul>
            </div>
            <ul className="contactUs_sci">
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>
              </li>{" "}
              {/* Enter Facebook Link Here */}
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>
              </li>{" "}
              {/* Enter Instagram Link Here */}
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
              </li>{" "}
              {/* Enter Twitter Link Here */}
              <li>
                <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                  <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactUs_contactForm">
            <h2>Send a Message</h2>
            <div className="contactUs_formBox">
              <div className="contactUs_inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="contactUs_inputBox w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div className="contactUs_inputBox w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="contactUs_inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contactus;
