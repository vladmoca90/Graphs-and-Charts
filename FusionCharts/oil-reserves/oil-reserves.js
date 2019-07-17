FusionCharts.ready(function () {
    var fusioncharts = new FusionCharts({
        type: 'column2d',
        renderAt: 'oilReserves',
        width: '800',
        height: '450',
        dataFormat: 'json',
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves (2017-18)",
                "subCaption": "In MMbbl (One Million barrels)",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "320"
            }, {
                "label": "Saudi Arabia",
                "value": "225"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "150"
            }, {
                "label": "Russia",
                "value": "125"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "USA",
                "value": "80"
            }, {
                "label": "PR China",
                "value": "65"
            }]
        }
    });
    fusioncharts.render();
});