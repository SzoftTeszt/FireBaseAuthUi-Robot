import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBaseAuth';
  username=""
  constructor(private ms:NgbModal,
    public auth: AngularFireAuth
    ){}
  public open(modal:any){
    this.ms.open(modal);
  }

  sikeresBelepes(event:any){
    console.log("Sikeresen Beléptünk!");
    console.log(event);
    if (event.authResult.user.displayName)
      this.username=event.authResult.user.displayName;
      else this.username=event.authResult.user.email;
  }

  sikertelenBelepes(event:any){
    console.log("Nem sikerült!");
    console.log(event);
  }
}
