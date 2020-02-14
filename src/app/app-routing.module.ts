import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimesComponent } from './pages/times/times.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SprintdetailComponent } from './pages/sprintdetail/sprintdetail.component';

const routes: Routes = [
  { path: 'projetos', component: ProjetosComponent, data: {title: 'Projetos'}},
  { path: 'sprints', component: SprintsComponent, data: {title: 'Sprints'} },
  { path: 'times', component: TimesComponent, data: {title: 'Times'} },
  { path: 'sprint/:id', component: SprintdetailComponent, data: {title: 'Sprint detail'} },
  { path: '**', component: HomeComponent, data: {title: 'Home'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
