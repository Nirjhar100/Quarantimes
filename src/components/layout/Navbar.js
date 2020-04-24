import React from 'react';
import { NavLink} from 'react-router-dom';
import './navbar.css';

const Navbar = ()=>{
    return(
      
    <nav>
      <div className="nav-wrapper abc">
        
        <NavLink to ='/' className="brand-logo center">QUARANTIMES</NavLink>
        <ul className="left">
          <li><NavLink to ='/guide'><span class="material-icons">library_books</span></NavLink></li>
        </ul>
        <ul className="right">
          <li><NavLink to ='/about'><span class="material-icons">group_work</span></NavLink></li>
        </ul>
      </div>
    </nav>
    
    )
}

export default Navbar;