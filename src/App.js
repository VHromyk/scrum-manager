import HeaderWrapper from './Components/HeaderWrapper';
import Header from './Components/Header';
import Container from './Components/Container';
import Icons from './Components/Icons';
import SprintCard from './Components/SprintCard';
import MainPage from './Components/MainPage';
import TaskModal from './Components/TaskModal';

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
