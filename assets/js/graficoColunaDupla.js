function drawColunaDuplaChart() {
  // Dados do gráfico

  var data = google.visualization.arrayToDataTable([
    ["Galaxy", "Distance", "Brightness"],
    ["Canis Major Dwarf", 8000, 23.3],
    ["Sagittarius Dwarf", 24000, 4.5],
    ["Ursa Major II Dwarf", 30000, 14.3],
    ["Lg. Magellanic Cloud", 50000, 0.9],
    ["Bootes I", 60000, 13.1],
  ]);

  var options = {
    legend: "none",
    fontName: "Poppins",
    fontSize: 14,
    hAxis: {
      textPosition: "none",
    },
    chart: {
      title: "Nearby galaxies",
      subtitle: "distance on the left, brightness on the right",
    },
    series: {
      0: { axis: "distance" }, // Bind series 0 to an axis named 'distance'.
      1: { axis: "brightness" }, // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        distance: { label: "parsecs" }, // Left y-axis.
        brightness: { side: "right", label: "apparent magnitude" }, // Right y-axis.
      },
    },
  };

  // Criação e renderização do gráfico
  var chart = new google.visualization.BarChart(
    document.getElementById("grafico__colunaDupla")
  );
  chart.draw(data, options);
}
