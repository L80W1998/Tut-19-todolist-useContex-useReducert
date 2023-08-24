import Header from "./components/Header";
import Notes from "./components/Notes";
import "../src/css/App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes></Notes>
    </div>
  );
}

export default App;
