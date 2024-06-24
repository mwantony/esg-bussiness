function drawRoscaChart() {
  // Dados do gráfico
  var data = google.visualization.arrayToDataTable([
    ["Lorem", "Horas por dia"],
    ["Lorem Ipsum", 11],
    ["Lorem Ipsum", 2],
    ["Lorem Ipsum", 2],
    ["Lorem Ipsum", 7],
  ]);

  var options = {
    title: "Lorem Ipsum",
    fontName: "Poppins",
    fontSize: 14,
    pieHole: 0.4,

    /*   height: window.innerWidth < 576 ? 350 : 400,
    width: window.innerWidth < 576 ? 400 : 550, */
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.PieChart(
    document.getElementById("grafico__rosca")
  );
  chart.draw(data, options);
}
