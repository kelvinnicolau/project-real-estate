import { Container, ContainerForm, Form, Label } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"

function Cadastro() {
  return (
    <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para acessar a plataforma!</p>
        <ContainerForm>
            <Form action="">
                <Label>Nome</Label>
                <Input type='text' placeholder='Nome' />
                <Label>E-mail</Label>
                <Input type='text' placeholder='E-mail' />
                <Label>Senha</Label>
                <Input type='text' placeholder='Senha' />
                <Button>Fazer Cadastro</Button>
            </Form>
        </ContainerForm>
    </Container>
  )
}

export default Cadastro;
