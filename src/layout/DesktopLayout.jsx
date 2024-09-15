import { Popover } from "antd";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
const DesktopLayout = ({ children }) => {
  const content = (
    <div>
      <p className="">+998976005050</p>
    </div>
  );
  return (
    <div>
      <Navbar />
      {children}

      <Footer />

      <div className="floating-icons">
        <Popover
          placement="leftTop"
          content={content}
          title={<span className="text-xl">Telefon raqam</span>}
        >
          <div className="icon phone">
            <i className="fa-solid fa-phone"></i>
          </div>
        </Popover>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon telegram">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DesktopLayout;
