window.onload = function () {

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
            dataPoints: [{
                    label: 'Department Stores',
                    y: 6492917
                },
                {
                    label: 'Discount Stores',
                    y: 7380554
                },
                {
                    label: 'Stores for Men / Women',
                    y: 1610846
                },
                {
                    label: 'Teenage Specialty Stores',
                    y: 950875
                },
                {
                    label: 'All other outlets',
                    y: 900000
                }
            ]
        }]
    };
    $('#salesChart').CanvasJSChart(options);

}