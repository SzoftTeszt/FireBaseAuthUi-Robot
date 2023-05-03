import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule   } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { enviroment } from './enviroments';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
          requireDisplayName: false,
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
      
  ],
  //term of service
  tosUrl: '<your-tos-link>',
  //privacy url
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  //credentialHelper:             firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
