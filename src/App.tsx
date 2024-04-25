import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main>
        <h1>Basic Template</h1>
        <p>
          This is a basic template for a simple website using
          <ul>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>SASS/SCSS</li>
            <li>FontAwesome</li>
          </ul>
        </p>
      </Main>
    </div>
  );
}

export default App;
