import Contact from "../components/contact/Contact";

const NumberOfStudents = () => {
  return (
    <div className="mb-0">
      <Contact />
      <div className="container sm:mb-20 mb-16" style={{ position: "relative", overflow: "hidden" }}>
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
