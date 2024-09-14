import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AcademicTeacher = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: "O'QITUVCHILAR ILMIY UNVONI BO'YICHA",
    },
    xAxis: {
      categories: [
        'Professor',
        'Docent',
        'Katta o‘qituvchilar',
        'PhD o‘qituvchilar',
        'Unvonsiz o‘qituvchilar',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Son',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Ayol',
        data: [75, 65, 70, 85, 60], // Example data for women in each category
        color: '#00A651', // Green color
      },
      {
        name: 'Erkak',
        data: [65, 85, 60, 75, 90], // Example data for men in each category
        color: '#F8BC35', // Yellow/Orange color
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AcademicTeacher;
