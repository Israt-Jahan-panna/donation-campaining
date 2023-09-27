import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div className="w-full px-24">
              <nav className="flex justify-between items-center py-6  px-5">

        <Logo></Logo>

<ul className="flex gap-5">
  <li>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Home
    </NavLink>

  </li>

  <li>
    <NavLink
      to="/donations"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Donations
    </NavLink>

    
  </li>
  <li>
    <NavLink
      to="/statistics"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
      }
    >
      Statistics
    </NavLink>

    
  </li>
</ul>

</nav>
        </div>
    );
};

export default NavBar;