import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <img className="btn btn-ghost normal-case text-xl" src="https://www.gensh.in/fileadmin/Database/items/Currency/wish_Primogem.png" alt="Primogem" />
            <a className="btn btn-ghost normal-case text-xl">Genshin Impact Store</a>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                  <li><a>Characters</a></li>
                  <li><a>Weapons</a></li>
                  <li><a>About Us</a></li>
                </ul>
            </div>
          </div>
            <CartWidget></CartWidget>
        </div>
    </div>
  )
}

export default NavBar