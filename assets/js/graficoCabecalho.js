// Função para desenhar o gráfico do cabeçalho
function drawCabecalhoChart() {
  // Dados do gráfico
  var data = google.visualization.arrayToDataTable([
    ["Ano", "Vendas", "Despesas"],
    ["2020", 1000, 400],
    ["2021", 1170, 460],
    ["2022", 660, 1120],
    ["2023", 1030, 540],
  ]);

  var options = {
    title: "Lorem Impsum",
    hAxis: { title: "Ano", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    fontName: "Poppins",
    fontSize: 14,
    height: 400,
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.AreaChart(
    document.getElementById("cabecalho__grafico")
  );
  chart.draw(data, options);
}
