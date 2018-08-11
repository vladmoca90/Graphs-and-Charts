window.onload = function () {
    CanvasJS.addColorSet('monthColor', [
        '#1A237E',
        '#3949AB',
        '#00BCD4',
        '#4CAF50',
        '#AFB42B',
        '#FFEB3B',
        '#FF8F00',
        '#F4511E',
        '#E57373',
        '#9C27B0',
        '#9575CD',
        '#3F51B5',
    ]);

    var chart = new CanvasJS.Chart('temperature1', {
        animationEnabled: true,
        title: {
            fontSize: 18,
            margin: 25,
            text: 'Climate Data for Astana, Kazakhstan (Average High and Low)',
        },
        axisY: {
            gridColor: '#ddd',
            includeZero: false,
            interval: 7,
            title: 'Temperature (C)'
        },
        axisX: {
            interval: 1,
            intervalType: 'month',
            title: 'Month',
            valueFormatString: 'MMM',
        },
        data: [{
            type: 'rangeColumn',
            colorSet: 'colorMonth',
            fillOpacity: .85,
            dataPoints: [{
                    x: new Date(2012, 00, 01),
                    y: [-18.3, -9.9]
                }, // y: [Low ,High]
                {
                    x: new Date(2012, 01, 01),
                    y: [-18.5, -9.2]
                },
                {
                    x: new Date(2012, 02, 01),
                    y: [-11.5, -2.5]
                },
                {
                    x: new Date(2012, 03, 01),
                    y: [0.2, 10.9]
                },
                {
                    x: new Date(2012, 04, 01),
                    y: [7.9, 20.2]
                },
                {
                    x: new Date(2012, 05, 01),
                    y: [13.2, 25.8]
                },
                {
                    x: new Date(2012, 06, 01),
                    y: [15, 26.8]
                },
                {
                    x: new Date(2012, 07, 01),
                    y: [12.8, 25.2]
                },
                {
                    x: new Date(2012, 08, 01),
                    y: [6.6, 18.8]
                },
                {
                    x: new Date(2012, 09, 01),
                    y: [0.2, 10]
                },
                {
                    x: new Date(2012, 10, 01),
                    y: [-8.9, -1.4]
                },
                {
                    x: new Date(2012, 11, 01),
                    y: [-16.1, -8]
                }
            ]
        }]
    });
    chart.render();
}