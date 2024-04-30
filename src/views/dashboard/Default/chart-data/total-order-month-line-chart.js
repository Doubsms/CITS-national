// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //

const chartData = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 150
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: true,
        title:"Jour"
      },
      y: {
        show:true,
        title: 'Nombre de patients'
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'Patients :',
      data: [25, 40, 21, 60, 15, 20, 33]
    }
  ]
};

export default chartData;
