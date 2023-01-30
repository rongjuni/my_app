import "./about.css";
import Me2 from "../../img/Me2.jpg";
import ResumeIcon from "../../img/resumeIcon.png"
import Resume from "../../img/resume.pdf"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I will leave everything behind because I love Coding 
        </p>
        <p className="a-desc a-desc-mobile">
          No more CPA & MBA. I am happy to live as a developer.
        </p>
        <p className="a-desc a-desc-mobile">
          As you can tell, my back ground is not CS. But I have a strong passion to learn more than anyone and contribute to a team as a software developer.
        </p>
        <p className="a-desc">
          I am a licensed CPA with accounting degree from George Mason University and completed MBA from University of Illinois, Urbana-Champaign.
        </p>
          
          <p className="a-desc">
          As you can tell, my back ground is not Computer Science. However, I love coding because it gives me free riddles and I don't need to pay the Appstore anymore to purchase brain teasing games. I enjoy(ed) fishing and camping because I like time to think deeply quietly.
        </p>

        <p className="a-desc">
          I have a big family inlcuding two cats, two dogs, and two daughters. Not much free time is allowed due to the size of the family, but when I have,  I go out for a road biking, an indoor rock climbing, or room escaping depends on weather.
        </p>
        <div className="a-resume">
          <a className='a-resume-icon'
            href={Resume}
            download="MattSeo_Resume"
            target='_blank'>
              <img src={ResumeIcon} alt="resume" className="a-resume-img" 
             />
          </a>
          <div className="a-resume-texts">
            <h4 className="a-resume-title">Resume</h4>
            <p className="a-resume-desc">
              Please see my resume to know more intertest things about me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
