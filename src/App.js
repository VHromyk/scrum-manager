import HeaderWrapper from './Components/HeaderWrapper';
import Header from './Components/Header';
import Container from './Components/Container';
import Icons from './Components/Icons';
import ModalProjects from './Components/ModalProjects';

function App() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <Icons />
      </Container>

      {/* <ModalProjects /> */}
    </>
  );
}

export default App;
