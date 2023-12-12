import React from "react";
import "./Temp.css";

const Temp = ({ values, img, template }) => {
  console.log(template);
  return (
    <div class="container">
      <div class="circle-image-container">
        <img src={img} alt="Profile" class="circle-image" />
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="title text-center">
            <h1>
              {values[0][0]} {values[1][0]}
            </h1>
            <h3>{values[2][0]}</h3>
            <h4>{values[3][0]}</h4>
            <hr />
            {/* <ul class="list-inline">
            <li><i class="devicon-laravel-plain colored"></i></li>
            <li><i class="devicon-javascript-plain colored"></i></li>
            <li><i class="devicon-html5-plain colored"></i></li>
            <li><i class="devicon-angularjs-plain colored"></i></li>
            <li><i class="devicon-linux-plain"></i></li>
          </ul> */}
          </div>

          {/* <!-- summary section --> */}

          <div class="summary">
            <h2 class="text-center">Summary</h2>
            <p>
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

          {/* <!-- education section --> */}
          <div class="education">
            <h2 class="text-center">Education</h2>
            {values[5].map((_, index) => (
              <div>
                <b class="rela-block list-thing">
                  <span class="degree-year">
                    <span>{values[6][index]}</span>
                    {values[7][index] && values[8][index] && (
                      <span>
                        {values[7][index].slice(0, 4)}-
                        {values[8][index].slice(0, 4)}
                      </span>
                    )}
                  </span>
                </b>

                <p class="rela-block list-thing">{values[5][index]}</p>
                <p class="rela-block list-thing">{values[9][index]}</p>
                <br></br>
              </div>
            ))}
          </div>

          {/* <!-- work experience section --> */}
          <div class="work-experience">
            <h2 class="text-center">Work Experience</h2>
            {values[10].map((_, index) => (
              <div>
                <h3>{values[11][index]}</h3>
                <b class="light degree-year">
                  <span>{values[10][index]}</span>
                  {values[12][index] && values[13][index] && (
                    <span class="light">
                      {values[12][index].slice(0, 4)}-
                      {values[13][index].slice(0, 4)}
                    </span>
                  )}
                </b>
                <p class="justified">
                  {values[14][index] &&
                    values[14][index]
                      .split(".")
                      .map((sentence, index) => (
                        <p key={index}>
                          {sentence.trim() ? `• ${sentence.trim()}` : ""}
                        </p>
                      ))}
                </p>
              </div>
            ))}
          </div>

          {/* <!-- Website & Social links --> */}
                        {/* <div class="work-experience">Website & Social Links</div> */}


          {/* <!-- Skills --> */}
                        {/* <div class="work-experience">Skills</div> */}



        </div>
      </div>
    </div>
  );
};

export default Temp;
