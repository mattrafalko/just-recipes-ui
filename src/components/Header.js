import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from './Navigation';

function Header(props) {
    return (
      <header className="border-b p-3 flex justify-between items-center">
        {<Link to="/" className="font-bold">
          {props.appName} --- UserId: {props.userId}
        </Link> }
        <Navigation></Navigation>
      </header>
    );
  }
  
  export default Header;
  