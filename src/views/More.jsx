import i1 from "../assets/q1.jpg";
import i2 from "../assets/q2.jpg";
import i3 from "../assets/q3.jpg";
import i4 from "../assets/q4.jpg";
import i5 from "../assets/q5.jpg";
import i6 from "../assets/q6.jpg";
import i7 from "../assets/q7.jpg";
import i8 from "../assets/q8.jpg";
import i9 from "../assets/q9.jpg";
import i10 from "../assets/q10.jpg";
import i11 from "../assets/q11.jpg";
import i12 from "../assets/q12.jpg";
import i13 from "../assets/q13.jpg";
import i14 from "../assets/q14.jpg";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const More = () => {
  const modal = useRef(null);
  const modalImg = useRef(null);
  const captionText = useRef(null);
  const { t, i18n } = useTranslation();
  function onOpen(e) {
    modal.current.style.display = "flex";
    modalImg.current.src = e.target.src;
    captionText.current.innerHTML = e.target.alt;
  }
  function closeFunc() {
    modal.current.style.display = "none";
  }

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);
  return (
    <div className="container">
      <Helmet>
        <title>Катёл бўйича намуналар</title>
        <meta
          name="description"
          content="Katyol va gaz qozonlari uchun professional ta'mirlash xizmati: katyol remont, katyol usta, gaz qozonlarini ta'mirlash, xizmat ko'rsatish markazi. Ustalarimiz katyolingizni tez va sifatli ta'mirlaydi. Газовые котлы: ремонт и обслуживание в вашем регионе. Katyol bo'yicha savollarga javoblar"
        />
        <meta
          name="keywords"
          content="True Temp Heating, Сервис сентер катёл, katyol remont, катёл ремонт, кател ремонт, remont katyol, ремонт катёл, ремонт кател, katyol usta, katyol ustasi, катёл уста, кател устаси, мастер котлов, кател мастер, сервис сентер катёл, service centre gas boiler, fix gas boiler, master gas boiler, katyol, катёл, кател Ремонт котлов, ремонт газовых котлов, профилактика котлов,  Обслуживание котлов в Ташкенте, мастер по котлам, Обслуживание котлов, ремонт двух контурных котлов, сервис котлов, ремонт котлов airfel, ремонт котлов ariston, ремонт котлов akfa, ремонт котлов kiturami, ремонт котлов royal, remont kotlov, master kotlov, сервис котлов,ремонт котлов,обслуживание котлов,ремонт двухконтурных котлов,ремонт газовых котлов в ташкенте,ремонт газовых котлов,ремонт котлов в ташкенте,отел ремонт котловремонт"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16753534461"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16753534461');
          `}
        </script>
      </Helmet>
      <div className="min-h-[90dvh]">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mt-12 sm:mb-5 mb-3 text-gray-600">
            {t("examples.title")}
          </h1>
          <div className="text-center mb-6 sm:mb-12">
            <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
          </div>
        </div>

        <div className="design_wrapper">
          <div className="d1">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i1}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d2">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i2}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d3">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i3}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d4">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i4}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d5">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i5}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d6">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i6}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d7">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i7}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d8">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i14}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d9">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i9}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d10">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i10}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d11">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i11}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d12">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i12}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d13">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i13}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d14">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i8}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          {/* <div className="d15">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i15}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d16">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i16}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d17 sm:block hidden">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i17}
              id="myImg"
              alt={t("examples.text")}
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default More;
