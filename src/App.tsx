import Container from "./components/Container";
import GridContainer from "./components/GridContainer";

const App = () => {
  return (
    <Container>
      <GridContainer>
        <div className="col-span-6 flex justify-center items-center h-screen">
          <h1 className="text-5xl">ABCDEFG</h1>
        </div>

        <div className="col-span-6 flex justify-center items-center">Test</div>
      </GridContainer>
    </Container>
  );
};

export default App;
