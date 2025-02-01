import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LAndingPage from "./screens/LandingPage/LAndingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/Mynotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" Component={LAndingPage} />
          <Route path="/mynotes" Component={MyNotes} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
