import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar.jpg";
import { useEffect } from "react";
const Testimonial = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-bold sm:mb-5 mb-3 text-gray-600">
                {t("clients.title")}
              </h1>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client1")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text1")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client2")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text2")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client3")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text3")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client4")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text4")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client5")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text5")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        {t("clients.client6")}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {t("clients.text6")}
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div> */}
    </>
  );
};

export default Testimonial;
