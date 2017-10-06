google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });

google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChar);

function drawChart() {
    $.ajax({
        url: "/cars",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'title');
            data.addColumn('number', 'price');
            for (var i = 0; i < jsonData.length; i++) {
                if (parseFloat(jsonData[i].price) > 500 && parseFloat(jsonData[i].price) < 20000) {
                    data.addRow([
                        jsonData[i].title,
                        parseInt(jsonData[i].price),
                    ]);
                }


            }

            var options = {
                colors: ['#660330'],
                animation: {
                    duration: 3000,
                    easing: 'out',
                    startup: true
                }

            };

            var table = new google.visualization.LineChart(document.getElementById('chart_div0'));
            table.draw(data, options);
        }
    });
}

function drawTable() {
    $.ajax({
        url: "/cars",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'title');
            data.addColumn('string', 'price');
            data.addColumn('string', 'year');
            data.addColumn('string', 'url');
            data.addColumn('string', 'image');
            for (var i = 0; i < jsonData.length; i++) {
                data.addRow([
                    jsonData[i].title,
                    jsonData[i].price,
                    jsonData[i].year,
                    jsonData[i].url,
                    jsonData[i].image
                ]);
            }

            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '100%',
                height: '100%'
            };

            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            table.draw(data, options);
        }
    });
}
function drawColumnChart() {
    $.ajax({
        url: "/cars",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'title');
            data.addColumn('number', 'year');
            for (var i = 0; i < jsonData.length; i++) {
                if (parseFloat(jsonData[i].year) > 1900 && parseFloat(jsonData[i].year) < 2017) {
                    data.addRow([
                        jsonData[i].title,
                        parseInt(jsonData[i].year),
                    ]);
                }

            }

            var options = {
                colors: ['#330000'],
                animation: {
                    duration: 2000,
                    easing: 'out',
                    startup: true
                }

            };

            var table = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
            table.draw(data, options);
        }
    });
}
function drawChar() {
    $.ajax({
        url: "/cars",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'title');
            data.addColumn('number', 'year');

            for (var i = 0; i < jsonData.length; i++) {
                if (parseFloat(jsonData[i].year) > 2000 && parseFloat(jsonData[i].year) < 2017) {
                    data.addRow([
                        jsonData[i].title,
                        parseInt(jsonData[i].price),
                    ]);   
               
               
                }
            }

            var options = {


            };

            var table = new google.visualization.PieChart(document.getElementById('chart_div2'));
            table.draw(data, options);
        }
    });
}

$(window).resize(function () {
    drawTable();
    drawColumnChart();
    drawChart();
    drawChar();

});