// import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#27282c] sm:bg-[#333] md:bg-[#444] lg:bg-[#27282c] w-full flex-col md:flex-row">
        <div className="flex flex-col ">
          <div className="footer-logo flex flex-col sm:text-center p-2">
            <img
              className="w-36"
              src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/648175fc7332de3fb931061a_intervue.svg"
              alt="Your Alt Text"
            />
          </div>
          <div className="flex flex-col md:flex-row p-5">
            <div className="footer-side-div flex flex-col pt-8 mx-0 sm:text-center lg:text-left max-w-96 sd:text-center ">
              <div className="flex  flex-row">
                <a
                  className="mx-0"
                  target="Your Alt Text"
                  href="https://www.facebook.com/intervue.io"
                >
                  <img
                    alt="facebook"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/6481df01c5149b34900f4b5d_facebook.svg"
                  />
                </a>
                <a
                  className="mx-4"
                  target="Your Alt Text"
                  href="https://instagram.com/intervue.io"
                >
                  <img
                    alt="instagram"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/6481df0136251d7f647878ef_twitter.svg"
                  />
                </a>
                <a
                  className=""
                  target="Your Alt Text"
                  href="https://twitter.com/IntervueIo"
                >
                  <img
                    alt="twitter"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/650859d7ca8179eac3a1babe_x.svg"
                  />
                </a>
                <a
                  className="mx-4"
                  target="Your Alt Text"
                  href="https://www.linkedin.com/company/intervue-io"
                >
                  <img
                    alt="linkedin"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/6481df016081e9632c49d7c8_linkedin.svg"
                  />
                </a>
              </div>
              <div className="text-yellow-400 font-bold text-2xl mt-6">
                <p>Signup Now!</p>
              </div>
              <p className="mt-4 text-white font-sans text-xl max-w-full sm:max-w-96 flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-col">
                We are already working with teams that want to hire the best
                engineers
              </p>
              <div className="grid grid-cols-4 max-w-96 mt-4 sm:flex-row md:flex-col lg:flex-col xl:flex-col">
                <img
                  className="pr-2 pl-2 max-h-4 bg-white rounded-sm"
                  src="https://intervue-static-dev.s3.amazonaws.com/local/1342/12c61a3f-fa9c-4d24-8a8c-be0253615fbe.svg"
                  alt="Zomato"
                ></img>
                <img
                  className="pr-2 pl-2 max-h-4 mx-5  bg-white rounded-sm"
                  src="https://intervue-static-dev.s3.amazonaws.com/local/1342/e4666de0-6f5a-42de-a1cc-e6417b722e42.svg"
                  alt="Nykaaa"
                ></img>
                <img
                  className="pr-2 pl-2 max-h-4 mx-3 bg-white rounded-sm"
                  src="https://intervue-static-dev.s3.amazonaws.com/local/1342/31aa774f-7d65-4ffc-864f-c49fc70583e2.svg"
                  alt="Yubi"
                ></img>
                <img
                  className="pr-2 pl-2 max-h-4 mx-0 bg-white rounded-sm"
                  src="https://intervue-static-dev.s3.amazonaws.com/local/1342/ff50fa71-6b6a-41f2-85a8-93fa9f842fb8.svg"
                  alt="Rakuten"
                ></img>

                <img
                  className=" pr-2 pl-2 max-h-4 mt-3 w-24 bg-white rounded-sm"
                  src="https://intervue-static-dev.s3.amazonaws.com/local/1342/2c37cc0d-24f7-4c56-97ba-57c0ae936f95.svg"
                  alt="Allegis"
                ></img>
              </div>
              <div className="mt-6 flex items-start justify-center  sm:justify-between text-center px-6 sm:px-10 py-2 border border-gray-300 text-gray-300 mb-0 rounded-md w-full sm:w-96 h-12 text-xl hover:bg-white hover:text-slate-700">
                <a href="https://www.intervue.io/signup" className="w-full">
                  <p className="sm:content-center">Signup now for free trial</p>
                </a>
              </div>
              <div className="text-center text-lg relative mt-4 mb-4 text-white">
                <div className="absolute w-1/3 sm:w-2/6 bg-white bg-opacity-32 h-px top-2/4 left-1/4 sm:left-0"></div>
                <span className="translate translate-y-1/4 translate-x-0 sm:translate-x-36">
                  OR
                </span>
                <div className="absolute w-1/3 sm:w-2/6 bg-white bg-opacity-32 h-px top-2/4 right-1/4 sm:right-0"></div>
              </div>
              <div className="dark items-center text-center text-xl justify-center px-6 sm:px-10 py-2 border border-black bg-black text-white rounded-md w-full sm:w-96 h-12">
                <a
                  href="https://calendly.com/talktointervue/30min"
                  className="w-full"
                >
                  <span>Book a demo</span>
                </a>
              </div>
            </div>
            <div class="flex flex-col md:flex-row justify-center md:w-32 md:basis-3/4 my-5 text-white md:gap-32">
              {/* campany */}
              <div className="text-white text-lg font-bold">
                <p>Company</p>
                <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2   ">
                  <li>
                    <a
                      className="hover:underline"
                      href="https://www.notion.so/We-are-hiring-19357ff1d8fe461e932ac43c53218eda"
                    >
                      We're hiring
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/mission">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://join.slack.com/t/talkintervue/shared_invite/zt-pmw233ht-LprpD0koXobUBeTU4Bd0sw"
                    >
                      Slack Community
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://calendly.com/talktointervue"
                    >
                      Book a demo
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/contact-us">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://airtable.com/shrmUwcHFErId3xyz"
                    >
                      Request a feature
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/our-customers">
                      Our customers
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://www.intervue.io/faqs"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              {/* product */}
              <div className="text-white text-lg font-bold">
                <p>Product</p>
                <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2">
                  <li>
                    <a
                      className="hover:underline"
                      href="/interview-as-a-service"
                    >
                      Interview as a Service
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/features">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/all-profiles">
                      Profiles
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/all-integrations">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://intervue.statuspage.io/"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/changelogs">
                      Changelogs
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div className="text-white text-lg font-bold">
                <p>Resources</p>
                <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2">
                  <li>
                    <a
                      className="hover:underline"
                      href="/getting-started-guide-candidates"
                    >
                      Candidates Starter Guide
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/success-stories">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://www.intervue.io/glossary"
                    >
                      Glossary
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://www.intervue.io/job-description"
                    >
                      Job Description
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://airtable.com/shrcboQpk727BHc1H"
                    >
                      Product roadmap
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="/sitemap">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mx-44 md:basis-3/4 gap-4 md:gap-32 md:ml-[32%] ml-[5%] p-2 justify-center">
          {/* Solutions */}
          <div className="text-white text-lg font-bold mx-2">
            <p>Solutions</p>
            <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2">
              <li>
                <a className="hover:underline" href="/solutions/startups">
                  Startups
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/it-services">
                  IT services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/it-staffing">
                  IT staffing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/campuses">
                  Campuses
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/campuses">
                  Campuses
                </a>
              </li>
            </ul>
          </div>
          {/* Use Cases */}
          <div className="text-white text-lg font-bold ">
            <p>Use Cases</p>
            <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2">
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/accelerate-tech-hiring"
                >
                  Accelerate tech hiring
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/standardized-interview"
                >
                  Standardized interviews
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/cater-to-niche-roles"
                >
                  Cater to niche roles
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/candiate-experience"
                >
                  Candidate experience
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/hiring-analytics"
                >
                  Hiring analytics
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/build-diverse-team"
                >
                  Diversity & inclusion
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/mock-interviews"
                >
                  Mock interviews
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/pair-programming"
                >
                  Pair programming
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/ask-pseudo-code"
                >
                  Ask pseudo code
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/reduce-rejection-ratio">
                  Reduce Rejection Ratio
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/campus-recruitment-software"
                >
                  Campus recruitment software
                </a>
              </li>
            </ul>
          </div>
          {/* Use Cases */}
          <div className="text-white text-lg font-bold -mx-12 ">
            <p>Use Cases</p>
            <ul className="text-[#FFFFFFBF] font-semibold space-y-1 mt-2 ">
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/system-design-interviews"
                >
                  System design interviews
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/product-manager-interviews"
                >
                  Product manager interviews
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/lateral-hiring">
                  Lateral hiring
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/solutions/campus-hiring">
                  Campus hiring
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/frontend-application-development"
                >
                  Frontend application development
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/backend-application-development"
                >
                  Backend application development
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/fullstack-application-development"
                >
                  Fullstack application development
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="/solutions/data-science-based-project"
                >
                  Data application development
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-lg font-medium tracking-normal leading-5 text-center text mx-auto my-[3rem] pb-4 text-white">
          Made with ❤ in India, Intervue © 2024
        </div>
      </div>
    </>
  );
};

export default Footer;
