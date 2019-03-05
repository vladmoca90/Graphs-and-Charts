  $(function () {

      window.onload = function () {
          CanvasJS.addColorSet('medalsColors', [
              '#FFCA28',
              '#BDBDBD',
              '#CC9966',
          ]);
          var chart = new CanvasJS.Chart('medalsChart', {
              colorSet: 'medalsColors',
              title: {
                  fontFamily: 'Tahoma',
                  fontSize: 21,
                  padding: 20,
                  text: '2016 Summer Olympics medal count'
              },
              axisY: {
                  gridColor: '#ddd',
              },
              data: [{
                      type: 'bar',
                      showInLegend: true,
                      legendText: 'Gold',
                      dataPoints: [{
                              y: 17,
                              label: 'Germany'
                          },
                          {
                              y: 19,
                              label: 'Russia'
                          },
                          {
                              y: 26,
                              label: 'China'
                          },
                          {
                              y: 27,
                              label: 'Great Britain'
                          },
                          {
                              y: 46,
                              label: 'USA'
                          }
                      ]
                  },
                  {
                      type: 'bar',
                      showInLegend: true,
                      legendText: 'Silver',
                      dataPoints: [{
                              y: 10,
                              label: 'Germany'
                          },
                          {
                              y: 17,
                              label: 'Russia'
                          },
                          {
                              y: 18,
                              label: 'China'
                          },
                          {
                              y: 23,
                              label: 'Great Britain'
                          },
                          {
                              y: 37,
                              label: 'USA'
                          }
                      ]
                  },
                  {
                      type: 'bar',
                      showInLegend: true,
                      legendText: 'Bronze',
                      dataPoints: [{
                              y: 15,
                              label: 'Germany'
                          },
                          {
                              y: 19,
                              label: 'Russia'
                          },
                          {
                              y: 26,
                              label: 'China'
                          },
                          {
                              y: 17,
                              label: 'Great Britain'
                          },
                          {
                              y: 38,
                              label: 'USA'
                          }
                      ]
                  }
              ]
          });

          chart.render();
      }
  });