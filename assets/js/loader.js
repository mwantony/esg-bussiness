
// Carregar a biblioteca de visualização e o pacote de gráficos
google.charts.load('current', {packages: ['corechart', 'bar']});

// Configurar os callbacks para executar quando a API do Google Charts estiver carregada
google.charts.setOnLoadCallback(drawCabecalhoChart);
google.charts.setOnLoadCallback(drawRoscaChart);
google.charts.setOnLoadCallback(drawColunaChart);
google.charts.setOnLoadCallback(drawColunaDuplaChart);
google.charts.setOnLoadCallback(drawMaiorChart);
google.charts.setOnLoadCallback(drawDeAtivosChart);
