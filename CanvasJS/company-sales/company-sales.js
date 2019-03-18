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
        data: [{
            type: 'doughnut',
            innerRadius: '55%',
            showInLegend: true,
            legendText: '{label}',
            indexLabel: '{label}: #percent%',
            indexLabelFontSize: 16,
            dataPoints: data,
        }]
    };
    $('#salesChart').CanvasJSChart(options);

}