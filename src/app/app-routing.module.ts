import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimesComponent } from './pages/times/times.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SprintdetailComponent } from './pages/sprintdetail/sprintdetail.component';

const routes: Routes = [
  { path: 'projetos', component: ProjetosComponent },
  { path: 'sprints', component: SprintsComponent },
  { path: 'times', component: TimesComponent },
  { path: 'sprint/:id', component: SprintdetailComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
