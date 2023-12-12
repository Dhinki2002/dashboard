import React from "react";
import './Temp2.css';

const Temp2 = ({ values, img, template }) => {
  return (
    <div class="container">
      <div class="profile">
        <div class="profile_container">
          <div class="profile_profileImg">
            <img src={img} alt="shaif arfan" />
          </div>
          <div>
            <h1 class="profile_name">
              <span class="profile_name_firstName">{values[0][0]}</span>
              <span class="profile_name_lastName">{values[1][0]}</span>
            </h1>
            <p class="description profile_description">{values[3][0]}</p>
            <p class="description profile_description">{values[2][0]}</p>
            {/* <a class="downloadBtn" href="./cv.pdf" download="Resume.pdf">
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
      <div class="group-1">
        {/* <div class="skills">
          <h3 class="title">Expertise</h3>
          <ul class="skills_list description">
            <li>JavaScript</li>
            <li>PHP & Wordpress</li>
            <li>HTML CSS</li>
            <li>React JS</li>
            <li>MERN STACK</li>
          </ul>
        </div> */}
        <div class="ref">
          <h3 class="title">Professional Summary</h3>
          <p style={{ color: "white" }}>
            {values[4][0] &&
              values[4][0]
                .split(".")
                .map((sentence, index) => (
                  <p key={index}>
                    {sentence.trim() ? `•${sentence.trim()}` : ""}
                  </p>
                ))}
          </p>
        </div>

        <div class="edu">
          <h3 class="title">Education</h3>
          <div class="edu_item" style={{ color: "white" }}>
          {values[5].map((_, index) => (
                <div>
                    <b class="rela-block list-thing">
                        <span class="degree-year">
                            <span>{values[6][index]}</span>
                            {
                                values[7][index] && values[8][index] && (
                                    <span>
                                        {values[7][index].slice(0, 4)}-{values[8][index].slice(0, 4)}
                                    </span>
                                )
                            }

                        </span>
                    </b>

                    <p class="rela-block list-thing">{values[5][index]}</p>
                    <p class="rela-block list-thing">{values[9][index]}</p>
                    <br></br>
                </div>
            ))}
          </div>
        </div>

        {/* <div class="certification">
          <h3 class="title">certification</h3>
          <div class="certification_item">
            <p class="item_preTitle">2018</p>
            <h4 class="item_title">Frontend Developer</h4>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div> */}
      </div>
      <div class="group-2">
        <div class="exp">
          <h3 class="title">Experience</h3>
          <div class="exp_item">
            <p class="item_preTitle">2019 - present</p>
            <h4 class="item_title">Rashid Software LTD.</h4>
            <p class="item_subtitle">Frontend Developer</p>
            <p class=" description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div class="exp_item">
            <p class="item_preTitle">2019 - present</p>
            <h4 class="item_title">Rashid Software LTD.</h4>
            <p class="item_subtitle">Frontend Developer</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
        {/* <div class="awards">
          <h3 class="title">Awards</h3>
          <div class="awards_item">
            <p class="item_preTitle">2019</p>
            <h4 class="item_title">Rashid Software LTD.</h4>
            <p class=" description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div class="awards_item">
            <p class="item_preTitle">2019</p>
            <h4 class="item_title">Rashid Software LTD.</h4>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div> */}

        <div class="interest">
          <h3 class="title">Interest</h3>
          <div class="interest_items">
            <div class="interest_item">
              <i data-feather="music"></i>
              <span>Music</span>
            </div>
            <div class="interest_item">
              <i data-feather="book"></i>
              <span>Books</span>
            </div>
            <div class="interest_item">
              <i data-feather="map"></i>
              <span>Travel</span>
            </div>
          </div>
        </div>
      </div>

      <div class="group-3">
        {/* <div class="contact">
          <h3 class="title">Contact</h3>
          <div class="contact_info">
            <p class="description">Chittagong, Bangladesh</p>
            <p class="description">+880 ** *** ***</p>
            <p class="description">shaifarfan08@gmail.com</p>
          </div>
        </div> */}
        <div class="social">
          <h3 class="title">Socials</h3>
          <div class="social_items">
            <a href="#" target="_b" class="social_item">
              <i data-feather="github"></i>
              <span>/shaifarfan</span>
            </a>
            <a href="#" target="_blank" class="social_item">
              <i data-feather="twitter"></i>
              <span>/shaifarfan08</span>
            </a>
            <a href="#" target="_blank" class="social_item">
              <i data-feather="linkedin"></i>
              <span>/shaifarfan08</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp2;
