import HeaderWrapper from './components/HeaderWrapper';
import Header from './components/Header';
import Container from './components/Container';
import Icons from './components/Icons';
import SprintCard from './components/SprintCard';
import MainPage from './components/MainPage';
import TaskModal from './components/TaskModal';

function App() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      {/* <Container>
        <Icons />
      </Container>
      </Container> */}

      <Container>
        <MainPage />
      </Container>
    </>
  );
}

export default App;
