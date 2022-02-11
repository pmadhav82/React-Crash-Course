import {Link}  from 'react-router-dom';

const Navbar = ()=>{

let users = ["Ram", "Shyam", "Madhav", "Hari"];
let num =  Math.floor(Math.random()*users.length);
let id = users[num]



return(
    <div>
        <ul className='navbar'>
            <li className='nav-link'><Link to="/">Home</Link></li>
            <li className='nav-link'><Link to={`/about/${id}`}>About</Link></li>
            <li className='nav-link'><Link to="/profile">Profile</Link></li>
            <li className='nav-link'><Link to="/todo">Todo App</Link></li>
         <li className='nav-link'><Link to='/shopping'>Shopping Cart</Link></li>
         
        </ul>

    </div>
)


}
export default Navbar;