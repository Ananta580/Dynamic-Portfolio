import { Component, OnInit } from '@angular/core';
import Info from '../../../assets/Info.json';
@Component({
  selector: 'pf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  name: string = Info.NavigationBar.Name;
  menuList: any[] = Info.NavigationBar.MenuList;
  constructor() {

  }

  ngOnInit(): void {
  }

}
