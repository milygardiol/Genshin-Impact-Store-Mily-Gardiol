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
                  <li tabIndex={0}>
                    <Link className="justify-between btn btn-ghost normal-case text-l" to={"/characters"}>Characters<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg></Link>
                    <ul className="p-2">
                      <li><Link to={"/characters/hydro"}>Hydro</Link></li>
                      <li><Link to={"/characters/pyro"}>Pyro</Link></li>
                      <li><Link to={"/characters/cryo"}>Cryo</Link></li>
                      <li><Link to={"/characters/electro"}>Electro</Link></li>
                      <li><Link to={"/characters/geo"}>Geo</Link></li>
                    </ul>
                  </li>
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