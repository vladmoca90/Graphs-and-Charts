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
                dataPoints: [{
                        x: new Date(2017, 0, 1),
                        y: 610
                    },
                    {
                        x: new Date(2017, 0, 2),
                        y: 680
                    },
                    {
                        x: new Date(2017, 0, 3),
                        y: 690
                    },
                    {
                        x: new Date(2017, 0, 4),
                        y: 700
                    },
                    {
                        x: new Date(2017, 0, 5),
                        y: 710
                    },
                    {
                        x: new Date(2017, 0, 6),
                        y: 658
                    },
                    {
                        x: new Date(2017, 0, 7),
                        y: 734
                    },
                    {
                        x: new Date(2017, 0, 8),
                        y: 963
                    },
                    {
                        x: new Date(2017, 0, 9),
                        y: 847
                    },
                    {
                        x: new Date(2017, 0, 10),
                        y: 853
                    },
                    {
                        x: new Date(2017, 0, 11),
                        y: 869
                    },
                    {
                        x: new Date(2017, 0, 12),
                        y: 943
                    },
                    {
                        x: new Date(2017, 0, 13),
                        y: 970
                    },
                    {
                        x: new Date(2017, 0, 14),
                        y: 869
                    },
                    {
                        x: new Date(2017, 0, 15),
                        y: 890
                    },
                    {
                        x: new Date(2017, 0, 16),
                        y: 930
                    },
                    {
                        x: new Date(2017, 0, 17),
                        y: 1850
                    },
                    {
                        x: new Date(2017, 0, 18),
                        y: 1905
                    },
                    {
                        x: new Date(2017, 0, 19),
                        y: 1980
                    },
                    {
                        x: new Date(2017, 0, 20),
                        y: 1858
                    },
                    {
                        x: new Date(2017, 0, 21),
                        y: 1034
                    },
                    {
                        x: new Date(2017, 0, 22),
                        y: 963
                    },
                    {
                        x: new Date(2017, 0, 23),
                        y: 847
                    },
                    {
                        x: new Date(2017, 0, 24),
                        y: 853
                    },
                    {
                        x: new Date(2017, 0, 25),
                        y: 869
                    },
                    {
                        x: new Date(2017, 0, 26),
                        y: 943
                    },
                    {
                        x: new Date(2017, 0, 27),
                        y: 970
                    },
                    {
                        x: new Date(2017, 0, 28),
                        y: 869
                    },
                    {
                        x: new Date(2017, 0, 29),
                        y: 890
                    },
                    {
                        x: new Date(2017, 0, 30),
                        y: 930
                    },
                    {
                        x: new Date(2017, 0, 31),
                        y: 750
                    }
                ]
            }]
        });

        chart.render();
    }
});