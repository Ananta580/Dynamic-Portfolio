import { Component, OnInit } from '@angular/core';
import Info from '../../../assets/Info.json';
@Component({
  selector: 'pf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expertise = Info.HomePage.Expertise;
  buttonLabel = Info.HomePage.Button.Name;
  buttonIcon = Info.HomePage.Button.Icon;
  homeDescription = Info.HomePage.Description;
  homeTitle = Info.HomePage.Title;
  constructor() { }

  ngOnInit(): void {
  }

}
