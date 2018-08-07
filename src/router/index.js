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

//新建项目的步骤条
import step1 from "../components/User/Function/newpjStep/step1.vue";
import step2 from "../components/User/Function/newpjStep/step2.vue";
import step3 from "../components/User/Function/newpjStep/step3.vue";
import step4 from "../components/User/Function/newpjStep/step4.vue";
import step5 from "../components/User/Function/newpjStep/step5.vue";
import step6 from "../components/User/Function/newpjStep/step6.vue";


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
          component: NewProject,
          redirect:'/newpj/step1',
          children: [
            {
              path: '/newpj/step1',
              name: 'step1',
              component: step1
            },
            {
              path: '/newpj/step2',
              name: 'step2',
              component: step2
            },
            {
              path: '/newpj/step3',
              name: 'step3',
              component: step3
            },
            {
              path: '/newpj/step4',
              name: 'step4',
              component: step4
            },
            {
              path: '/newpj/step5',
              name: 'step5',
              component: step5
            },
            {
              path: '/newpj/step6',
              name: 'step6',
              component: step6
            }
          ]
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
