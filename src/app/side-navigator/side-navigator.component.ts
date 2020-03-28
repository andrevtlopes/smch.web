import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.css']
})
export class SideNavigatorComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  onLogout() {
    this.authService.logout();                      // {3}
  }


  }
