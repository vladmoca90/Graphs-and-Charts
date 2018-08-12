window.onload = function () {
    var chart = new CanvasJS.Chart('pyramid', {
        title: {
            text: 'Pyramid of Maslow'
        },
        data: [{
            type: 'pyramid',
            dataPoints: [{
                    y: 1,
                    label: 'Psychological',
                    color: '#9C27B0',
                },
                {
                    y: 1,
                    label: 'Safety',
                    color: '#F44336',
                },
                {
                    y: 1,
                    label: 'Love/belonging',
                    color: '#E91E63',
                },
                {
                    y: 1,
                    label: 'Esteem',
                    color: '#FFEB3B',
                },
                {
                    y: 1,
                    label: 'Self-actualization',
                    color: '#2196F3',
                },
            ]
        }]
    });

    chart.render();
}