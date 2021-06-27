import AddButton from './components/AddButton';
// import ModalProjects from './components/ModalProjects';
import Header from './components/Header';
import Container from './components/Container';
import HeaderWrapper from './components/HeaderWrapper';

function App() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <AddButton />
        {/* <ModalProjects /> */}
      </Container>
    </>
  );
}

export default App;
