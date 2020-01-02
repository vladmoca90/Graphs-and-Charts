window.onload = function () {

    var data = [
        [
            'Department Stores',
            6492917
        ],
        [
            'Discount Stores',
            7380554
        ],
        [
            'Stores for Men / Women',
            1610846
        ],
        [
            'Teenage Specialty Stores',
            950875
        ],
        [
            'All other outlets',
            900000
        ]
    ];

    function addSales(data) {
        if(data.length == 0) {
            throw new Error('The list must be given');
        }

        for(var i = 0; i<data.length; i++) {

        }
    }

    var options = {
        animationEnabled: true,
        title: {
            fontSize: 24,
            padding: 20,
            text: 'ACME Corporation Apparel Sales',
        },
        legend: {
            fontSize: 14,
            fontWeight: 'lighter',
        },
        data: [
        {
            type: 'doughnut',
            innerRadius: '55%',
            showInLegend: true,
            legendText: '{label}',
            indexLabel: '{label}: #percent%',
            indexLabelFontSize: 16,
            dataPoints: addSales(data),
        }]
    };

    $('#salesChart').CanvasJSChart(options);

}