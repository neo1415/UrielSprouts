import React from 'react'
import UseStorage from './storageHook'

const ProgressBar = ({ file, setFile }) => {

    const {url, progress} = UseStorage(file);
    console.log(progress, url);

  return (
    <div className='progress-bar'>progressBar</div>
  )
}

export default ProgressBar