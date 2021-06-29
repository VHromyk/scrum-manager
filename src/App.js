import HeaderWrapper from './components/HeaderWrapper';
import Header from './components/Header';
import Container from './components/Container';
import Icons from './components/Icons';
import Sprint from './components/Sprint';
// eslint-disable-next-line
import ModalProjects from './components/ModalProjects';

function App() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <Icons />
        <Sprint />
      </Container>

      {/* <ModalProjects /> */}
    </>
  );
}

export default App;
