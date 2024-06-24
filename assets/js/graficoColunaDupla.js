function drawColunaDuplaChart() {
  // Dados do gráfico

  var data = google.visualization.arrayToDataTable([
    ["Tempo", "Valor 1", "Valor 2"],
    [{ v: [8, 0, 0], f: "8 am" }, 1, 0.25],
    [{ v: [9, 0, 0], f: "9 am" }, 2, 0.5],
    [{ v: [10, 0, 0], f: "10 am" }, 3, 1],
    [{ v: [11, 0, 0], f: "11 am" }, 4, 2.25],
    [{ v: [12, 0, 0], f: "12 pm" }, 5, 2.25],
    [{ v: [13, 0, 0], f: "1 pm" }, 6, 3],

  ]);

  var options = {
    title: "Lorem Ipsum",
    legend: "none",
    fontName: "Poppins",
    fontSize: 14,
    hAxis: {
      textPosition: "none",
    },
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.ColumnChart(
    document.getElementById("grafico__colunaDupla")
  );
  chart.draw(data, options);
}
