import { Link } from "react-router-dom";

const NotFound = () => (
    <>
        <h1>Page not found, you can try this routes:</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/react-form">React</Link></li>
            <li><Link to="/formik-form">Formik</Link></li>
        </ul>
    </>
);
export default NotFound;