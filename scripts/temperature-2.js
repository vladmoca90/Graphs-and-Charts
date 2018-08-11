window.onload = function () {
    var chart = new CanvasJS.Chart('temperature2', {
        title: {
            fontSize: 18,
            margin: 20,
            text: 'UK Temperature (1 Jan - 31 Dec) 2017',
        },
        axisY: {
            includeZero: true,
            interval: 3,
            valueFormatString: '#0.## °C'
        },
        axisX: {
            interval: 1,
            valueFormatString: 'DD-MMM'
        },
        data: [{
            type: 'rangeBar',
            yValueFormatString: '#0.## °C',
            dataPoints: [
                {
                    x: new Date(2017, 00, 1),
                    y: [2, 10]
                },
                {
                    x: new Date(2017, 01, 1),
                    y: [1, 8]
                },
                {
                    x: new Date(2017, 02, 1),
                    y: [4, 11]
                },
                {
                    x: new Date(2017, 03, 1),
                    y: [7, 15]
                },
                {
                    x: new Date(2017, 04, 1),
                    y: [10, 17]
                },
                {
                    x: new Date(2017, 05, 1),
                    y: [14, 21]
                },
                {
                    x: new Date(2017, 06, 1),
                    y: [14, 24]
                },
                {
                    x: new Date(2017, 07, 1),
                    y: [18, 27]
                },
                {
                    x: new Date(2017, 08, 1),
                    y: [10, 20]
                },
                {
                    x: new Date(2017, 09, 1),
                    y: [9, 16]
                },
                {
                    x: new Date(2017, 10, 1),
                    y: [9, 16]
                },
                {
                    x: new Date(2017, 11, 1),
                    y: [2, 12]
                }
            ]
        }]
    });

    chart.render();
}