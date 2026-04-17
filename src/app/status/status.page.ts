import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton]
})
export class StatusPage implements OnInit {
  status:string = "";
  constructor(private storage:Storage) { }

  async saveStatus(){
    console.log(this.status);
    await this.storage.create();
    await this.storage.set('myStatus', this.status);
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.status = await this.storage.get('myStatus')
  }

}
