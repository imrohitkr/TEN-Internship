/* eslint-disable no-irregular-whitespace */
function casestudies() {
  const stories = [
    {
      title:
        "How Yubi Achieved 5% Increase In their Applicant to Hire Ratio With Intervue",
      time: "5 mins",
      date: "July 23, 2023",
      imageUrl:
        "https://dersyb7nfifdf.cloudfront.net/dev/2146/596f05d1-3c84-4d69-bcb7-f9ece99d97e5.jpg",
    },
    {
      title:
        "How We Opened the Top of Hiring Funnel – And Got Better Hires for Tekion",
      time: "5 mins",
      date: "July 24, 2023",
      imageUrl:
        "https://dersyb7nfifdf.cloudfront.net/dev/2146/a3509b93-3d54-4454-8ed7-afa5a2e6f5ab.jpg",
    },
    {
      title:
        "How Tartan Selects Coding Interns And Got Better Hires for Tekion",
      time: "5 mins",
      date: "July 26, 2023",
      imageUrl:
        "https://dersyb7nfifdf.cloudfront.net/dev/2146/73f9a40e-4250-4a7b-b6f1-d1f756ceb560.jpg",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-32 mt-16">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold mb-4 mt-20">
              How Intervue Helped Xpressbees Hire the Best Technical Talent
            </h2>
            <p className="text-xl mb-6 lg:w-4/5">
              Swapnil, VP of Engineering at Xpressbees, shares his thoughts on
              how Intervue has helped the company streamline its technical
              hiring process.
            </p>
            <button
              className="bg-black text-white text-xl py-4 px-6 rounded-full"
              onClick={() =>
                (window.location.href =
                  "https://www.intervue.io/success-story/swapnil-gupta-xpressbees")
              }
            >
              Read more →
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="https://dersyb7nfifdf.cloudfront.net/dev/2146/37ce1c44-cfc4-4b2a-a7e6-a2307eafc912.jpg"
              alt="Testimonial image"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold mb-8 mt-8">Success Stories</h1>
          <div className="flex flex-wrap">
            {stories.map((story, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white shadow-md overflow-hidden">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                      Success Story
                    </span>
                    <h2 className="text-lg font-semibold mb-2">
                      {story.title}
                    </h2>
                    <p className="text-gray-600 text-sm ">
                      {story.time} • {story.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" text-xl text-center ">&lt; 1 &gt;</div>
        </div>
      </div>
    </>
  );
}

export default casestudies;
