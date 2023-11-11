import TopBanner from "../../components/TopBanner"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles"
import imgCard from '../../assets/banner.jpg';
import User from '../../assets/homem-usuario.png';


function Imobi() {
  return (
    <>  
        <TopBanner/>
        <Container>
            <Left>
                <Thumb>
                    <img src={imgCard} alt="Imagem Ap" />
                </Thumb>
                <Description>
                    <h2>Apartamento / Alugar</h2>
                    <p>Lorem ipsum dasudasjdkasj  jasduasudh jak jdasjdasudu adjsaujd</p>
                </Description>
            </Left>
            <Right>
                <Profile>
                    <ProfileImg>
                        <img src={User} alt="Imagem Usuario" />
                    </ProfileImg>
                    <ProfileDescription>
                        <h3>Jhon Due</h3>
                        <p>Descricao do usuario</p>
                    </ProfileDescription>
                </Profile>
                <ProfileContact>
                    <h3>Informações para contato:</h3>
                    <p>(11) 1111-1111</p>
                    <p>teste@tes.com</p>
                </ProfileContact>
                <ProfileFormContact>
                    <h3>Informações para contato:</h3>
                    <form action="">
                        <Input type="text" placeholder="Nome:"/>
                        <Input type="text" placeholder="E-mail:"/>
                        <TextArea cols={30} rows={10} placeholder="Mensagem:"/>
                        <Button>Enviar Mensagem</Button>
                    </form>
                </ProfileFormContact>
            </Right>
        </Container>
    </>
  )
}

export default Imobi
