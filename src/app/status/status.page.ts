import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular'; //import ionic storage for saving data locally

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton]
})
export class StatusPage implements OnInit {
  status:string = ""; //store selected status
  constructor(private storage:Storage) { } //ionic storage service into component

  //method to save selected status to local storage
  async saveStatus(){
    console.log(this.status);
    await this.storage.create(); //makes sure the storage is initialised
    await this.storage.set('myStatus', this.status); //saves the status under 'myStatus' key
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.status = await this.storage.get('myStatus') //retrieves saved status from storage and assigns it to variable
  }

}
