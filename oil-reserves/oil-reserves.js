window.onload = function () {

    var data = [
        ['Vanezuela', ],
        ['Saudi Arabia'],
        ['Canada'],
        ['Iran'],
        ['Iraq'],
        ['Kuwait', ],
        ['UAE'],
        ['Russia'],
    ]

    var chart = new CanvasJS.Chart('oilReserves', {
        animationEnabled: true,
        theme: 'dark1',
        title: {
            fontSize: 32,
            fontWeight: 'lighter',
            text: 'Top Oil Reserves'
        },
        dataPointWidth: 40,
        axisY: {
            title: 'Reserves (MMbbl)'
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