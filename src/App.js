import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default App;
