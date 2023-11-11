import { Container, Copy, Item } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/logo.jpg";

function Footer () {
    return (
     <>
         <Container>
        <Item>
            <img src={LogoImg} alt="" />
            <p>Lorem Ipsum is dummy text</p>
            <nav>
                <li><span><FaFacebook size={32}/></span></li>
                <li><span><FaInstagram size={32}/></span></li>
                <li><span><FaWhatsapp size={32}/></span></li>
            </nav>
        </Item>
        <Item>
            <h3>Our Services</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Alugar</span></li>
                <li><span>Vender</span></li>
            </ul>
        </Item>
        <Item>
            <h3>Our Services</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Alugar</span></li>
                <li><span>Vender</span></li>
            </ul>
        </Item>
        <Item>
            <h3>Our Services</h3>
            <ul>
                <li><span>Comprar</span></li>
                <li><span>Alugar</span></li>
                <li><span>Vender</span></li>
            </ul>
        </Item>
      </Container>
      <Copy>
        <p>@Copyright 2023 - KLN</p>
        <ul>
            <li><span>Termos de Uso</span></li>
            <li><span>Política de Privacidade</span></li>
            <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
     </>
    )
  }

  export default Footer
  