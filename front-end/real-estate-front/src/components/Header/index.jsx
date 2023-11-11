import { Container, Logo, Menu } from "./styles";
import LogoImg from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header () {
    return (
      <Container>
        <Logo>
            <Link to='/'><img src={LogoImg} alt="" /></Link>
        </Logo>
        <Menu>
            <ul>
                <li><Link to='/login'><span>Cadastro/Login</span></Link></li>
            </ul>
        </Menu>
      </Container>
    )
  }
  
  export default Header
  