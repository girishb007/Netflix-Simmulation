import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow]=useState(false);

    const transitionNavBar = () =>{
        if( window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() =>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);

return (
<div className={'nav nav__black'}>
<div className='nav__contents'>

<img 
className='nav__logo'
src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''>  
</img>

<img 
className='nav__avatar'
src='https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg' alt=''>
</img>
ß
</div>
</div>

)
}

export default Nav