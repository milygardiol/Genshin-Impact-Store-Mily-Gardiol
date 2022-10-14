import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to={"/"}>
              <img className="btn btn-ghost normal-case text-xl" src="https://www.gensh.in/fileadmin/Database/items/Currency/wish_Primogem.png" alt="Primogem"></img>
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Genshin Impact Store</Link>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                  <Link className="btn btn-ghost normal-case text-l" to={"/aboutus"}>About us</Link>
                  <Link className="btn btn-ghost normal-case text-l" to={"/weapons"}>Weapons</Link>
                </ul>
            </div>
          </div>
          <Link to={"/cart"}>
            <CartWidget></CartWidget>
          </Link>
        </div>
    </div>
  )
}

export default NavBar