import { FaArrowTrendDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Projects.css";
function Projects() {
  return (
    <div id="p">
      <h1 id="pro">Project List <FaArrowTrendDown style={{fontSize: "40px", position: "absolute", top: "10", right: "-45"}} /></h1>
      <div id="projects">
        <div className="project">
          <div id="img1" className="image"></div>
          <div className="About">
            <h2>Guest House</h2>
            <NavLink
              className="pLinks"
              to="https://080aasim.github.io/guestHouse/"
              target="_blank"
            >
              Click Here To Visit
            </NavLink>
          </div>
        </div>
        <div className="project">
          <div id="img2" className="image"></div>
          <div className="About">
            <h2>Cat Fact Generator</h2>
            <NavLink
              className="pLinks"
              to="https://080aasim.github.io/catFact/"
              target="_blank"
            >
              Click Here To Visit
            </NavLink>
          </div>
        </div>
        <div className="project">
          <div id="img3" className="image"></div>
          <div className="About">
            <h2>Shopping Cart Demo</h2>
            <NavLink
              className="pLinks"
              to="https://080aasim.github.io/shoppingCart/"
              target="_blank"
            >
              Click Here To Visit
            </NavLink>
          </div>
        </div>
        <div className="project">
          <div id="img4" className="image"></div>
          <div className="About">
            <h2>Ecommerce</h2>
            <NavLink
              className="pLinks"
              to="https://fullstack-frontend-sable-three.vercel.app/"
              target="_blank"
            >
              Click Here To Visit
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
