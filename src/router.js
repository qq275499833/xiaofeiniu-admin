import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import Category from './views/Category.vue'
import CategoryAdd from './views/CategoryAdd.vue'
import CategoryUpdate from './views/CategoryUpdate.vue'
import CategoryDelete from './views/CategoryDelete.vue'
import Dish from './views/Dish.vue'
import DishAdd from './views/DishAdd.vue'
import DishUpdate from './views/DishUpdate.vue'
import DishDelete from './views/DishDelete.vue'
import OrderList from './views/OrderList.vue'
import Securifty from './views/Securifty.vue'




Vue.use(Router)

//整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {path:'',redirect:'/table/list'},
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:Category},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/update',component:CategoryUpdate},
        {path:'/category/delete',component:CategoryDelete},
        {path:'/dish/list',component:Dish},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/update',component:DishUpdate},
        {path:'/dish/delete',component:DishDelete},
        {path:'/order/list',component:OrderList},
        {path:'/securifty',component:Securifty}
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})