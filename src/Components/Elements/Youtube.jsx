import React from 'react'

function Youtube() {
  return (
    <div className='picy'>
    <div className='text-center my-5'>
           <h1> <b> How It</b>  <b className='fontcolor'> Works</b> </h1>
    <div className='container'>
        <iframe
      width="100%"
      height="480"
      src="https://www.youtube.com/embed/-V5QjGogoig"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
      title="youtube video"
    />
    </div>
    </div>
    </div>
  )
}

export default Youtube