import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { NotificationModule } from './services/notification/notification.module';

const APP_DATE_FORMATS: MatDateFormats={
  parse:{
    dateInput:{day:'numeric',month:'numeric',year:'numeric'},
    },
  display:{
    dateInput:{day:'numeric',month:'numeric',year:'numeric'},
    monthYearLabel:{year:'numeric',month:'short'},
    dateA11yLabel:{year:'numeric',month:'long',day:'numeric'},
    monthYearA11yLabel:{year:'numeric',month:'long'}
  }
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    NotificationModule.forRoot(),
  ],
  providers: [
  {provide:MAT_DATE_LOCALE,useValue:'en-GB'},
  {provide:MAT_DATE_FORMATS,useValue:APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
