import React from 'react'

import './home.css'

function Home (){
    return (
        <div className='homepage-container'>
            
            <div className='search-div'>
            <h1 className='main-heading'>Reimagine Home</h1>
            <h6 className='sub-heading'>We’ll help you find a place you’ll love.</h6>
                <input type='text' placeholder='Enter an address, neighborhood, city, or Zip code' className='input-search'  />
                <input type='text' className='input-search'  />
            </div>
            
        </div>
    )
}

export default Home;