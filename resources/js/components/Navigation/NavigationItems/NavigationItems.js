import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return(
    <ul className="NavigationItems">
       <NavigationItem>Portfolio</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>Log in</NavigationItem>
        <NavigationItem>Register</NavigationItem>
    </ul>
  );
}

export default navigationItems;