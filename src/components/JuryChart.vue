<template>
  <h1>Chart Page</h1>
  <body>
    <div class="chart-container">
      <div class="jury-chart">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </body>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById("myChart");

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
    });
    myChart;
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
canvas {
  background-color: rgb(241, 247, 242);
}
.chart-container {
  position: relative;
  margin: auto;
  height: 40vh;
  width: 40vw;
}
</style>
