import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
        <li><Link to="/test" style={styles.navLink}>Test</Link></li>
        <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        <li><Link to="/system-list" style={styles.navLink}>Systems</Link></li>
        <li><Link to="/resources" style={styles.navLink}>Resources</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'sticky',  // Change from 'absolute' to 'sticky'
    top: 0,              // Stick the navbar to the top
    width: '100%',
    padding: '10px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    color: '#fff',
    padding: '0 20px',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
