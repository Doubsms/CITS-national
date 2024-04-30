// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //

const chartData = {
  type: 'area',
  height: 95,
  options: {
    chart: {
      id: 'support-chart',
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    yaxis: {
      min: 0,
      max: 24
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: 'Heures',
      },
      marker: {
        title:"Heure",
        show: false
      }
    }
  },
  series: [
    {
      name: 'Heures',
      data: [7, 8, 10, 15, 18, 23, 4]
    }
  ]
};

export default chartData;
