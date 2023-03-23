import { Link } from "react-router-dom";
import { Logo, MenuItems, Wrapper } from "./style";

const SideBar = () => {
  return (
    <Wrapper className="neo">
      <Logo />
      <MenuItems>
        <Link className="neo" to="/dashboard">
          Dashboard
        </Link>
        <Link className="neo" to="/account">
          Account
        </Link>
        <Link className="neo" to="/market">
          Market
        </Link>
        <Link className="neo" to="/portfolio">
          Portfolio
        </Link>
        <Link className="neo" to="/trading">
          Trading
        </Link>
      </MenuItems>
    </Wrapper>
  );
};

export default SideBar;
