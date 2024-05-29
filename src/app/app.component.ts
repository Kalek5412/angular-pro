import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-angular-app';

  constructor(private afs:AngularFirestore){}

  ngOnInit(){
    this.afs.collection('test').snapshotChanges().subscribe(personas=>{
      console.log(personas.map( x => x.payload.doc.data()));
    })
  }
}
