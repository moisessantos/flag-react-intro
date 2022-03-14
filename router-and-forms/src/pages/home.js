import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes'

export default function Home() {
  return (
    <>
      <h1>Welcome to our routing tutorial, here are our available routes:</h1>
      <ul>
        <li><Link to={routes.ReactForm}>Simple react form</Link></li>
        <li><Link to={routes.FormikForm}>Simple formik form</Link></li>
        <li><Link to={routes.HookForm}>Simple hook form</Link></li>
      </ul>
    </>
  )
}
