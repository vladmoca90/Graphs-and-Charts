var data = {
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}

/**
 * Assuming you have installed fusioncharts using npm
 * Following code snippet can be used
*/
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');

Charts(FusionCharts); // Resolve Charts as dependency for FusionCharts.
FusionTheme(FusionCharts);  // Resolve Fusion theme as dependency for FusionCharts
jQueryFusionCharts(FusionCharts); // Resolve FusionCharts as dependency for jqueryFusionCharts

$(function () {
  $('#oilReserves').insertFusionCharts({
    type: 'column2d',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource:  data 
  });
});

/* 
NOTE: 
  * In case you downloaded fusioncharts in zipped format
  * var FusionCharts = require('/path/to/fusioncharts/fusioncharts.js');
  * var Charts = require('/path/to/fusioncharts/fusioncharts.charts.js');
  * var FusionTheme = require('/path/to/fusioncharts/fusioncharts.theme.fusion.js');
*/