import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import CoursePage from "./components/course-page/CoursePage";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SearchPage from "./components/SearchPage";
import "./styles/pages/global-rules.scss";
type Props = {};

function App({}: Props) {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
