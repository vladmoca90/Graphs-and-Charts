$(function () {

    window.onload = function () {

        var chart = new CanvasJS.Chart("dailyCases", {
            animationEnabled: true,
            title: {
                fontSize: 28,
                fontWeight: 'normal',
                margin: 0,
                text: "2020 Worldwide coronavirus daily cases",
            },
            subtitles: [{
                text: "(Linear scale)",
                fontSize: 18,
                fontWeight: 'lighter',
            }],
            axisX: {
                labelFontSize: 14,
                lineColor: '#ccc',
                gridColor: '#ccc',
                tickColor: '#ccc',
                tickLength: 5,
                valueFormatString: "DD MMM"
            },
            axisY: {
                labelFontSize: 14,
                lineColor: '#ccc',
                gridColor: '#ccc',
                tickColor: '#ccc',
                tickLength: 5,
                title: "Total coronavirus cases",
                includeZero: false,
            },
            data: [{
                type: "line",
                xValueFormatString: "DD MMM",
                color: "#7bd6ed",
                dataPoints: [
                     {
                        x: new Date(2020, 0, 1),
                        y: 0
                    },
                    {
                        x: new Date(2020, 1, 22),
                        y: 580
                    },
                     {
                        x: new Date(2020, 1, 25),
                        y: 6058
                    },
                    {
                        x: new Date(2020, 2, 1),
                        y: 14530
                    },
                    {
                        x: new Date(2020, 2, 7),
                        y: 28266
                    },
                     {
                        x: new Date(2020, 2, 11),
                        y: 45134
                    },
                    {
                        x: new Date(2020, 2, 21),
                        y: 77675
                    },
                     {
                        x: new Date(2020, 3, 7),
                        y: 106099
                    },
                     {
                        x: new Date(2020, 3, 16),
                        y: 182414
                    },
                     {
                        x: new Date(2020, 3, 24),
                        y: 422574
                    },
                     {
                        x: new Date(2020, 3, 28),
                        y: 663127
                    },
                     {
                        x: new Date(2020, 3, 31),
                        y: 858355
                    },
                ]
            }]
        });

        chart.render();
    }
});