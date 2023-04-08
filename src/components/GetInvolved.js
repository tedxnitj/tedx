import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import React from 'react'
import { FolderMinus, GraphUpArrow, Link, Person, PersonCheckFill, Question, SearchHeartFill, Thunderbolt } from 'react-bootstrap-icons';
import './getinvolve.css';
export const GetInvolved = () => {
  return (
    <div id="getInvolved" class="navDiv" data-scroll-section="">
            <div id="spekin">
                <div class="text-center">
                    <h1 class="whitefont">Becoming a <span class="emphasis">Speaker</span></h1>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><Question/></div></div>
                        <div class="symdes">
                            <h4 class="whitefont">Learn</h4>
                            <p class="whitefont">Do your research by reading literally everything on this web page.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><FolderMinus/></div></div>
                        <div class="symdes">
                            <h4 class="whitefont">Apply</h4>
                            <p class="whitefont">Fill out an application.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><Person/></div></div>
                        <div class="symdes">
                            <h4 class="whitefont">Review &amp; Selection</h4>
                            <p class="whitefont">Our speaker selection committee will review your proposal and contact you.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><PersonCheckFill/></div></div>
                        <div class="symdes">
                            <h4 class="whitefont">Curation</h4>
                            <p class="whitefont">If selected, we'll help you perfect your presentation for a TEDx audience.</p>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        {/* <h2 class="whitefont">The speaker nomination for the 13th edition of TEDxIITKharagpur are open.</h2> */}
                        <a href="https://forms.gle/jzJxevNgsrbMb4dL6" target="_blank">
                            <button class="appBtn whiteFont">Speaker details</button>
                        </a> 
                    </div>
                </div>
            </div>
            <div id="partin">
                <div class="text-center">
                    <h1>Reasons to <span class="emphasis">Partner</span> with Us</h1>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><Link/></div></div>
                        <div class="symdes">
                            <h4>Brand Linking</h4>
                            <h6 className='makeitwhite'>Associate with a powerful worldwide brand and movement synonymous with creativity, collaboration, and innovation.</h6>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><GraphUpArrow/></div></div>
                        <div class="symdes">
                            <h4>Lead Generation</h4>
                            <h6 className='makeitwhite'>Gain highly qualified leads from tuned-in intellectuals across a variety of industries, including education, healthcare, and technology.</h6>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="sym"><div class="fa"><Thunderbolt/></div></div>
                        <div class="symdes">
                            <h4>Unconventional</h4>
                            <h6 className='makeitwhite'>Access unconventional showcase opportunities unique to our conference, creating genuine experiences that drive higher engagement.</h6>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <a href="mailto:tedxnitj@nitj.ac.in" target="_blank">
                            <button class="appBtn whiteFont">Contact Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}
