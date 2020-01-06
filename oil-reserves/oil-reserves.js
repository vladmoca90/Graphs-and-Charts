window.onload = function () {

    var data = [
        ['Venezuela', 300878],
        ['Saudi Arabia', 266455],
        ['Canada', 169709],
        ['Iran', 158400],
        ['Iraq', 142503],
        ['Kuwait', 101500],
        ['UAE', 97800],
        ['Russia', 80000],
    ];

    var oilReserves = [];

    function showOilReserves(data) {
        if (!data) {
            throw new Error('The list must be provided');
        }
        if (data.length == 0) {
            throw new Error('The list cannot be empty');
        }

        for (var i = 0; i < data.length; i++) {
            var reserves = new Object();

            reserves.y = data[i][1];
            reserves.label = data[i][0];

            oilReserves.push(reserves);
        }
    }

    showOilReserves(data);

    var chart = new CanvasJS.Chart('oilReserves', {
        animationEnabled: true,
        theme: 'dark1',
        title: {
            fontSize: 32,
            fontWeight: 'lighter',
            text: 'Top Oil Reserves'
        },
        legend: {
            fontSize: 16,
        },
        toolTip: {
            fontSize: 16,
        },
        dataPointWidth: 40,
        axisX: {
            labelFontSize: 14
        },
        axisY: {
            title: 'Reserves (MMbbl)',
            labelFontSize: 14,
        },
        data: [{
            type: 'column',
            showInLegend: true,
            legendMarkerColor: '#eee',
            legendText: 'MMbbl = one million barrels',
            dataPoints: oilReserves
        }]
    });

    chart.render();
}