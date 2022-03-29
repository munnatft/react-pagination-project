import Card from "./components/UI/Card";
import Header from "./components/Header";
import Spinner from "./components/UI/Spinner";
import PassengerLists from "./components/PassengerLists";


const App = () => {
  return (
    <>
      <Header />
      <Card>
          <PassengerLists />
      </Card>
    </>
  )
}

export default App

