const About = () => {
  const exp = new Date().getFullYear() - 2020;
  const age = new Date().getFullYear() - 1999;
  return (
    <>
      <div className="about">
        <div className="about-heading">About</div>
        <div className="description">
          I am Ashwary Jharbade, an enthusiast quick learner and aspiring
          Software Engineer at CESIT Ltd. Chennai. I am from Bhopal and have
          completed my studies in Computer Science Engineering from Lakshimi
          Narain College of Technology (LNCT) Bhopal, Madhya Pradesh, India.
        </div>
        <div className="description">
          I am proactive and result oriented professional have {exp}{" "}
          {exp > 1 ? "years" : "year"} of work experience in IT industry. I have
          gained knowledge and skills of complete Software Development Life
          Cycle from requirement analysis to mockup implementation, testting and
          deployment.
        </div>
        <div className="description">
          I am focused and inquisitive and have interest in learning
          cosmological facts and theories. My hobbies are watching movies,
          playing cricket and listening music.
        </div>
        <div className="about-heading">Professional Highlights</div>
        <div className="description">
          <ul>
            <li>
              Experience in develpoing softwares with exclusive focus on
              JavaScript and Python.
            </li>
            <li>
              Built project across domians including Ecommerce, News &amp;
              Media, Artificial Intelligence, Logistics and Web Scraping.
            </li>
            <li>
              Good experience in React JS, Django, Node JS amd REST Frameworks
            </li>
            <li>
              Experience in deployment of application using Github Pages, Heroku
              CLI and C Panel.
            </li>
            <li>
              Have good understanding of the agile methodology and practices.
            </li>
            <li>
              Excellent Team Player and ability to collaborate with other teams.
            </li>
          </ul>
        </div>
        <div className="about-heading">Skill Summary</div>
        <div className="description">
          <div className="description-content">
            <div className="heading">Languages:</div>
            <div className="text">JavaScript, Python, HTML, SCSS</div>
          </div>
          <div className="description-content">
            <div className="heading">Frameworks &amp; Libraries:</div>
            <div className="text"> Node JS, Express, Django, React JS</div>
          </div>
          <div className="description-content">
            <div className="heading">Tools:</div>
            <div className="text">Git, VS Code, Jira, Postman, C Panel</div>
          </div>
          <div className="description-content">
            <div className="heading">Databases:</div>
            <div className="text">MySQL, Mongo</div>
          </div>
          <div className="description-content">
            <div className="heading">Platforms:</div>
            <div className="text">Windows</div>
          </div>
          <div className="description-content">
            <div className="heading">Version Control:</div>
            <div className="text">Bitbucket, GitHub</div>
          </div>
        </div>
        <div className="about-heading">Expertise</div>
        <div className="description">
          <div className="expertise">
            <div className="skill">
              <div className="skill-name">JavaScript</div>
              <div className="skill-container">
                <div className="skill-perc">70%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">HTML</div>
              <div className="skill-container">
                <div className="skill-perc">75%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="expertise">
            <div className="skill">
              <div className="skill-name">Python</div>
              <div className="skill-container">
                <div className="skill-perc">65%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">React JS</div>
              <div className="skill-container">
                <div className="skill-perc">60%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="expertise">
            <div className="skill">
              <div className="skill-name">SASS</div>
              <div className="skill-container">
                <div className="skill-perc">60%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-container">
                <div className="skill-perc">65%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="expertise">
            <div className="skill">
              <div className="skill-name">Node JS</div>
              <div className="skill-container">
                <div className="skill-perc">55%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Django</div>
              <div className="skill-container">
                <div className="skill-perc">65%</div>
                <div className="skill-meter">
                  <div
                    className="skill-meter-fillup"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-heading">Personal Memorandum</div>
        <div className="description">
          <div className="description-content">
            <div className="heading">Name:</div>
            <div className="text">Ashwary Jharbade</div>
          </div>
          <div className="description-content">
            <div className="heading">Age:</div>
            <div className="text">{age} years</div>
          </div>
          <div className="description-content">
            <div className="heading">Nationality:</div>
            <div className="text">Indian</div>
          </div>
          <div className="description-content">
            <div className="heading">Languages:</div>
            <div className="text">English, Hindi</div>
          </div>
          <div className="description-content">
            <div className="heading">Address:</div>
            <div className="text">Bhopal, Madhya Pradesh, India</div>
          </div>
        </div>
        <div className="about-heading">Resume</div>
        <div className="description">
          <a href="https://ashwary-jharbade.github.io/" target="_blank">
            <em>Click</em> to visit digital resume
          </a>
        </div>
        <div className="description">
          <a href="" download>
            <em>Click</em> to download copy of resume
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
