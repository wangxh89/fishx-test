import Index from '@pages/index'
import List from '@pages/list'

const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/list',
    exact: true,
    component: List,
  },
]

export default routes
