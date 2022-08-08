
import './App.css';
import navBar from '../src/images/barritas.png'
import logoImg from '../src/images/logoIron.png'
import declarativeImg from '../src/images/llaveinglesa.png'
import componentsImg from '../src/images/pc.png'
import singleImg from '../src/images/pc1.png'
import jsxImg from '../src/images/pcode.png'

function App() {

 




  return (
    <div className="App">
      <div id="sectionNavTitle">
          <div> 
              <img src={logoImg} alt="logo" />
              <img src={navBar} alt="nav" />
          </div>
          <div id="home"> 
              <h1>Say Hello to ReactJS</h1>
              <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
              <button>Awesome!</button>
          </div>
      </div>
        <div id="components"> 
          <div>
            <img src={declarativeImg} alt="declarative"  width={"100px"}/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive Uls</p>
          </div>
          <div>
            <img src={componentsImg} alt="components"  width={"100px"}/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src={singleImg} alt="single-way"  width={"100px"}/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src={jsxImg} alt="jsximage"  width={"100px"}/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers. </p>
          </div>
        </div>

    </div>
  );
}

export default App;
