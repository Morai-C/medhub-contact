import Header from "./components/Header"
import ContactComp from "./components/ContactComp"
import "./styles/style.scss"
const App = () => {
  return (
    <>
      <Header />
      <div className="contact-me">
        <ContactComp />
      </div>
    </>
  )
}

export default App;
