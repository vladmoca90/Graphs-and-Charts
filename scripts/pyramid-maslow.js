window.onload = function () {

    var chart = new CanvasJS.Chart('pyramid', {
        title: {
            text: 'Pyramid of Maslow'
        },
        data: [{
            type: 'pyramid',
            dataPoints: [{
                    y: 30000,
                    label: 'Stocks'
                },
                {
                    y: 22000,
                    label: 'Bonds'
                },
                {
                    y: 20000,
                    label: 'Real Estate'
                },
                {
                    y: 15000,
                    label: 'Annuities'
                },
                {
                    y: 8000,
                    label: 'Insurance'
                },
                {
                    y: 10000,
                    label: 'Cash'
                }
            ]
        }]
    });

    chart.render();
}