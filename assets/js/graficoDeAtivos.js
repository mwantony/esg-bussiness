function drawDeAtivosChart() {
  // Dados do gráfico

  var data = google.visualization.arrayToDataTable([
    ["Empresa", "Preço"],
    ["Amazon", 45.0],
    ["Netflix", 22.0],
    ["Nvidia", 122.0],
    ["Tesla", 65.0],
    ["Microsoft", 134.0],
  ]);

  var options = {
    title: "Lorem Ipsum",
    fontName: "Poppins",
    fontSize: 14,
    hAxis: { title: "Empresa" },
    vAxis: { title: "Preço" },
    series: {
      0: { color: "#0f9d58" },
      1: { color: "#db4437" },
      2: { color: "#0f9d58" },
    },
    legend: "none",
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.LineChart(
    document.getElementById("grafico__deativos")
  );
  chart.draw(data, options);
}
