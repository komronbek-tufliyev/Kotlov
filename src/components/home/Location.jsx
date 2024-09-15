import { Location1, Location2, Location3 } from "../../assets/Location";

const Location = () => {
  return (
    <div className="container sm:py-20 py-10">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold sm:mb-5 mb-3 text-gray-600">
          Bizning manzilimiz
        </h1>
        <div className="text-center mb-4 sm:mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-orange-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
        </div>
      </div>
      <div className="map_wrap my-5 sm:my-0">
        <div className="map_item">
          <Location1 />
          <p className="text-gray-600 font-semibold sm:text-lg text-xl leading-8">
            Oʻzbekiston, Toshkent shah, Amir Temur koʻch, Yunusobod
          </p>
        </div>
        <div className="map_item">
          <Location2 />
          <p className="text-gray-600 font-semibold sm:text-lg text-xl leading-8">
            Universam bozoridan 3 daqiqa
          </p>
        </div>
        <div className="map_item">
          <Location3 />
          <p className="text-gray-600 font-semibold sm:text-lg text-xl leading-8">
            Aeroportdan 8 daqiqa
          </p>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
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

      {/* <iframe
          src="https://yandex.uz/map-widget/v1/org/131222940559/?ll=69.180014%2C41.276609&z=15"
          width="100%"
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        /> */}
    </div>
  );
};

export default Location;
