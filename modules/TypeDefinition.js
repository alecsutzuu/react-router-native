/* @flow */

export type Location = {
  action: string,
  hash: string,
  key: string,
  pathName: string,
  query: Object,
  search: string,
  state: Object,
};

export type EnhancedNavigationState = {
  key: string,
  index: number,
  children: Array<EnhancedNavigationState>,
  type: string,
  path: string,
  location: Location,
  params: Object,
  routeParams: Object,
};

export type RouteDef = {
  childRoutes: ?Array<RouteDef>,
  component: Function,
  overlayComponent: ?Function,
  path: ?string,
  routeType: ?string,
};

export type IndexRouteDef = {
  component: Function,
  overlayComponent: ?Function,
};

export type NoPathRouteDef = {
  childRoutes: Array<RouteDef>,
  component: Function,
  overlayComponent: ?Function,
  routeType: string,
};

export type ElementProvider = (component: ReactClass<any>, props: any) => ?ReactElement;

export type NavigationAction = {
  routes: Array<RouteDef>,
  location: Location,
  params: Object,
}

export type Snapshot = EnhancedNavigationState;