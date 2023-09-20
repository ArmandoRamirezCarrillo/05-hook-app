import {NavLink, Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>UseContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
