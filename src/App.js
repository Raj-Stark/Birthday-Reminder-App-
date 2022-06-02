import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List peoples={people}></List>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </>
  );
}

export default App;
