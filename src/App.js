import Card from "./components/UI/Card";
import Header from "./components/Header";
import PassengerLists from "./components/PassengerLists";
import Paginate from "./components/Paginate";


const App = () => {
  return (
    <>
      <Header />
      <Card>
          <PassengerLists />
      </Card>
      <Paginate />
    </>
  )
}

export default App

