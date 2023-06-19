import { CustomButton } from './components/CustomButton';

const TaDaButton = ({ text, onClick, ...rest }) => {
  return (
    <CustomButton onClick={onClick} {...rest}>
      {text}
    </CustomButton>
  );
};

export default TaDaButton;
