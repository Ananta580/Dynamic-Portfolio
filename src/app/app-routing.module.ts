import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Skill', component: SkillComponent },
  { path: 'Projects', component: HomeComponent },
  { path: 'Education', component: HomeComponent },
  { path: 'Contact', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
