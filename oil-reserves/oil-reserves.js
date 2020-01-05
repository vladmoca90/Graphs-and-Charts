window.onload = function () {

    var data = [
        ['Vanezuela', 300878],
        ['Saudi Arabia', 266455],
        ['Canada', 169709],
        ['Iran', 158400],
        ['Iraq', 142503],
        ['Kuwait', 101500],
        ['UAE', 97800],
        ['Russia', 80000],
    ];

    var reserves = [];

    function showOilReserves(data) {
        if(!data) {
            throw new Error('The list must be provided');
        }
        if(data.length == 0) {
            throw new Error('The list cannot be empty');
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
        toolTip:{
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
            dataPoints: [
                {
                    y: 300878,
                    label: 'Venezuela'
                },
                {
                    y: 266455,
                    label: 'Saudi Arabia'
                },
                {
                    y: 169709,
                    label: 'Canada'
                },
                {
                    y: 158400,
                    label: 'Iran'
                },
                {
                    y: 142503,
                    label: 'Iraq'
                },
                {
                    y: 101500,
                    label: 'Kuwait'
                },
                {
                    y: 97800,
                    label: 'UAE'
                },
                {
                    y: 80000,
                    label: 'Russia'
                }
            ]
        }]
    });

    chart.render();
}