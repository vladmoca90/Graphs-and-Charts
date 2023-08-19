const colors = ['#FFCA28', '#BDBDBD', '#CC9966'];

$(function () {
    window.onload = function () {
        CanvasJS.addColorSet('medalsColors', colors);
        let chart = new CanvasJS.Chart('medalsChart', {
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
                markerMargin: 15,
            },
            toolTip: {
                enabled: true,
                fontSize: 13,
            },
            axisX: {
                labelFontSize: 14,
                lineColor: '#bbb',
                gridColor: '#bbb',
                gridThickness: 1,
                margin: 10,
                tickColor: '#bbb',
                tickLength: 5,
            },
            axisY: {
                labelFontSize: 14,
                lineColor: '#bbb',
                gridColor: '#bbb',
                tickColor: '#bbb',
                tickLength: 5,
            },
            dataPointMaxWidth: 16,
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
                        label: 'Russian Federation'
                    },
                    {
                        y: 26,
                        label: 'PR China'
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
                dataPoints: [
                    {
                        y: 10,
                        label: 'Germany'
                    },
                    {
                        y: 17,
                        label: 'Russian Federation'
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
                dataPoints: [
                    {
                        y: 15,
                        label: 'Germany'
                    },
                    {
                        y: 19,
                        label: 'Russian Federation'
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