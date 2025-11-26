import React from 'react'
import { Link } from 'react-router';

const BannerSec = () => {
  return (
    <div
        className="hero min-h-screen"
        style={{
            backgroundImage:
            "url(https://i.ibb.co.com/pj90kwtz/Al-hikam-hefzkhana.jpg)",
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className='flex gap-3'>
                <button className='btn'>
                    <Link to="/admission">Download Application</Link>
                </button>

                <button className='btn btn-primary'>
                    <Link to="/admission">Application</Link>
                </button>
            </div>

        </div>
    </div>
  )
}

export default BannerSec
