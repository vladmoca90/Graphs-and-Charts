 window.onload = function () {
     var chart = new CanvasJS.Chart('browser-chart', {
         title: {
             text: '% Browser usage',
             fontSize: 19,
         },
         axisY: {
             suffix: '%',
         },
         data: [{
             innerRadius: 60,
             type: 'doughnut',
             dataPoints: [{
                     y: 37,
                     indexLabel: 'Chrome'
                 },
                 {
                     y: 35,
                     indexLabel: 'Firefox'
                 },
                 {
                     y: 18,
                     indexLabel: 'Safari'
                 },
                 {
                     y: 5,
                     indexLabel: 'IE'
                 },
                 {
                     y: 2,
                     indexLabel: 'Samsung Internet'
                 },
                 {
                     y: 5,
                     indexLabel: 'Others'
                 },
             ]
         }]
     });

     chart.render();
 }