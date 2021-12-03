import { Link } from "react-router-dom";
import { routes } from './constants';

const NotFound = () => (
    <>
        <h1>Page not found, you can try this routes:</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={routes.React}>React</Link></li>
            <li><Link to={routes.Formik}>Formik</Link></li>
        </ul>
    </>
);
export default NotFound;