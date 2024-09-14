import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "Dotsent", y: 333, z: 150, color: "#ff6b6b" },
  { name: "Katta o‘qituvchi", y: 250, z: 150, color: "#ffe66d" },
  { name: "Professor", y: 250, z: 150, color: "#4dabf5" },
  { name: "Stajer-o‘qituvchilar", y: 160, z: 150, color: "#38c172" },
  { name: "PhD o‘qituvchilar", y: 90, z: 150, color: "#9b59b6" },
];
// Variable-pie modulini Highcharts-ga yuklaymiz
VariablePie(Highcharts);
const TeacherPosition = () => {
  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: "O'QITUVCHILAR LAVOZIMI BO'YICHA",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Value: <b>{point.y}</b><br/>" +
        "Percentage: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "40%",
        zMin: 0,
        name: "teachers",
        data: data,
      },
    ],
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: true,
          format: "{y}",
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12, // Ikonkalarni moslashtirish
    },
  };

  return (
    <div className="flex items-center justify-between">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="info flex flex-col items-center justify-center gap-3">
        {data.map((item) => 
          <div key={item.name} className="info__row flex items-center">
          <span style={{ backgroundColor: item.color }} className="block rounded-full w-[0.75rem] h-[0.75rem]"></span>
          <span className="min-w-[12rem] text-[1rem] font-[400] pl-[0.6rem] pr-[1rem]">
            {item.name}
          </span>
          <span className="block rounded-[8px] border-[1px] border-solid border-[#FEEBD6] bg-[#FFF6EB] py-1 px-1.5  text-[#F98600]">
            {item.y}
          </span>
        </div>
        )}
      </div>
    </div>
  );
};

export default TeacherPosition;
