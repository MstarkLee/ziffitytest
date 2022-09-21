import "./App.css";

import Planets from "../Planets";

const App = () => {
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets
        propHeader={[
          { name: "films", type: "object" },
          { name: "residents", type: "object" },
        ]}
      />
    </div>
  );
};

export default App;
