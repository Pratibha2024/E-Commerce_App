import { Link } from 'react-router-dom';

function Header () 
  {
    return (
    <>
    <div className='header'>
      <h1>SHOPPYGLOBE E-COMMERCE APP</h1>
    </div>
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">CheckedOut</Link></li>
      </ul>
    </nav>
    </>
    )
};

export default Header;
