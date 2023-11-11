import Card from "../../components/Card";
import { Header, Wrapper } from "./styles";

function Home () {

  let Cards = [] ;
  for(let i=0; i<4; i++){
    Cards.push(<Card key={i}/>)
  }

    return (
      <>
        <Header>
            <h2>Fin the property</h2>
        </Header>
        <Wrapper>
          {Cards}
        </Wrapper>
      </>
    )
  }
  
  export default Home
  