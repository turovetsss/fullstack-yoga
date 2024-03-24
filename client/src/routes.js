import {Admin} from './pages/Admin'
import {Schedule} from './pages/Schedule'
import {Basket} from './pages/Basket'
import {Auth} from './pages/Auth'
import { ADMIN_ROUTE,BASKET_ROUTE, LESSON_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SCHEDULE_ROUTE } from './utils/consts'
import { LessonPage } from './pages/Lesson'
export const authRoutes=[
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
]
export const publicRoutes=[
  {
    path: SCHEDULE_ROUTE,
    Component: Schedule
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: LESSON_ROUTE + '/:id',
    Component: LessonPage
  }
]