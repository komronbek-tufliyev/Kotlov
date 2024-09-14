import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
const DesktopLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}

      <Footer />

      <div className="floating-icons">
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon telegram"><i className="fa-brands fa-telegram"></i></div>
        </a>
        <a href="tel:+998900089001">
          <div className="icon phone"><i className="fa-solid fa-phone"></i></div>
        </a>
      </div>
    </div>
  );
};

export default DesktopLayout;
