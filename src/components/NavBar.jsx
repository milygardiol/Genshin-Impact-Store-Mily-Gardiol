import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Genshin Impact Store</a>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                  <li><a>Characters</a></li>
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