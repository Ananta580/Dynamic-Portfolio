import { Component, OnInit } from '@angular/core';
import Info from '../../../assets/Info.json';
@Component({
  selector: 'pf-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillAlternate = true;
  expertiseOne: any;
  expertiseTwo: any;
  title: string | undefined;
  body: string | undefined;
  constructor() {
    this.pullOnSkill();
    this.expertiseOne = Info.SkillPage.ExpertiseOne;
    this.expertiseTwo = Info.SkillPage.ExpertiseTwo;
  }

  ngOnInit(): void {
  }

  alterSkill() {
    this.skillAlternate = !this.skillAlternate;
  }
  hoveringOnSkill(expertiseNo: number, index: number) {
    if (expertiseNo === 1) {
      this.title = this.expertiseOne.Skills[index].Name;
      this.body = this.expertiseOne.Skills[index].Description;
    }
    else {
      this.title = this.expertiseTwo.Skills[index].Name;
      this.body = this.expertiseTwo.Skills[index].Description;
    }
  }
  pullOnSkill() {
    this.title = Info.SkillPage.Title;
    this.body = Info.SkillPage.Description;
    // this.body = `I am a <b>Software Engineer</b> with a motive of learning and growing through my experience. I have more than 2
    // year experience with .Net and Angular, including my professional experience. I work as a full stack
    // software developer, where I create Api using .Net as well as Other App using Razor + .Net and rest of time I
    // spend with Angular to built amazing frontend using Frameworks like bootstrap, antdesign, material design.
    // I have also hands on experience on Ionic and NativeScript to create Mobile Apps. Learning is my passion and
    // I am countinously learning various JS Frontend Framework like Vuejs, Reactjs as well as Backend Frameworks
    // like Django,Express etc.`;
  }
}
