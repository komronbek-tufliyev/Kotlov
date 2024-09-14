import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsVenn from "highcharts/modules/venn";

// Initialize the Venn module
HighchartsVenn(Highcharts);

const ManagementStaff = () => {
  const options = {
    chart: {
      type: "venn",
    },
    title: {
      text: "RAHBAR XODIMLAR",
    },
    series: [
      {
        data: [
          {
            sets: ["A"],
            value: 70,
            name: "70ta",
            color: "#007bff",
          },
          {
            sets: ["B"],
            value: 20,
            name: "20ta",
            color: "#b58ded",
          },
          {
            sets: ["C"],
            value: 10,
            name: "10ta",
            color: "#ffa500",
          },

          { sets: ["A", "B"], value: 2, name: " ", color: "#b58ded" },
          { sets: ["A", "C"], value: 2, name: " ", color: "#ffa500" },
          { sets: ["B", "C"], value: 2, name: " ", color: "#ffa500" },
          { sets: ["A", "Dekan", "Prorektor"], value: 1 },
        ],
      },
    ],
    tooltip: {
      pointFormat: "{point.name}",
      formatter: function () {
        return this.point.name;
      },
    },
    plotOptions: {
      venn: {
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            fontSize: "18px",
          },
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ManagementStaff;
