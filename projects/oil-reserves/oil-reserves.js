window.onload = function () {

    var graphProp = [
        ['Venezuela', 300878],
        ['Saudi Arabia', 266455],
        ['Canada', 169709],
        ['Iran', 158400],
        ['Iraq', 142503],
        ['Kuwait', 101500],
        ['UAE', 97800],
        ['Russia', 80000],
        ['Libya', 48000],
        ['Nigeria', 37062],
        ['United States', 35000],
    ];

    var oilReserves = [];

    function showOilReserves(graphProp) {
        if (!graphProp) {
            throw new Error('The list must be provided');
        }
        if (graphProp.length == 0) {
            throw new Error('The list cannot be empty');
        }

        for (var i = 0; i < graphProp.length; i++) {
            var reserves = new Object();

            reserves.y = graphProp[i][1];
            reserves.label = graphProp[i][0];

            oilReserves.push(reserves);
        }
    }

    showOilReserves(graphProp);

    CanvasJS.addColorSet('countriesColors',
        [
            '#CB0200',
            '#FFB500',
            '#0567A8',
            '#3CB371',
            '#DEADAF',
            '#A9A6A6',
            '#E35218',
            '#D2EA9D',
            '#6D4F8F',
            '#5A5255',
            '#00FF00',
        ]);

    var chart = new CanvasJS.Chart('oilReserves', {
        animationEnabled: true,
        colorSet: 'countriesColors',
        theme: 'dark1',
        title: {
            fontSize: 32,
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
            fontSize: 16,
        },
        dataPointWidth: 40,
        axisX: {
            labelFontSize: 14,
            tickLength: 15,
        },
        axisY: {
            gridColor: '#AAA',
            labelFontSize: 14,
            tickLength: 5,
            title: 'Reserves (MMbbl)',
        },
        data: [{
            type: 'column',
            bevelEnabled: true,
            showInLegend: true,
            legendMarkerColor: '#EEE',
            legendText: 'MMbbl = one million barrels',
            dataPoints: oilReserves
        }]
    });

    chart.render();
}