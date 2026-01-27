import React from 'react';
function Education() {
  return ( 
    <div className='container m-5'>
      <div className='row'>
        <div className='col-6'>
          <img alt="" src='media/education.svg' style={{width:"70%"}}/>
        </div>
        <div className='col-6 mt-5'>
          <h1 className='mt-4 mb-5 fs-3'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="https://leetcode.com/problems/" style={{textDecoration:"none"}}>Varsity </a>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="https://leetcode.com/problems/" style={{textDecoration:"none"}}>TradingQ&A </a>
        </div>
      </div>
    </div>
   );
}

export default Education;