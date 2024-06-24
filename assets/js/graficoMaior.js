function drawMaiorChart() {
  // Dados do gráfico

  var data = google.visualization.arrayToDataTable([
    ["Ano", "Vendas", "Despesas"],
    ["2020", 1000, 400],
    ["2021", 1170, 460],
    ["2022", 660, 1120],
    ["2023", 1030, 540],
  ]);

  var options = {
    fontName: "Poppins",
    fontSize: 14,
    title: "Lorem Ipsum",
    curveType: "function",
    legend: "none",
    height: window.innerWidth < 576 ? 300 : 450,
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.LineChart(
    document.getElementById("grafico__maior")
  );
  chart.draw(data, options);
}
