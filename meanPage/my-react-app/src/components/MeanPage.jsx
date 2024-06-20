/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const MeanPage = () => {
  return (
    <>
      <div className="flex flex-col px-4 md:px-14 lg:px-20">
        {/* Candidate Assessment div */}
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            Candidate Assessment for MEAN STACK
          </h1>
        </div>
        {/* About the test */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
          {/* About the test Div */}
          <div className="container text-left basis-full lg:basis-3/4">
            <h3 className="font-bold mb-2 text-2xl">About the Test</h3>
            <p className="text-lg mt-6">
              The MEAN STACK test evaluates candidates based on skills: Angular
              consisting of 10 MCQ questions, Node consisting of 11 MCQ
              questions, MongoDB Miscellaneous consisting of 14 MCQ questions,
              MERN consisting of 4 MCQ questions, ExpressJS consisting of 13 MCQ
              questions with a duration of 25 min. This test is of a moderate
              difficulty level and is taken by candidates with 2-4 years of
              experience.
            </p>
            <div className="mt-4 text-lg">
              <p className="mb-1">
                <b>Time:</b> 25 min
              </p>
              <p>
                <b>Difficulty level:</b> Medium
              </p>
            </div>
            <div className="flex  gap-4 text-lg mt-6">
              <button className="bg-black text-white font-bold py-2 px-4 rounded-3xl">
                Add to my test →
              </button>
              <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-3xl border border-black">
                Preview this test
              </button>
            </div>
          </div>
          {/* Skill Div */}
          <div className="grid grid-cols-2 gap-4 text-base md:grid-cols-3 lg:grid-cols-2">
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-base font-bold mb-2">Angular</h3>
              <p>10 MCQ</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-base font-bold mb-2">Node</h3>
              <p>11 MCQ</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-base font-bold mb-2">
                MongoDB Miscellaneous
              </h3>
              <p>14 MCQ</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-base font-bold mb-2">MERN</h3>
              <p>4 MCQ</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-base font-bold mb-2">ExpressJS</h3>
              <p>13 MCQ</p>
            </div>
          </div>
        </div>
        {/* Question Covered */}
        <div className="container mx-auto mt-6 ">
          {" "}
          <h2 className="text-2xl font-bold mb-4 text-left mt-6">
            Questions covered
          </h2>
          <p className="text-black mb-4 text-left text-lg">
            The MEAN STACK test comes with 48 questions tagged with Angular,
            Node, MongoDB Miscellaneous, MERN, ExpressJS, Node Miscellaneous
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  What is the purpose of the provided mongorestore command in
                  the given scenario?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  MongoDB Miscellaneous
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  What is the functionality of the code given below?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  ExpressJS
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  Consider given scenario, what will be the output when a client
                  sends a request to /home?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  ExpressJS
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  In the context of using the underscore variable (_) in the
                  Node.js REPL session, what is its primary use?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  Node
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  Which optimization techniques could be applied to improve the
                  performance of this query?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  MongoDB Miscellaneous
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black">
                  According to given scenario, what will be the impact of the
                  provided code on the sharded cluster?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  MongoDB Miscellaneous
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black text-left">
                  Consider given scenario, which of the following considerations
                  is crucial when implementing the "range" sharding strategy for
                  this e-commerce platform?
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  MongoDB Miscellaneous
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border border-black rounded-md">
              <div>
                <p className="text-black text-left">
                  Choose the correct options for composing middleware in an
                  Express.js application to handle authentication and logging in
                  given scenario. (Select all that apply)
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-3xl">
                  MCQ
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-3xl">
                  MongoDB Miscellaneous
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-lg mt-3 justify-center">
            <button className="bg-black text-white py-2 px-4 rounded-3xl">
              View all questions
            </button>
          </div>
        </div>
        {/* get report div */}
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold mb-4">
            Get reports within 5 minutes after the assessment
          </h2>
          <p className="text-gray-600 mb-4">
            Intervue enables companies to eliminate their dependency on internal
            engineering bandwidth for tech hiring.
          </p>
          <a
            href="./"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Download sample report
          </a>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around items-center p-4">
            <ReportCard
              name="Rahul Vaidya"
              title="Software Developer"
              communication="#4CAF50"
              approach="#FFC107"
              code="#F44336"
            />
            <ReportCard
              name="Ankit Gupta"
              title="Software Developer"
              communication="#4CAF50"
              approach="#FFC107"
              code="#F44336"
            />
            <ReportCard
              name="Shiresh Naik"
              title="Software Developer"
              communication="#4CAF50"
              approach="#FFC107"
              code="#F44336"
            />
          </div>
        </div>
        {/* mean stck div */}
        <div className="flex flex-col md:flex-row mt-4 text-left">
          <div className="flex flex-col w-full md:w-3/5">
            <h1 className="font-bold mb-4 text-xl">
              The MEAN Stack Developer test is designed to assess candidates for
              the following key skills and attributes
            </h1>
            <ul className="list-disc pl-6 mb-8 text-lg">
              <li>
                Expertise in Angular for building dynamic and interactive user
                interfaces
              </li>
              <li>
                Familiarity with ExpressJS for creating robust and scalable
                server-side applications
              </li>
              <li>
                Proficiency in MongoDB for designing and implementing NoSQL
                databases
              </li>
              <li>
                Strong knowledge of Node.js for server-side development and
                building scalable APIs
              </li>
              <li>
                Experience with AngularJS for developing dynamic web
                applications
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-gray-100 pr-4 pl-4 pb-4 pt-4 justify-center items-center w-full md:w-2/5 rounded-lg mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Helpful in hiring</h2>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>MEAN Stack Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>Full Stack Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Angular Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>ExpressJS Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>MongoDB Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>Node.js Developer</span>
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
                <span>AngularJS Developer</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-left mt-8">
          <h1 className="text-green-500 font-bold text-lg">Top Reasons Why</h1>
          <h2 className="text-black font-bold text-xl mt-2">
            Intervue offers best way to shortlist MEAN Stack Developer
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between p-8 gap-8">
            <div className="max-w-sm rounded overflow-hidden flex-1">
              <img
                className="w-56"
                src="https://dersyb7nfifdf.cloudfront.net/production/11344/81f5c007-99e6-40dd-9644-98e84649855b.png"
                alt="Sample Image"
              />
              <div className="py-4">
                <div className="font-bold text-lg mb-2">
                  Test catered for on-the-job skills
                </div>
                <p className="text-black text-base">
                  The MEAN Stack Developer Test helps recruiters and hiring
                  managers identify qualified candidates from a pool of resumes,
                  and helps in taking objective hiring decisions
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden flex-1">
              <img
                className="w-56"
                src="https://dersyb7nfifdf.cloudfront.net/production/11344/81f5c007-99e6-40dd-9644-98e84649855b.png"
                alt="Sample Image"
              />
              <div className="py-4">
                <div className="font-bold text-lg mb-2">
                  Advanced proctoring
                </div>
                <p className="text-black text-base">
                  Detect cheating, track movements, analyze audio/speech
                  patterns, and provide real-time, secure, efficient, and
                  accurate proctoring to ensure reliable results.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden flex-1">
              <img
                className="w-56"
                src="https://dersyb7nfifdf.cloudfront.net/production/11344/4dd46cb3-50f2-4014-9d18-626c754d434c.png"
                alt="Sample Image"
              />
              <div className="py-4">
                <div className="font-bold text-lg mb-2">One-click invites</div>
                <p className="text-black text-base">
                  Send candidates an email invite to the MEAN Stack Developer
                  Test from your dashboard by entering their email address.
                  Create a public link for each test that you can share with
                  candidates.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-lg p-1">
            <button className="bg-black text-white font-bold py-2 px-4 rounded-3xl">
              Add to my test →
            </button>
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-3xl border border-black">
              Preview this test
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ReportCard = ({ name, title, communication, approach, code }) => {
  return (
    <div className="bg-white rounded-lg  p-6 w-64 border border-black">
      <div className="text-left bg-black p-2 rounded-md text-white">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-400 ">{title}</p>
      </div>
      <div className="mt-2">
        <div className="flex flex-col justify-between">
          <p className="text-gray-800 font-medium text-left text-sm">
            Communication or Articulation
          </p>
          <div
            className={`w-3/4 h-2 rounded-full bg-gray-300 flex items-start justify-between`}
            style={{ backgroundColor: communication }}
          >
            <span></span>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <p className="text-gray-800 font-medium text-sm text-left">
            Approach to the Solution
          </p>
          <div
            className={`w-2/3 h-2 rounded-full bg-gray-300 flex items-center justify-between`}
            style={{ backgroundColor: approach }}
          >
            <span></span>
          </div>
        </div>
        <div className="flex  flex-col justify-between">
          <p className="text-gray-800 font-medium text-sm text-left">
            Code Structure
          </p>
          <div
            className={`w-7 h-2 rounded-full bg-gray-300 flex items-center justify-between`}
            style={{ backgroundColor: code }}
          >
            <span></span>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="./" className="text-blue-500 hover:text-blue-700">
          Download report ↓
        </a>
      </div>
    </div>
  );
};

export default MeanPage;
