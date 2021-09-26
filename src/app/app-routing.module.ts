import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
