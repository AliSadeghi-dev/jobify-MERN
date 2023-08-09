import { Link } from "react-router-dom";
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wolf grailed dreamcatcher hella hell of, kickstarter vegan
            irony banjo roof party chartreuse ascot paleo glossier. Man braid
            you probably haven't heard of them same mumblecore XOXO unicorn.
            Cred banjo gluten-free cold-pressed lyft knausgaard wolf. Twee fixie
            fingerstache DIY listicle
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img " />
      </div>
    </Wrapper>
  );
}



export default Landing