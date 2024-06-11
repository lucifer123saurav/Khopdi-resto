import React from 'react'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
   <section className='notFound'>
    <main>
        <div>
            <MdError />
            <h1>404</h1>
        </div>
        <p>Page not found, go to the home page</p>
        <Link to='/'>Home page</Link>
        
    </main>
   </section>
  )
}
