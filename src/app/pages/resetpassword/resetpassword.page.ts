import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonButton,
    IonIcon,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ResetpasswordPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  reset() {
    // this.authService.resetPassword(this.email).then(() => {
    //   console.log('sent'); //show confirmation dialog
    //   this.presentToast();
    // });
  }
  async presentToast() {
    // const toast = await this.toastController.create({
    //   message: 'Your reset password link has been sent on your email',
    //   duration: 2000, // Duration in milliseconds
    //   position: 'bottom', // Position of the toast (top, bottom, middle)
    // });
    // toast.present();
    // toast.onDidDismiss().then(() => {
    //   this.router.navigate(['/login']);
    // });
  }
}
