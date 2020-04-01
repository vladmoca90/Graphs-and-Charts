var colors = ['#FFCA28', '#BDBDBD', '#CC9966'];

$(function () {
    window.onload = function () {
        CanvasJS.addColorSet('medalsColors', colors);
        var chart = new CanvasJS.Chart('medalsChart', {
            colorSet: 'medalsColors',
            title: {
                fontFamily: 'Tahoma',
                fontSize: 21,
                padding: 20,
                text: '2016 Summer Olympics medal count'
            },
            legend: {
                fontSize: 16,
                fontWeight: 'normal',
            },
            toolTip: {
                enabled: true,
                fontSize: 13,
            },
            axisX: {
                labelFontSize: 14,
                margin: 10,
                tickColor: 'transparent',
                tickLength: 10,
            },
            axisY: {
                labelFontSize: 14,
                gridColor: '#ccc',
                tickColor: 'transparent',
                tickLength: 10,
            },
            data: [{
                    type: 'bar',
                    showInLegend: true,
                    legendText: 'Gold',
                    dataPoints: [
                        {
                            y: 17,
                            label: 'Germany'
                        },
                        {
                            y: 19,
                            label: 'Russia'
                        },
                        {
                            y: 26,
                            label: 'PR PR China'
                        },
                        {
                            y: 27,
                            label: 'United Kingdom'
                        },
                        {
                            y: 46,
                            label: 'United States'
                        }
                    ]
                },
                {
                    type: 'bar',
                    showInLegend: true,
                    legendText: 'Silver',
                    dataPoints: [{
                            y: 10,
                            label: 'Germany'
                        },
                        {
                            y: 17,
                            label: 'Russia'
                        },
                        {
                            y: 18,
                            label: 'PR China'
                        },
                        {
                            y: 23,
                            label: 'United Kingdom'
                        },
                        {
                            y: 37,
                            label: 'United States'
                        }
                    ]
                },
                {
                    type: 'bar',
                    showInLegend: true,
                    legendText: 'Bronze',
                    dataPoints: [{
                            y: 15,
                            label: 'Germany'
                        },
                        {
                            y: 19,
                            label: 'Russia'
                        },
                        {
                            y: 26,
                            label: 'PR China'
                        },
                        {
                            y: 17,
                            label: 'United Kingdom'
                        },
                        {
                            y: 38,
                            label: 'United States'
                        }
                    ]
                }
            ]
        });

        chart.render();
    }
});