import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { TimesComponent } from './pages/times/times.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SprintsComponent } from './pages/sprints/sprints.component';
import { HomeComponent } from './pages/home/home.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { SprintdetailComponent } from './pages/sprintdetail/sprintdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesComponent,
    ProjetosComponent,
    SprintsComponent,
    HomeComponent,
    SprintdetailComponent,
    LoginComponent,
    TesteComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AvatarModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
