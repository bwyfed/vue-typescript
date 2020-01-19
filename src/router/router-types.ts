export interface RouteMeta {
  title: string;
  icon: string;
  affix: boolean;
  noCache?: boolean;
  breadcrumb?: boolean;
  activeMenu?: string;
  roles?: string[];
}

export interface RouteInterface {
  name?: string; // the name is used by <keep-alive> (must set!!!)
  path: string;
  component: object;
  redirect?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  meta?: RouteMeta;
  children?: RouteInterface[];
}

export interface PositionInterface {
  x?: number;
  y?: number;
}
