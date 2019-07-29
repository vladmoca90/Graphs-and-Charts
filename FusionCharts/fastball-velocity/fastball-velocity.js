FusionCharts.ready(function () {
    var fusioncharts = new FusionCharts({
        type: "pie2d",
        width: "100%",
        height: "100%",
        renderAt: 'web-services',
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Market Share of Web Servers",
                plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
                showlegend: "1",
                showpercentvalues: "1",
                legendposition: "bottom",
                usedataplotcolorforlabels: "1",
                theme: "fusion"
            },
            data: [{
                    label: "Apache",
                    value: "32647479"
                },
                {
                    label: "Microsoft",
                    value: "22100932"
                },
                {
                    label: "Zeus",
                    value: "14376"
                },
                {
                    label: "Other",
                    value: "18674221"
                }
            ]
        }
    });
    fusioncharts.render();
});