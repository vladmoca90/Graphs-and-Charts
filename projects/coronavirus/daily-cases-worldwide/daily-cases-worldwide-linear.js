const totalCases = [
    {
        date: new Date(2020, 0, 1),
        cases: 0
    },
    {
        date: new Date(2020, 0, 17),
        cases: 580
    },
    {
        date: new Date(2020, 0, 25),
        cases: 6058
    },
    {
        date: new Date(2020, 1, 1),
        cases: 14530
    },
    {
        date: new Date(2020, 1, 7),
        cases: 28266
    },
    {
        date: new Date(2020, 1, 11),
        cases: 45134
    },
    {
        date: new Date(2020, 1, 21),
        cases: 77675
    },
    {
        date: new Date(2020, 2, 7),
        cases: 106099
    },
    {
        date: new Date(2020, 2, 16),
        cases: 182414
    },
    {
        date: new Date(2020, 2, 24),
        cases: 422574
    },
    {
        date: new Date(2020, 2, 28),
        cases: 663127
    },
    {
        date: new Date(2020, 2, 31),
        cases: 858355
    },
]

$(function () {
    window.onload = function () {
        const chart = new CanvasJS.Chart("dailyCasesLinear", {
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
                dataPoints: ,
            }]
        });

        chart.render();
    }
});