document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("meuGraficoPizza").getContext("2d");
  var meuGrafico = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Vermelho", "Azul", "Amarelo"],
      datasets: [
        {
          label: "Distribuição de Cores",
          data: [300, 50, 100],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
