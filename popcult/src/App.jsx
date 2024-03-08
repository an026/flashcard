import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  return (
    <div className="app">
      <h1 className="title">PopCult</h1>
      <h4>Test your knowledge on pop culture trivia!</h4>
      <Flashcard />
    </div>
  );
}

export default App;
