import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
function Advantage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "uzb");
  }, [i18n]);
  return (
    <>
      <Helmet>
        <title>Катёл бўйича саволларга жавоблар</title>

        <meta
          name="description"
          content="Katyol va gaz qozonlari uchun professional ta'mirlash xizmati: katyol remont, katyol usta, gaz qozonlarini ta'mirlash, xizmat ko'rsatish markazi. Ustalarimiz katyolingizni tez va sifatli ta'mirlaydi. Газовые котлы: ремонт и обслуживание в вашем регионе. Katyol bo'yicha savollarga javoblar"
        />
        <meta
          name="keywords"
          content="True Temp Heating катёл ремонт кател ремонт катёл уста кател устаси сентер катёл Ремонт газовых котлов профилактика котлов в Ташкенте мастер по котлам Обслуживание котлов ремонт контурных ремонт котлов ariston сервис обслуживание двухконтурных  газовых котлов в ташкенте"
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
      <div className="advantage mt-10">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mt-12 sm:mb-5 mb-3 text-gray-600">
            {t("answers.title")}
          </h1>
          <div className="text-center mb-6 sm:mb-12">
            <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-pink-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-pink-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-pink-500 ml-1"></span>
          </div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">
              {t("answers.question1")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text1")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion-header">
              {t("answers.question2")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text2")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">
              {" "}
              {t("answers.question3")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text3")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion-header">
              {t("answers.question4")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text4")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion-header">
              {t("answers.question5")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text5")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion-header">
              {t("answers.question6")}
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
              {t("answers.text6")}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Advantage;
