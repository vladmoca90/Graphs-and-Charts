window.onload = function () {
    var chart = new CanvasJS.Chart('spline', {

        title: {
            text: 'China GDP growth rate (2010 - 2022)',
            fontFamily: 'Verdana',
            fontSize: 24,
            padding: 20,
        },
        axisY: {
            gridColor: '#ccc',
            suffix: '%'
        },
        data: [{
                color: '#7E57C2',
                type: 'spline',
                dataPoints: [{
                        x: new Date(2010, 00, 1),
                        y: 10.61
                    },
                    {
                        x: new Date(2011, 01, 1),
                        y: 9.46
                    },
                    {
                        x: new Date(2012, 02, 1),
                        y: 7.9
                    },
                    {
                        x: new Date(2013, 03, 1),
                        y: 7.8
                    },
                    {
                        x: new Date(2014, 04, 1),
                        y: 7.3
                    },
                    {
                        x: new Date(2015, 05, 1),
                        y: 6.9
                    },
                    {
                        x: new Date(2016, 06, 1),
                        y: 6.7
                    },
                    {
                        x: new Date(2017, 07, 1),
                        y: 6.8
                    },
                    {
                        x: new Date(2018, 08, 1),
                        y: 6.5
                    },
                    {
                        x: new Date(2019, 09, 1),
                        y: 6.3
                    },
                    {
                        x: new Date(2020, 10, 1),
                        y: 6.2
                    },
                    {
                        x: new Date(2021, 11, 1),
                        y: 6
                    },
                     {
                        x: new Date(2022, 11, 1),
                        y: 5.8
                    }
                ]
            }

        ]
    });

    chart.render();
}