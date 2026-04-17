import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; //use on project
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton],
})
export class HomePage {
  status:string = "";
  constructor(private storage:Storage) {}

  async ionViewWillEnter(){
    await this.storage.create();
    this.status = await this.storage.get('myStatus')
  }
}
