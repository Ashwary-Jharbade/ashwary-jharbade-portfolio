import { useRef, useState } from "react";

const Projects = () => {
  const inpRef = useRef(null);
  const [search, setSearch] = useState("");
  const data = [
    {
      id: 1,
      imageAlt: "Hybrid signin page gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131227816-0b41d368-9923-4f29-84f2-639d60db46ea.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/Hybrid-Sign-In-Page",
      title: "Hybrid sign in page",
      tags: "HTML, JS, CSS",
    },
    {
      id: 2,
      imageAlt: "Iphone 12 pro clone web page image",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/143980567-e0223797-3059-4b23-bcb7-ebcf8f151857.png",
      gitUrl: "https://github.com/Ashwary-Jharbade/Iphone12Pro-Clone",
      title: "Apple Iphone 12 pro clone page",
      tags: "HTML, JS, CSS",
    },
    {
      id: 3,
      imageAlt: "Flight search web page image",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/143981160-45b37877-ff0d-47b8-8348-59c428f87fd9.png",
      gitUrl: "https://github.com/Ashwary-Jharbade/flight.github.io",
      title: "Flight search web application",
      tags: "HTML, JS, CSS",
    },
    {
      id: 4,
      imageAlt: "Netflix signin and sinup page image",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131257356-10a34ab6-44a4-4f9c-b4d8-e36b46f71d5c.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/Netflix-Clone",
      title: "Netflix home and signup page",
      tags: "HTML, JS, CSS",
    },
    {
      id: 5,
      imageAlt: "Flipkart home page image",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/132006487-8ea13c22-716e-49dd-b09d-636e58b7b165.png",
      gitUrl: "https://github.com/Ashwary-Jharbade/Flipkart-Clone",
      title: "Flipkart home page clone",
      tags: "HTML, JS, SASS",
    },
    {
      id: 6,
      imageAlt: "Bootstrap home page clone gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131227995-3aebdb41-136e-4a0e-8aaf-30dc2ab36441.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/ecommerce-homepage-clone",
      title: "Bootstap ecommerce home page clone",
      tags: "Bootstap, HTML, JS, CSS",
    },
    {
      id: 7,
      imageAlt: "Chat app page clone gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131227488-a6f24b3a-680b-41ee-9a4a-d5235cc43f83.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/chatUI.github.io",
      title: "Chat application web page",
      tags: "HTML, JS, CSS",
    },
    {
      id: 8,
      imageAlt: "Twitter home page clone gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131227197-44b93d29-a403-4738-a4d3-d57dd7aa7b2b.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/Twitter-Clone",
      title: "Twitter home page clone",
      tags: "HTML, JS, CSS",
    },
    {
      id: 9,
      imageAlt: "Google meet web page clone gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131226934-6e61d256-8795-49a8-a7c2-2f689c9719d0.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/Google-meet-clone",
      title: "Google meet web page clone",
      tags: "HTML, JS, CSS",
    },
    {
      id: 10,
      imageAlt: "Disney+ hotstar home page clone gif",
      imageUrl:
        "https://user-images.githubusercontent.com/55127977/131226645-6d8674b8-686a-4697-839a-87c63910caf9.gif",
      gitUrl: "https://github.com/Ashwary-Jharbade/Disney-Hotstar-Clone",
      title: "Disney+ hotstar home page clone",
      tags: "HTML, JS, CSS",
    },
  ];

  const _onSearchHandler = (e) => {
    if (!e) {
      return;
    }
    const { value } = inpRef.current;
    const newValue = value.trim();
    setSearch(newValue);
  };

  const _projectDataIteratorHandler = () => {
    const searchValue = search.toUpperCase();
    return data
      .filter((val) => {
        return val.title.toUpperCase().indexOf(searchValue) > -1;
      })
      .map((item, index) => {
        return (
          <>
            <a key={index} href={item.gitUrl} target="_blank">
              <div className="project-card">
                <div className="project-card-image">
                  <img src={item.imageUrl} alt={item.imageAlt} />
                </div>
                <div className="project-card-details">
                  <div className="title">{item.title}</div>
                  <div className="tags">{item.tags}</div>
                </div>
              </div>
            </a>
          </>
        );
      });
  };

  return (
    <>
      <div className="project">
        <div className="heading">Projects</div>
        <div className="project-search">
          <div className="project-search-field">
            <input ref={inpRef} type="text" placeholder="Search" />
          </div>
          <div className="project-search-btn" onClick={_onSearchHandler}>
            <span className="fa fa-search"></span>
          </div>
        </div>
        <div className="project-card-container">
          {_projectDataIteratorHandler()}
        </div>
      </div>
    </>
  );
};

export default Projects;
