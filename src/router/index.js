import Vue from 'vue'
import Router from 'vue-router'
import Index from "./../components/FirstPage/Index.vue";
import Dashboard from "../components/User/Dashboard.vue";

// 未登陆页面(index)的二级路由
import Product from "../components/FirstPage/Product.vue";
import Service from "../components/FirstPage/Service.vue";
import Login from "../components/FirstPage/Login.vue";
import Register from "../components/FirstPage/Register.vue";

//个人中心的二级页面
import Home from "../components/User/Function/Home.vue";
import NewProject from "../components/User/Function/NewProject";
import MyProject from "../components/User/Function/MyProject.vue";
import Refer from "../components/User/Function/Refer.vue";
import Feedback from "../components/User/Function/Feedback.vue";
import PersonInfo from "../components/User/Function/PersonInfo.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/product',
          name: "product",
          component: Product
        }, {
          path: '/service',
          name: "service",
          component: Service
        },{
          path: '/login',
          name: "login",
          component:Login,
        },
        {
          path: '/register',
          name: "register",
          component: Register,
        }
      ]
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: Dashboard,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: "home",
          component: Home
        }, {
          path: '/newpj',
          name: "newpj",
          component: NewProject
        }, {
          path: '/mypj',
          name: "mypj",
          component: MyProject
        },
        {
          path: '/refer',
          name: "refer",
          component: Refer,
        },
        {
          path:"/feedbk",
          name:'feedbk',
          component:Feedback
        },
        {
          path: "/userinfo",
          name: 'userinfo',
          component: PersonInfo
        }
      ]
    }
  ]
})
