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
          content="Катёл бўйича саволларга жавоблар, True Temp Heating, katyol remont, катёл ремонт, кател ремонт, remont katyol, ремонт катёл, ремонт кател, katyol usta, katyol ustasi, катёл уста, кател устаси, мастер котлов, кател мастер, сервис сентер катёл, service centre gas boiler, fix gas boiler, master gas boiler, katyol, катёл, кател Ремонт котлов, ремонт газовых котлов, профилактика котлов,  Обслуживание котлов в Ташкенте, мастер по котлам, Обслуживание котлов, ремонт двух контурных котлов, сервис котлов, ремонт котлов airfel, ремонт котлов ariston, ремонт котлов akfa, ремонт котлов kiturami, ремонт котлов royal, remont kotlov, master kotlov, сервис котлов,ремонт котлов,обслуживание котлов,ремонт двухконтурных котлов,ремонт газовых котлов в ташкенте,ремонт газовых котлов,ремонт котлов в ташкенте,отел ремонт котловремонт котларемонт котловгазовый котел для отопленияошибка газового котлаошибки газовых котловкотел сервиссервис котловремонт котлов в ташкентеремонт газового котларемонт газовых котловремонт котлов газового котлаошибки двухконтурных газовых котловгазовый котел двухконтурный ошибкигазовые двухконтурные котлы для домамощность газового котламощность газовых котловрасход газового котларасход газовых котловремонт двухконтурного котларемонт двухконтурных котловобслуживание котлаобслуживание котловлучшие двухконтурные котлылучшие двухконтурных котловсервис центр котловкотлы газовые сервиссервис газовых котловочистка котелочистка котловремонт котла navienремонт котлов navienремонт 2х контурных котловремонт автоматики газового котларемонт автоматики газовых котловремонт автоматики котларемонт автоматики котловремонт контурных котловгазовые котлы сервис центрыобслуживание газового котлаобслуживание газовых котловсервис центр газовых котловсервис электрических котловмастер котловкотлы ремонт обслуживаниеремонт отопительного котларемонт отопительных котловремонт теплообменника котларемонт теплообменников котловсервис ремонт котласервис ремонт котловгазовый котел двухконтурный сервистехническое обслуживание котлатехническое обслуживание котловчистка котлачистка котловкотел кухня ремонтремонт газового котла в домеремонт газового котла в частном домеремонт газовых котлов домуремонт двухконтурного котла аристонремонт двухконтурных котлов аристонремонт котла fonditalремонт котла navien deluxeремонт котла аристонремонт котлов в частном домеремонт котлов аристонремонт котлов navien deluxeремонт котлов котел в домремонт котлов домуремонт теплообменника газового котларемонт теплообменников газовых котловремонту газовых котлов частных домахгарантийное обслуживание котловобслуживание электрических котловремонт плат котловремонт платы котларемонт кухонь газовым котломсервисный ремонту котловсервисный центр ремонта котловтехническое обслуживание газового котлатехническое обслуживание газовых котловэлектрические котлы обслуживаниекотлы сервисное обслуживаниекотлы настенные двухконтурные ремонттечет котелтечь водогрейного котларемонт прессостата газового котлакак почистить газовый котелкак почистить двухконтурный газовый котелкак почистить двухконтурный котелкак почистить котелкак почистить настенный котелпочистить настенный газовый котелчистка газового котлачистка газовых котловчистка горелки газового котлачистка горелок котлачистка горелок котлов"
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
