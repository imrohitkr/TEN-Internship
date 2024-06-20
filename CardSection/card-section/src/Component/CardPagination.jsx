import React from "react";

function CardPagination() {
  const data = [
    {
      id: 1,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/723473e7-347b-486a-a9f3-9280faf90333.png",
      imgTitle: "ANGULAR",
      skillOne: "Angular",
      skillTwo: "AngularJS Factory and Service",
      skillThree: "AngularJS Fundamentals",
      skillFour: "AngularJS Directives",
      skillFive: "AngularJS RestAPI",
      skillSix: "AngularJS Optimization",
      infoOneSpan1: "30 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Hard",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "25",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "1430+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "91",
      infoSixSpan2: " organisations served",
    },
    {
      id: 2,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/e29b02b0-f70d-44ca-a91f-56b538527048.png",
      imgTitle: "FRONTEND DEVELOPER",
      skillOne: "Typescript",
      skillTwo: "CSS3",
      skillThree: "Git",
      skillFour: "Es6",
      skillFive: "ReactJS Hooks",
      skillSix: "ReactJS Component",
      infoOneSpan1: "35 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Medium",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "30",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "859+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "82",
      infoSixSpan2: " organisations served",
    },
    {
      id: 3,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/b0f6058d-6057-4e73-ba5d-81adfc93a3bf.png",
      imgTitle: "MERN STACK",
      skillOne: "MERN",
      skillTwo: "MongoDB Miscellaneous",
      skillThree: "Miscellaneous",
      skillFour: "ExpressJS",
      skillFive: "Node Miscellaneous",
      infoOneSpan1: "30 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Medium",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "25",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "1238+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "63",
      infoSixSpan2: " organisations served",
    },
    {
      id: 4,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/a02c3223-f018-451c-b5b0-f76151857b05.png",
      imgTitle: "MySql",
      skillOne: "MySql",
      infoOneSpan1: "30 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Medium",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "25",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "1529+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "92",
      infoSixSpan2: " organisations served",
    },
    {
      id: 5,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/7da5bbcd-9759-4a65-b2f5-a76408b309a5.png",
      imgTitle: "MEAN STACK",
      skillOne: "MongoDB Miscellaneous",
      skillTwo: "ExpressJS",
      skillThree: "Node Miscellaneous",
      skillFour: "Angular",
      skillFive: "MERN",
      infoOneSpan1: "30 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Medium",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "25",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "798+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "66",
      infoSixSpan2: " organisations served",
    },
    {
      id: 6,
      img: "https://dersyb7nfifdf.cloudfront.net/production/17900/eef8373a-d697-4724-893d-8025b5a46120.png",
      imgTitle: "REACT",
      skillOne: "ReactJS Hooks",
      skillTwo: "ReactJS Component",
      skillThree: "ReactJS Libraries",
      skillFour: "ReactJS Optimization",
      skillFive: "Miscellaneous",

      infoOneSpan1: "30 minutes",
      infoOneSpan2: "duration",
      infoTwoSpan1: "Medium",
      infoTwoSpan2: " difficulty level",
      infoThreeSpan1: "25",
      infoThreeSpan2: " questions",
      infoFourSpan1: "Intermediate",
      infoFourSpan2: " seniority level",
      infoFiveSpan1: "798+",
      infoFiveSpan2: " candidates assessed",
      infoSixSpan1: "66",
      infoSixSpan2: " organisations served",
    },
  ];
  return (
    <>
      {data.map((items) => (
        // eslint-disable-next-line react/jsx-key
        <div className="w-80 relative mx-auto sm:mx-0">
          <div
            style={{ minHeight: "550px" }}
            className="w-80  bg-slate-100 rounded-2xl p-2 hover:cursor-pointer"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <img className="w-16" src={items.img} alt="img" />
                <div>{items.imgTitle}</div>
              </div>
              <div>
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
            <div className="">
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2  mb-2">
                {items.skillOne}
              </div>
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2 mb-2">
                {items.skillTwo}
              </div>
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2 mb-2">
                {items.skillThree}
              </div>
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2 mb-2">
                {items.skillFour}
              </div>
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2 mb-2">
                {items.skillFive}
              </div>
              <div className="bg-blue-300 inline-block px-5 rounded-full mr-2 mb-2">
                {items.skillSix}
              </div>
            </div>
            <div className="mx-2 my-5 absolute bottom-0">
              <p>
                <span className="font-semibold">{items.infoOneSpan1} </span>
                {items.infoOneSpan2}
              </p>
              <p>
                <span className="font-semibold">{items.infoTwoSpan1}</span>
                {items.infoTwoSpan2}
              </p>
              <p>
                <span className="font-semibold">{items.infoThreeSpan1}</span>
                {items.infoThreeSpan2}
              </p>
              <p>
                <span className="font-semibold">{items.infoFourSpan1}</span>
                {items.infoFourSpan2}
              </p>
              <p>
                <span className="font-semibold">{items.infoFiveSpan1}</span>
                {items.infoFiveSpan2}
              </p>
              <p>
                <span className="font-semibold">{items.infoSixSpan1}</span>
                {items.infoSixSpan2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPagination;
