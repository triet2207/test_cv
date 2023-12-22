import "./App.css";
import Img from "./components/img";
import Contract from "./components/contract";
import Expertise from "./components/Expertise";
import Personal from "./components/Personal";
import Title from "./components/Title";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
function App() {
  return (
    <>
      <div className="container mx-auto p-40 bg-green-900">
        <div className="cv_wrapper flex">
          <div className="col_left bg-green-800 w-[400px] text-white">
            <Img />
            <Contract />
            <Expertise />
            <Personal />
          </div>
          <div className="col_right bg-white flex-1 ">
            <Title />
            <About />
            <Education />
            <Work />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
