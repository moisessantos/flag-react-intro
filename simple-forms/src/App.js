import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ReactForm from "./React-form";
import FormikForm from "./Formik-form";
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/react-form" element={<ReactForm />} />
      <Route path="/formik-form" element={<FormikForm />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
