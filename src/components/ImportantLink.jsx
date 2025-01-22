import React from 'react'

const ImportantLink = () => {
  return (
    <div className="text-center md:my-3 py-2">
      <h1 className='text-xl font-bold'>Important Links</h1>
      <nav >
        <a className='block text-sky-300 hover:text-sky-200' href="https://augustine.pages.dev">Developer</a>
        <a className='block text-sky-300 hover:text-sky-200' href="">Contribute Project</a>
        <a className='block text-sky-300 hover:text-sky-200' href="">Career Opportunities</a>
      </nav>
    </div>
  )
}

export default ImportantLink
