import lazyLoading from '../lazyLoading'

export default {
  name: 'Tarefas',
  path: '/tasks',
  meta: {
    icon: 'fa-tasks'
  },
  component: lazyLoading('tasks', true)
}
