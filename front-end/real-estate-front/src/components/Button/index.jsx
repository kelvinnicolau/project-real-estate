import PropTypes from 'prop-types';
import { Container } from "./styles";

const Button = ({ props, children }) => {
  return (
    <Container {...props}> 
      {children}
    </Container>
  );
};

Button.propTypes = {
  props: PropTypes.object, // ou o tipo de props que você espera
  children: PropTypes.node.isRequired,
};

export default Button;
