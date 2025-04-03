import React, { useState } from "react";
import Routing from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return <Routing />;
}

export default App;
