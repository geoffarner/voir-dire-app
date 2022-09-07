import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import JurorsIndex from "../views/JurorsIndex.vue";
import JurorsEdit from "../views/JurorsEdit.vue";
import JurorsShow from "../views/JurorsShow.vue";
import JuryChart from "../components/JuryChart.vue";
import JuryChartTest from "../components/JuryChartTest.vue";
import JuryBox from "../views/JuryBox.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/jurors", name: "index", component: JurorsIndex },
  { path: "/jurors/:id/edit", name: "jurors-edit", component: JurorsEdit },
  { path: "/jurors/:id", name: "jurors-show", component: JurorsShow },
  { path: "/jurors/chart", name: "chart", component: JuryChart },
  { path: "/jurors/charttest", name: "testchart", component: JuryChartTest },
  { path: "/jurors/jurybox", name: "jurybox", component: JuryBox },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
