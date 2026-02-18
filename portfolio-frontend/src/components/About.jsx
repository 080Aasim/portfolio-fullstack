import { MdHtml } from "react-icons/md";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about">
      <Link
        to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
        className="Link"
        target="_blank"
      >
        <h2>Aasim Akhtar</h2>
      </Link>
      <Link
        to="https://www.gniotgroup.edu.in/"
        className="Link"
        target="_blank"
      >
        <h2>Graduated</h2>
      </Link>
      <Link to="https://github.com/080Aasim" className="Link" target="_blank">
        <h2>Coding Is Love</h2>
      </Link>
      <div id="sk">
        <h2>Skills → </h2>
        <p className="skills">
          Html<MdHtml style={{ marginRight: "4px", fontSize: "40px" }} /> 
          Css<FaCss3 style={{ marginRight: "4px", fontSize: "40px" }} /> 
          Tailwind<RiTailwindCssFill style={{ marginRight: "4px", fontSize: "40px" }} />
          Javascript<IoLogoJavascript style={{ marginRight: "4px", fontSize: "40px" }} />
          React<FaReact style={{ marginRight: "4px", fontSize: "40px" }} />
          NodeJs<DiNodejs style={{ marginRight: "4px", fontSize: "40px" }} />
          ExpressJS<SiExpress style={{ marginRight: "4px", fontSize: "40px" }}/> 
          MongoDB<BiLogoMongodb style={{ marginRight: "6px", fontSize: "40px" }} />
          Git/Github<FaGithub style={{ marginRight: "4px", fontSize: "40px" }} />
        </p>
      </div>
    </div>
  );
}

export default About;
