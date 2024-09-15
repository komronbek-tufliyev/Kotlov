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
          href="https://yandex.uz/maps/10335/tashkent/stops/4070373145/?ll=69.289946%2C41.359263&tab=overview&utm_medium=mapframe&utm_source=maps&z=14.8"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Юнусабад — Яндекс&nbsp;Карты
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.289946%2C41.359263&masstransit%5BstopId%5D=4070373145&mode=masstransit&tab=overview&z=14.8"
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
