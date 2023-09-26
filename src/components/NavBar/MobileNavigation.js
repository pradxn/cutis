import React, {useState} from 'react'
import classes from './NavBar.module.css';
import NavLinks from './NavLinks';
import {CgMenu} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className={classes.Hamburger} 
                            size='40px' 
                            color='white'
                            onClick={() => setOpen(!open)}
                            />

    const closeIcon = <IoMdClose className={classes.Hamburger} 
                            size='40px' 
                            color='white'
                            onClick={() => setOpen(!open)}
                            />
    
    const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={classes.MobileNavigation}>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
  )
}

export default MobileNavigation