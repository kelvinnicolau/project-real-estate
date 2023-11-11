import { Container, Description, Img, Itens } from "./styles";
import imgCard from '../../assets/banner.jpg';
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card () {
    return (
      <Container>
        <Img>
            <img src={imgCard} alt="Image Apartment" />
        </Img>
        <Description>
            <h4>Apartamento</h4>
            <Itens>
                <span><FaMapMarkerAlt />Centro, Santa Rosa</span>
                <span>R$ 1.400,00 / mês</span>
            </Itens>
            <Link to='/imovel'>Detalhes <FaArrowRight /></Link>
        </Description>
      </Container>
    )
  }
  
  export default Card
  
  