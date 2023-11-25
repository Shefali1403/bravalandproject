import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/response.css";
const page = () => {
  return (
    <>
      <div className="container">
        <TopHeader />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
};
export default page;
