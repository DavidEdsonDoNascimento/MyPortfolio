import { Container } from './styles';

export const Navbar = () => {

  return (
    <Container>
      <div className='wrapper'>
        <button onClick={() => window.scrollTo(0, 0)}>
          <a href="#">
            <span>Escultor</span><br/>
            <span>Digital</span>
          </a>
        </button>
        <div>
          {/* <Burguer open={open} setOpen={setOpen} />
          <Menu open={open}/> */}
        </div>
        <div className='menu'>
          <a href='#'
            onClick={() => window.scrollTo(0, 0)}>INÍCIO</a>
          <a href='#sobre'>SOBRE</a>
          <a href='#skills'>HABILIDADES</a>
          <a href='#projetos'>PROJETOS</a>
          <a href='#contato'>CONTATO</a>
        </div>
      </div>
    </Container>
  );
};