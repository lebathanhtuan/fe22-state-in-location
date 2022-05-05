import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage";

function App() {
  const userName = "Tuấn";

  return (
    <div className="app">
      <HomePage name={userName} age={10} />
    </div>
  );
}

export default App;
