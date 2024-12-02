// Função para calcular IMC
function calcularIMC(peso, altura) {
    altura = altura / 100; // converter para metros
    return (peso / (altura * altura)).toFixed(2);
  }
  
  // Função para calcular Pace
  function calcularPace(distancia, tempo) {
    // tempo é dado em minutos
    const pace = tempo / distancia;
    return pace.toFixed(2); // retorna em minutos por km
  }
  
  // Função para criar o gráfico
  function gerarGrafico(imc, pace, vo2max) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const data = {
      labels: ['IMC', 'Pace', 'VO2 Max'],
      datasets: [{
        label: 'Métricas de Performance',
        data: [imc, pace, vo2max],
        backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
        borderColor: ['#4CAF50', '#FF9800', '#2196F3'],
        borderWidth: 1
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    new Chart(ctx, config);
  }
  
  // Função de Submissão do Formulário
  document.getElementById('performanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseInt(document.getElementById('idade').value);
    const vo2max = parseFloat(document.getElementById('vo2max').value);
  
    // Calculando IMC e Pace
    const imc = calcularIMC(peso, altura);
    const pace = calcularPace(5, 25); // exemplo: 5km em 25min
  
    // Exibindo os resultados
    document.getElementById('imc-result').textContent = imc;
    document.getElementById('pace-result').textContent = pace + ' min/km';
  
    // Gerando gráfico
    gerarGrafico(imc, pace, vo2max);
  });
  