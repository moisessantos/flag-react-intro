import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Welcome to our forms tutorial, you can find examples here:</h1>
    <ul>
      <li><Link to="/react-form">React</Link></li>
      <li><Link to="/formik-form">Formik</Link></li>
    </ul>
  </>
);

export default Home;
