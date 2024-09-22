import location from "../../assets/icons8-location-50.png";
import phone from "../../assets/icons8-phone-50.png";
import mail from "../../assets/icons8-mail-50.png";
import clock from "../../assets/icons8-clock-50.png";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Contact = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mt-12 sm:mb-5 mb-3 text-gray-600">
          {t("contact.title")}
          </h1>
          <div className="text-center mb-6 sm:mb-12">
            <span className="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-orange-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
          </div>
        </div>
        <div className="contact_wrap">
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={location} alt="" />
            </div>
            <div className="contact_content">
              <h3>{t("contact.bold1")}</h3>
              <p>
              {t("contact.text1")}
              </p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={phone} alt="" />
            </div>
            <div className="contact_content">
              <h3>{t("contact.bold2")}</h3>
              <p>+998(33) 634-99-99</p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={mail} alt="" />
            </div>
            <div className="contact_content">
              <h3>{t("contact.bold3")}</h3>
              <p>abrayev@gmail.com</p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={clock} alt="" />
            </div>
            <div className="contact_content">
              <h3>{t("contact.bold4")}</h3>
              <p>{t("contact.text4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
