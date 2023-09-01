import React from 'react'
import './skeleton.css';

import ScaleLoader from 'react-spinners/ScaleLoader';

const Skeleton = () => {
  return (
    <section className="loading">
        <div className="loading__content">
            <ScaleLoader color="purple" />
        </div>
    </section>
  )
}

export default Skeleton