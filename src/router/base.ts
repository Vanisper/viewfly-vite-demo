import { RouteConfig } from '@viewfly/router'
import { Home } from '../views/Home'
import { List } from '../views/List'
import { Detail } from '../views/Detail'
import { Test } from '../views/Test'
import { PageEnum } from '../enums/pageEnum'

export const HomeRoute:RouteConfig = {
    name: PageEnum.BASE_HOME,
    component: Home,
}

export const ListRoute:RouteConfig = {
    name: PageEnum.BASE_LIST,
    component: List,
}

export const DetailRoute:RouteConfig = {
    name: PageEnum.BASE_DETAIL,
    component: Detail,
}

export const TestRoute:RouteConfig = {
    name: PageEnum.BASE_TEST,
    component: Test,
}
