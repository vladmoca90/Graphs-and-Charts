const data = [
    ['Venezuela', 300878],
    ['Saudi Arabia', 266455],
    ['Canada', 169709],
    ['Iran', 158400],
    ['Iraq', 142503],
    ['Kuwait', 101500],
    ['UAE', 97800],
    ['Russian Federation', 80000],
    ['Libya', 48000],
    ['Nigeria', 37062],
    ['United States', 35000],
];

const colors = ['#CB0200', '#FFB500', '#0567A8', '#3CB371', 
                '#DEADAF', '#A9A6A6', '#E35218', '#D2EA9D', 
                '#6D4F8F', '#5A5255', '#00FF00'];

window.onload = function () {
    let oilReserves = [];

    const showOilReserves = data => {
        if (!data) {
            throw new Error('The list must be provided');
        }
        if (data.length == 0) {
            throw new Error('The list cannot be empty');
        }

        for (let i = 0; i < data.length; i++) {
            let reserves = new Object();

            reserves.y = data[i][1];
            reserves.label = data[i][0];
            oilReserves.push(reserves);
        }
    }

    showOilReserves(data);

    CanvasJS.addColorSet('countriesColors', colors);

    const chart = new CanvasJS.Chart('oilReserves', {
        animationEnabled: true,
        colorSet: 'countriesColors',
        theme: 'dark1',
        title: {
            fontSize: 28,
            fontWeight: 'normal',
            margin: 0,
            padding: 20,
            text: 'Top Oil Reserves'
        },
        legend: {
            fontSize: 16,
            markerMargin: 10,
        },
        toolTip: {
            fontSize: 15,
        },
        dataPointWidth: 40,
        axisX: {
            labelFontSize: 13,
            tickLength: 15,
        },
        axisY: {
            gridColor: '#aaa',
            labelFontSize: 13,
            tickLength: 10,
            title: 'Reserves (MMbbl)',
        },
        data: [{
            type: 'column',
            bevelEnabled: true,
            showInLegend: true,
            legendMarkerColor: '#eee',
            legendText: 'MMbbl = one million barrels',
            dataPoints: oilReserves
        }]
    });

    chart.render();
}