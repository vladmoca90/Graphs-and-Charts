window.onload = function () {

    var chart = new CanvasJS.Chart('oilReserves', {
        animationEnabled: true,
        dataPointWidth: 33,
        title: {
            fontSize: 18,
            fontFamily: 'Verdana',
            padding: 20,
            text: 'Crude Oil Reserves vs Production',
        },
        axisX: {
            titleFontSize: 13,
        },
        axisY: {
            title: 'Billions of Barrels',
            titleFontColor: '#5C6BC0',
            titleFontSize: 13,
            gridColor: '#ccc',
            labelFontSize: 11,
            labelFontColor: '#5C6BC0',
        },
        axisY2: {
            title: 'Millions of Barrels/day',
            titleFontColor: '#c62828',
            titleFontSize: 13,
            gridColor: '#ccc',
            labelFontSize: 11,
            labelFontColor: '#c62828',
        },
        toolTip: {
            shared: true,
        },
        data: [{
                type: 'column',
                color: '#5C6BC0',
                name: 'Proven Oil Reserves (bn)',
                legendText: 'Proven Oil Reserves',
                fillOpacity: 0.75,
                showInLegend: true,
                dataPoints: [{
                        label: 'Saudi Arabia',
                        y: 266.21
                    },
                    {
                        label: 'Venezuela',
                        y: 302.25
                    },
                    {
                        label: 'Iran',
                        y: 157.20
                    },
                    {
                        label: 'Iraq',
                        y: 148.77
                    },
                    {
                        label: 'Kuwait',
                        y: 101.50
                    },
                    {
                        label: 'UAE',
                        y: 97.8
                    },
                    {
                        label: 'Russia',
                        y: 80
                    }
                ]
            },
            {
                type: 'column',
                color: '#c62828',
                name: 'Oil Production (million/day)',
                legendText: 'Oil Production',
                fillOpacity: 0.75,
                axisYType: 'secondary',
                showInLegend: true,
                dataPoints: [{
                        label: 'Saudi Arabia',
                        y: 10.46
                    },
                    {
                        label: 'Venezuela',
                        y: 2.27
                    },
                    {
                        label: 'Iran',
                        y: 3.99
                    },
                    {
                        label: 'Iraq',
                        y: 4.45
                    },
                    {
                        label: 'Kuwait',
                        y: 2.92
                    },
                    {
                        label: 'UAE',
                        y: 3.1
                    },
                    {
                        label: 'Russia',
                        y: 10.3
                    }
                ]
            }
        ]
    });

    chart.render();
}