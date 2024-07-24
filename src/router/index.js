import { createRouter, createWebHistory } from 'vue-router'
import Promedionotas from '@/views/promedionotas.vue'
import Registroformulario from '@/views/registroformulario.vue'


const routes = [
    {
      path: '/',
      name: 'promedionotas',
      component: Promedionotas,
    },
    {
      path: '/registroformulario',
      name: 'RegistroFormulario',
      component: Registroformulario
      
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


