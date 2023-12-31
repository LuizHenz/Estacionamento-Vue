import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/marca-lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/marca-cadastro',
    name: 'marca-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaCadastroView.vue'),
    children: [
      {
        path: '/marca-cadastro',
        name: 'marca-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaCadastroView.vue')
      },
      {
        path: '/marca-cadastro',
        name: 'marca-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaCadastroView.vue')
      }
    ]
  },
  {
    path: '/modelo-lista',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/modelo-cadastro',
    name: 'modelo-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloCadastroView.vue'),
    children: [
      {
        path: '/modelo-cadastro',
        name: 'modelo-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloCadastroView.vue')
      },
      {
        path: '/modelo-cadastro',
        name: 'modelo-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloCadastroView.vue')
      }
    ]
  },
  {
    path: '/veiculo-lista',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */'../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/veiculo-cadastro',
    name: 'veiculo-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */'../views/veiculo/VeiculoCadastroView.vue'),
    children: [
      {
        path: '/veiculo-cadastro',
        name: 'veiculo-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoCadastroView.vue')
      },
      {
        path: '/veiculo-cadastro',
        name: 'veiculo-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoCadastroView.vue')
      }
    ]
  },
  {
    path: '/condutor-lista',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "CondutorListaView" */'../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/condutor-cadastro',
    name: 'condutor-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */'../views/condutor/CondutorCadastroView.vue'),
    children: [
      {
        path: '/condutor-cadastro',
        name: 'condutor-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorCadastroView.vue')
      },
      {
        path: '/condutor-cadastro',
        name: 'condutor-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorCadastroView.vue')
      }
    ]
  },
  {
    path: '/configuracao-lista',
    name: 'configuracao-lista-view',
    component: () => import(/* webpackChunkName: "about" */'../views/configuracao/ConfiguracaoListaView.vue')
  },
  {
    path: '/recibo',
    name: 'movimentacao-recibo-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoReciboView.vue')
  },
  {
    path: '/configuracao-cadastro',
    name: 'configuracao-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */'../views/configuracao/ConfiguracaoCadastroView.vue'),
    children: [
      {
        path: '/configuracao-cadastro',
        name: 'configuracao-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoCadastroView.vue')
      },
      {
        path: '/configuracao-cadastro',
        name: 'configuracao-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoCadastroView.vue')
      }
    ]
  },
  {
    path: '/movimentacao-lista',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */'../views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/movimentacao-cadastro',
    name: 'movimentacao-cadastro-view',
    component: () => import(/* webpackChunkName: "about" */'../views/movimentacao/MovimentacaoCadastroView.vue'),
    children: [
      {
        path: '/movimentacao-cadastro',
        name: 'movimentacao-cadastro-editar-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoCadastroView.vue')
      },
      {
        path: '/movimentacao-cadastro',
        name: 'movimentacao-cadastro-excluir-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoCadastroView.vue')
      },
      {
        path: '/movimentacao-cadastro',
        name: 'movimentacao-cadastro-finalizar-view',
        component: () => import(/* webpackChunkName: "MovimentacaoFormsView" */ '../views/movimentacao/MovimentacaoCadastroView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
