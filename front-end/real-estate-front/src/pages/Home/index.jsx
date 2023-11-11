import Card from "../../components/Card";
import { Header, Wrapper } from "./styles";
import Banner from '../../components/Banner';

function Home () {

  let Cards = [] ;
  for(let i=0; i<4; i++){
    Cards.push(<Card key={i}/>)
  }

    return (
      <>
        <Banner/>
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
  