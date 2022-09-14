<!-- <template>
  <h1>TEST Chart Page</h1>
  <body>
    <div class="chart-container">
      <div class="jury-chart">
        <canvas id="myChart" width="50" height="50"></canvas>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
// import Chart from "chart.js/auto";

export default {
  data: function () {
    return {
      jurors: {},
      jurorsSex: [],
      jurorsMale: [],
      jurorsFemale: [],
      // myChart: "myChart",
      methods: {
        getChartData() {
          return this.getChartData;
        },
        getData() {
          return this.getData;
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart");

    const data = {
      data: {
        datasets: [{ data: [] }],
        labels: ["Male", "Female"],

        label: "My First Dataset",
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    };
  },

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
    }),

  // methods: {
  //   getData: function () {
  //     axios
  //       .get("/jurors.json")
  //       .then((response) => {
  //         this.jurors = response.data;
  //         console.log("jurors", this.jurors);
  //         this.jurorsSex = this.jurors.map((juror) => juror.sex);
  //         console.log("Juror Sex:", this.jurorsSex);
  //         this.jurorsMale = this.jurorsSex.filter((male) => male == "Male").length;
  //         this.jurorsFemale = this.jurorsSex.filter((female) => female == "Female").length;
  //         this.getChartData = this.getData;
  //         console.log("Boys", this.jurorsMale);
  //         console.log("Girls", this.jurorsFemale);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   },
  //   getChartData: function () {
  //     this.chartConfig.data.push[0] = this.jurorsMale;
  //     this.chartConfig.data.push[1] = this.jurorsFemale;
  //   },
  // },
  created: function () {
    axios.get("/jurors.json").then((response) => {
      this.jurors = response.data;
      console.log("jurors", this.jurors);
      this.jurorsSex = this.jurors.map((juror) => juror.sex);
      console.log("Juror Sex:", this.jurorsSex);
      this.jurorsMale = this.jurorsSex.filter((male) => male == "Male").length;
      this.jurorsFemale = this.jurorsSex.filter((female) => female == "Female").length;
      console.log("males", this.jurorsMale);
      console.log("females", this.jurorsFemale);
      this.data.data[0].push = this.jurorsMale;
      this.data.data[1].push = this.jurorsFemale;
      this.myChart.update();
    });
  },
  myChart,
};
// push: function () {
//   alert("Peace Bitches!");
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
</style> -->
