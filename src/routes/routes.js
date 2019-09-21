import Home from "../view/Home/index";
import Login from "../view/Login/Login";
import Regristry from '../view/Login/Regristry'
import Visuail from '../view/Home/Visualization/index'
import Allachievements from '../view/Home/Allachievements'
export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/regristry",
    name: "regristry",
    component: Regristry,
  },
  {
    path:'/visuail',
    name:'visuail',
    component:Visuail
  },
  {
    path:'/allachievements',
    name:'allachievements',
    component:Allachievements
  }
];
