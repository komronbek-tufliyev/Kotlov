import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const MaleAndFemale = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: "O'QITUVCHILAR JINSI BO'YICHA",
    },
    xAxis: {
      categories: ["O'qituvchilar jinsi bo'yicha"],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Soni',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' o‘qituvchi',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false,
        },
        pointWidth: 15, 
      },
    },
    series: [
      {
        name: 'Ayol',
        data: [278],
        color: '#ffa500',
      },
      {
        name: 'Erkak',
        data: [278],
        color: '#38c172',
      },
      {
        name: 'Jami',
        data: [278],
        color: '#4dabf5',
      },
    ],
  };

  const options2 = {
    chart: {
      type: 'bar',
    },
    title: {
      text: "O'QITUVCHILAR FUQOROLIGI BO'YICHA",
    },
    xAxis: {
      categories: ["O'zbekiston fuqarosi", 'Xorij fuqarosi'],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Soni',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' o‘qituvchi',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
        pointWidth: 15, 
      },
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "O'zbekiston fuqarosi",
        data: [50],
        color: '#9b59b6',
      },
      {
        name: 'Xorij fuqarosi',
        data: [200],
        color: '#ff6b6b',
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={Highcharts} options={options2} />
    </div>
  )
}

export default MaleAndFemale