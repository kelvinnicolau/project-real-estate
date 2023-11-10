import { Container, Logo, Menu } from "./styles";
import LogoImg from "../../assets/logo.jpg";

function Header () {
    return (
      <Container>
        <Logo>
            <img src={LogoImg} alt="" />
        </Logo>
        <Menu>
            <ul>
                <li><span>Cadastro/Login</span></li>
            </ul>
        </Menu>
      </Container>
    )
  }
  
  export default Header
  