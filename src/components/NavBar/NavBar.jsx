import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';


const NavBar = () => {
  let navItems = <>
    <li><NavLink className={({isActive}) =>
          isActive
            ? "bg-[#FFCC6C] font-bold underline rounded-full"
            : "font-medium"
        } to="/">Home</NavLink></li>
    <li><NavLink className={({isActive}) =>
          isActive
            ? "bg-[#FFCC6C] font-bold underline rounded-full"
            : "font-medium"
        } to="allArtifacts">All Artifacts</NavLink></li>
    <li><NavLink className={({isActive}) =>
          isActive
            ? "bg-[#FFCC6C] font-bold underline rounded-full"
            : "font-medium"
        } to="addArtifacts">Add Artifacts</NavLink></li>
  </>;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pl-0 pr-1.5 btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl w-fit"><img className="w-24 md:w-32" src={logo} alt="HistoriX" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end sm:gap-4">
          <div className="flex gap-1">
            <NavLink to="/login" className="btn btn-sm md:btn-md btn-success text-bold">Login</NavLink>
            <Link className="btn btn-sm md:btn-md btn-error text-bold">Logout</Link>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 md:w-12 rounded-full">
                <img alt=""
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="myArticles">My Articles</NavLink></li>
              <li><NavLink to="likedArticles">Liked Artifacts</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
