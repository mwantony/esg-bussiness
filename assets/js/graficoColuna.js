function drawColunaChart() {
  // Dados do gráfico
  var data = google.visualization.arrayToDataTable([
    ["Lorem", "Horas por dia"],
    ["Lorem", 11],
    ["Lorem", 2],
    ["Lorem", 2],
    ["Lorem", 7],
  ]);

  var options = {
    title: "Lorem Ipsum",
    fontName: "Poppins",
    fontSize: 14,
    legend: "none",
    width: window.innerWidth > 1366 ? 350 : 290,
    hAxis: {
      textPosition: "none",
    },
    /*   height: window.innerWidth < 576 ? 350 : 400,
      width: window.innerWidth < 576 ? 400 : 550, */
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.ColumnChart(
    document.getElementById("grafico__coluna")
  );
  chart.draw(data, options);
}
