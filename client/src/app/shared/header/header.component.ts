import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../app-routes.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes: Array<any> = AppRoutes;

  constructor() { }

  ngOnInit() {
    this.routes.map((route) => {
      let routeName = route.component.name;
      
      if(routeName && routeName.length > 9){
        route.name = routeName.substr(0, routeName.length - 9);
      } else {
        route.name = route.path;
      }

      if(route.children){
        route.subroutes = [];
      
        route.children.map((child) => {
          let childName = child.component.name
          route.subroutes.push(childName.substr(0, childName.length - 9));
        });
      }
    });
  }

}
