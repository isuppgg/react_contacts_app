import { CardButton, CardContainer } from './Styled/ContactCard';
import { StyledText } from './Styled/Global';

const Contact = ({ el, deleteContact, handleOnEdit, setVisible }) => {
  const { name, number, id } = el;

  const first = name[0].toUpperCase();

  const handleEdit = () => {
    handleOnEdit({
      contactName: name,
      contactNumber: number,
      id,
    });
    setVisible(true);
  };

  return (
    <CardContainer>
      <div>
        <StyledText textColor='#000' size='xxl'>
          {first}
          {name.substring(1)}
        </StyledText>
        <StyledText textColor='rgba(0, 0,0, .5)'>{number}</StyledText>
      </div>
      <div>
        <CardButton onClick={handleEdit}>Editar</CardButton>
        <CardButton data-id={id} onClick={deleteContact} delete>
          Eliminar
        </CardButton>
      </div>
    </CardContainer>
  );
};

export default Contact;
