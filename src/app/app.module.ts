import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StartLernButtonComponent } from './start-lern-button/start-lern-button.component';

import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import { ChallengeComponent } from './challenge/challenge.component';
import { LetterDetailComponent } from './letter-detail/letter-detail.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { LetterTaskComponent } from './letter-task/letter-task.component';
import { LetterTransformPipe } from './letter-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartLernButtonComponent,
    ChallengeComponent,
    LetterDetailComponent,
    LetterListComponent,
    LetterTaskComponent,
    LetterTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
