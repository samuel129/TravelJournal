import React from 'react';
import styles from "./style.css"
import Data from "./data.js"
import Title from "./title.js"
import Entry from "./entries.js"

function App() {
  const EntryArray = Data.map(item => {
    return (<Entry
      key={item.key}
      item={item}
    />)})

  return (
    <div className="App">
      <Title/>
      <div >
        {EntryArray}
      </div>
    </div>
  );
}

export default App;
