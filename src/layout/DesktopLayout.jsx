import { Popover } from "antd";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const DesktopLayout = ({ children }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);
  const content = (
    <div>
      <p className="font-bold">+998(33) 634-99-99</p>
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
          title={<span className="text-xl"> {t("fixed.phone")}</span>}
        >
          <div className="icon phone">
            <i className="fa-solid fa-phone"></i>
          </div>
        </Popover>
        <a
          href="https://t.me/Abdumalik_Abrayev"
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
