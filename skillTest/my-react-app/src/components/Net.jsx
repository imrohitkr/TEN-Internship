function Net() {
  return (
    <>
      <div className="md:w-72 md:ml-[350px] mt-12 bg-gray-100 shadow-md">
        <a
          className="block shadow-md rounded-lg p-4"
          href="/Components/Sidebar.jsx"
          target="_blank"
        >
          <div className="header flex items-center">
            <img
              className="skill-icon w-10 h-10 mr-4"
              src="https://dersyb7nfifdf.cloudfront.net/production/17900/0c477e77-de43-4365-853b-df4c6d34ea76.png"
              alt="Net"
            />
            <div className="text font-bold">Python</div>
            <div className="proceedArrow ml-auto">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0005 23.5205C8.73647 23.5205 4.48047 19.2645 4.48047 14.0005C4.48047 8.73647 8.73647 4.48047 14.0005 4.48047C19.2645 4.48047 23.5205 8.73647 23.5205 14.0005C23.5205 19.2645 19.2645 23.5205 14.0005 23.5205ZM14.0005 5.60047C9.35247 5.60047 5.60047 9.35247 5.60047 14.0005C5.60047 18.6485 9.35247 22.4005 14.0005 22.4005C18.6485 22.4005 22.4005 18.6485 22.4005 14.0005C22.4005 9.35247 18.6485 5.60047 14.0005 5.60047Z"
                  fill="#5B5B5B"
                ></path>
                <path
                  d="M13.8328 19.4324L13.0488 18.6484L17.6968 14.0004L13.0488 9.35236L13.8328 8.56836L19.2648 14.0004L13.8328 19.4324Z"
                  fill="#5B5B5B"
                ></path>
                <path
                  d="M8.96094 13.4404H18.4809V14.5604H8.96094V13.4404Z"
                  fill="#5B5B5B"
                ></path>
              </svg>
            </div>
          </div>
          <div className="skillTagsContainer mt-4 flex flex-wrap gap-2">
            <div className="pb-2">
              <button className="skillTag p-2 font-semibold text-sm bg-blue-200 rounded-lg">
                ASP .Net
              </button>
            </div>
            <div className="pb-2">
              <button className="skillTag p-2 font-semibold text-sm bg-blue-200 rounded-lg">
                .Net Core 6
              </button>
            </div>
            <div className="pb-2">
              <button className="skillTag p-2 font-semibold text-sm bg-blue-200 rounded-lg">
                .Net Miscellaneous
              </button>
            </div>
            <div className="pb-2">
              <button className="skillTag p-2 font-semibold text-sm bg-blue-200 rounded-lg">
                .Net Web API
              </button>
            </div>
          </div>
          <div className="moreInfoWrapper mt-4">
            <div>
              <span className="moreInfo font-bold">30 minutes:</span>
              <span className="moreInfo"> duration</span>
            </div>
            <div className="mt-2">
              <span className="moreInfo font-bold">Medium:</span>
              <span className="moreInfo"> difficulty level</span>
            </div>
            <div className="mt-2">
              <span className="moreInfo font-bold">25:</span>
              <span className="moreInfo"> questions</span>
            </div>
            <div className="mt-2">
              <span className="moreInfo font-bold">Intermediate:</span>
              <span className="moreInfo"> seniority level</span>
            </div>
            <div className="mt-2">
              <span className="moreInfo font-bold">528+:</span>
              <span className="moreInfo"> candidates assessed</span>
            </div>
            <div className="mt-2">
              <span className="moreInfo font-bold">68:</span>
              <span className="moreInfo"> organisations served</span>
            </div>
          </div>
        </a>
        <div className="blankFill spanningThree"></div>
        <div className="blankFill spanningThree"></div>
        <div className="blankFill spanningTwo"></div>
      </div>
    </>
  );
}

export default Net;
