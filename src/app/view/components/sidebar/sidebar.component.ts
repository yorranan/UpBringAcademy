import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Menu",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/family",
    title: "Familia",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/task",
    title: "Tarefas",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/gratification",
    title: "Gratificação",
    icon: "icon-atom",
    class: ""
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
