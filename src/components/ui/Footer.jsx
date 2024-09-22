import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);

  return (
    <footer className="relative bg-gray-300 pt-14 pb-6">
      {/* <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden sm:-mt-20 -mt-0"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 px-4">
            <h4 className="text-3xl font-semibold"> {t("footer.title")}</h4>
            <h5 className="text-base mt-0 mb-2 text-gray-700">
              {t("footer.subtitle")}
            </h5>
            {/* <div className="my-9 flex gap-3">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div> */}
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  {t("footer.links")}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/more"
                      >
                        {t("footer.link1")}
                      </Link>
                    </li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to={"/question"}
                    >
                      {t("footer.link2")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/contact"
                    >
                      {t("footer.link3")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-5/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  {t("footer.contacts")}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold pb-2 text-sm flex items-center gap-1">
                      <i className="fa-solid fa-phone"></i>
                      +998(33) 634-99-99
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold pb-2 text-sm flex items-center gap-1">
                      <i className="fa-solid fa-envelope"></i>
                      abrayev@gmail.com
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-700 hover:text-gray-900 font-semibold pb-2 text-sm flex items-center gap-1">
                      <i className="fa-solid fa-location-dot"></i>
                      {t("footer.location")}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              <p
                className="text-gray-600 hover:text-gray-900"
              >
                {t("footer.reserved")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
