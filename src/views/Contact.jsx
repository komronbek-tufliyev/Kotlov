import { Helmet } from "react-helmet";
import Contact from "../components/contact/Contact";

const NumberOfStudents = () => {
  return (
    <div className="mb-0 container">
      <Helmet>
        <title>Сервис сентер катёл</title>
        <meta
          name="description"
          content="Katyol va gaz qozonlari uchun professional ta'mirlash xizmati: katyol remont, katyol usta, gaz qozonlarini ta'mirlash, xizmat ko'rsatish markazi. Ustalarimiz katyolingizni tez va sifatli ta'mirlaydi. Газовые котлы: ремонт и обслуживание в вашем регионе."
        />
        <meta
          name="keywords"
          content="True Temp Heating катёл ремонт кател ремонт катёл уста кател устаси сентер катёл Ремонт газовых котлов профилактика котлов в Ташкенте мастер по котлам Обслуживание котлов ремонт контурных ремонт котлов ariston сервис обслуживание двухконтурных  газовых котлов в ташкенте
"
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
      <Contact />
      <div
        className="container sm:mb-20 mb-16"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Ташкент
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/?ll=69.208347%2C41.248238&mode=search&sll=69.208406%2C41.248180&text=41.248180%2C69.208406&utm_medium=mapframe&utm_source=maps&z=16.56"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Улица Чаштепа, 74А — Яндекс&nbsp;Карты
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.208347%2C41.248238&mode=search&sll=69.208406%2C41.248180&text=41.248180%2C69.208406&z=16.56"
          width="100%"
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
};

export default NumberOfStudents;
