import "./styles/global.css";
import Header from "./pages/headerandfooter/Header";
import Footer from "./pages/headerandfooter/Footer";
import ContactButton from "./components/contactButton/ContactButton";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ContactButton />
      <Footer />
    </>
  );
}

export default App;
