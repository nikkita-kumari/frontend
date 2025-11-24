import React from 'react';
function Hero() {
  return (
    <div className='conatiner p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/homeHero.png' alt='Hero-Image' className='mb-5 img-fluid d-block mx-auto' style={{width:"70%"}}/>
        <h2 className='mt-5'>Invest in everything</h2>
        <p className='my-1 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;