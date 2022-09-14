<template>
  <h1>TEST Chart Page</h1>
  <div class="chart-container">
    <canvas id="myChart" width="40" height="40"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="myChart2" width="40" height="40"></canvas>
  </div>
  <div class="chart-container">
    <canvas id="myChart3" width="40" height="40"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "testChart",
  props: {
    msg: String,
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const ctx2 = document.getElementById("myChart2");
    const ctx3 = document.getElementById("myChart3");
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
          hoverOffset: 4,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "rgb(227, 247, 8)",
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
    const myChart2 = new Chart(ctx2, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "rgb(227, 247, 8)",
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
    const myChart3 = new Chart(ctx3, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "rgb(227, 247, 8)",
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
    myChart;
    myChart2;
    myChart3;
  },
};
</script>
<style>
.chart-container {
  position: auto;
  margin: auto;
  height: 300px;
  width: 300px;
}
#labels {
  color: rgb(227, 247, 8);
}
</style>
