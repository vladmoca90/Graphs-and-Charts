const data = [
    [new Date(2000, 0), '2289000'],
    [new Date(2001, 0), '1946000'],
    [new Date(2002, 0), '1270000'],
    [new Date(2003, 0), '1846000'],
    [new Date(2004, 0), '2250000'],
    [new Date(2005, 0), '2222000'],
    [new Date(2006, 0), '2075000'],
    [new Date(2007, 0), '2345000'],
    [new Date(2008, 0), '2097000'],
    [new Date(2009, 0), '2201000'],
    [new Date(2010, 0), '2438000'],
];

$(function () {
    let revenue = [];

    const showRevenue = data => {
        if (!data) {
            throw new Error('The list must be given');
        }
        if (data.length == 0) {
            throw new Error('The list cannot be empty');
        }

        for (let i = 0; i < data.length; i++) {
            let points = {};

            points.x = data[i][0];
            points.y = parseInt(data[i][1]);
            revenue.push(points);
        }

        return revenue;
    }

    showRevenue(data);

    window.onload = function () {
        let options = {
            animationEnabled: true,
            title: {
                fontSize: 28,
                fontWeight: 'normal',
                margin: 0,
                padding: 15,
                text: "Company Revenue by Year"
            },
            axisY: {
                title: "Revenue in USD",
                valueFormatString: "#0,,.",
                suffix: "mn",
                prefix: "$"
            },
            data: [{
                type: "area",
                markerSize: 5,
                xValueFormatString: "YYYY",
                yValueFormatString: "$#,##0.##",
                dataPoints: revenue,
            }]
        };

        $("#companyRevenue").CanvasJSChart(options);
    }
});