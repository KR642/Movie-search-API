import React from 'react'

const Nav = ({direction,cl}) => {
    
  return (
    <>
        <div className= {`NavMain ${direction}`} >
            <div className={`NavChild ${cl}`}>
                <a href="#">Search movies</a>
            </div>
            <div className={`NavChild ${cl}`}>
                <a href="#">Your shows</a>
            </div>
        </div>
        
    </>
  )
}

export default Nav