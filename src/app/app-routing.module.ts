import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartLernButtonComponent } from './start-lern-button/start-lern-button.component';
import {ChallengeComponent} from './challenge/challenge.component';


const routes: Routes = [
  { path: '', component: StartLernButtonComponent },
  { path: 'challenge/:letter', component: ChallengeComponent },
  { path: 'challenge', component: ChallengeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
