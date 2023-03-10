import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import LatestNewsPage from "./components/pages/LatestNewsPage/LatestNewsPage";
import PopularNewsPage from "./components/pages/PopularNewsPage/PopularNewsPage";
import HomePage from "./components/pages/HomePage/HomePage";

const App = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/latest-news" element={<LatestNewsPage />} />
          <Route path="/popular-news" element={<PopularNewsPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
