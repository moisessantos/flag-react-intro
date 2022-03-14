import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, NotFound, ReactForm, FormikForm, HookForm } from "./pages";
import routes from "./routes";

function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to={routes.Home}>Home</Link>
        </nav>
        <Routes>
          <Route exact path={routes.ReactForm} element={<ReactForm />}>
            <Route path=":name" element={<ReactForm />} />
          </Route>
          <Route path={routes.FormikForm} element={<FormikForm />} />
          <Route path={routes.HookForm} element={<HookForm />}>
            <Route path=":name" element={<HookForm />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
