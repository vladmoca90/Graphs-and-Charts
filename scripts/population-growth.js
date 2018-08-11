window.onload = function () {
  var chart = new CanvasJS.Chart('pop-growth', {
    title: {
      fontFamily: 'Verdana',
      fontSize: 18,
      padding: 20,
      text: 'Population growth in Nigeria by year (1960 - 2010)',
    },
    toolTip: {
      enabled: false //enable here
    },
    axisX: {
      intervalType: 'year',
      valueFormatString: 'YYYY',
    },
    axisY: {
      gridColor: '#ccc',
    },
    data: [{
      type: 'line',
      color: '#d50000',
      dataPoints: [{
          x: 1960,
          y: 42.9
        },
        {
          x: 1965,
          y: 50.5
        },
        {
          x: 1970,
          y: 58.8
        },
        {
          x: 1975,
          y: 66.5
        },
        {
          x: 1980,
          y: 76.7
        },
        {
          x: 1985,
          y: 82.4
        },
        {
          x: 1990,
          y: 89.9
        },
        {
          x: 1995,
          y: 101.9
        },
        {
          x: 2000,
          y: 116.7
        },
        {
          x: 2005,
          y: 132.5
        },
        {
          x: 2010,
          y: 155.9
        }
      ]
    }]
  });

  chart.render();
}