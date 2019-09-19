import Home from "../view/Home/index";
import Login from "../view/Login/index";
export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: []
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    children: []
  }
];
