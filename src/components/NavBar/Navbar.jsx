import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>LofanaStore</h1>
            <section>
                <NavLink to='/category/remerones' className={({ isActive }) => isActive ? classes.active : classes.inactive }>remerones</NavLink>
                <NavLink to='/category/joggins' className={({ isActive }) => isActive ? classes.active : classes.inactive }>joggins</NavLink>
                <NavLink to='/category/hoodies' className={({ isActive }) => isActive ? classes.active : classes.inactive }>hoodies</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar