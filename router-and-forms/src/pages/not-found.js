import React from 'react'
import { Link } from 'react-router-dom'
import { BackButton } from '../components/back-button';
import routes from '../routes';

export default function NotFound() {
  return (
    <>
        <h1>Page not found, you can try this routes:</h1>
        <ul>
            <li><Link to={routes.Home}>Home</Link></li>
            <li><Link to={routes.ReactForm}>React</Link></li>
            <li><Link to={routes.FormikForm}>Formik</Link></li>
        </ul>
        <BackButton />
    </>
  )
}
