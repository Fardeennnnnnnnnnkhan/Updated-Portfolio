import React, { useState } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Layout />
    </SmoothScroll>
  );
}

export default App;
