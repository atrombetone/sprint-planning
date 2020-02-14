import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SprintPlanning';
  isUserLogged = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) { }

  ngOnInit() {
    this.route.events.subscribe(
      event => {
        if(event instanceof ActivationEnd) {
          this.title = event.snapshot.data['title'];
        }
      });
    //  this.route.events
    //    .pipe(filter(event => event instanceof ActivationEnd))
    //    .subscribe(() => {
    //      this.title = (event as ActivationEnd).snapshot.data['title'];
    //     });
  }

  efetuarLogin() {
    this.isUserLogged = true;
  }
}
