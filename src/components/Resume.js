import React from 'react'
import './Resume.css'

const Resume = ({ values, img, template }) => {
    return (<div class="rela-block page">
            <div class="rela-block top-bar">
                <div className='caps name'>
                    <div className="abs-center">{values[0][0]} {values[1][0]}</div>

                </div>
            </div>
            <div class="side-bar">
                <div class="mugshot">
                    <div class="logo">
                    <img className="rela-block logo-svg" alt="" src={img} />
                    </div>
                </div>
                <p>{values[3][0]}</p>
                <p>{values[2][0]}</p><br />
                {values[15].map((_, index) => (
                    <p class="rela-block social twitter">{values[15][index]}: {values[16][index]}</p>
                ))}
                <p class="rela-block caps side-header">Expertise</p>
                <ul>
                    {values[17].map((_, index) => (
                        <div>
                            <li style={{ marginLeft: '1vw' }}>
                                <div className="rela-block">
                                    <p className="list-thing">{values[17][index]}</p>
                                </div>
                            </li>
                            <li style={{ marginLeft: '1vw' }}>
                                <div className="rela-block">
                                    <p className="list-thing">{values[18][index]}</p>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>

                <p class="rela-block caps side-header">Education</p>


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
            <div class="rela-block content-container">
                {/* <h2 class="rela-block caps title">Jr Front-End Developer</h2>
                <div class="rela-block separator"></div> */}
                <div class="rela-block caps greyed">Profile</div>
                <p class="long-margin">
                    {values[4][0]}
                </p>
                <div class="rela-block caps greyed">Experience</div>

                {values[10].map((_, index) => (
                    <div>
                        <h3>{values[11][index]}</h3>
                        <b class="light degree-year">
                            <span>{values[10][index]}</span>
                            {
                                values[12][index] && values[13][index] && (
                                    <span class="light">
                                        {values[12][index].slice(0, 4)}-{values[13][index].slice(0, 4)}
                                    </span>
                                )
                            }

                        </b>
                        <p class="justified">{values[14][index]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume