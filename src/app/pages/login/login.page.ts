import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonIcon,
  IonFabButton,
  IonText,
  IonItem,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    RouterModule,
    ReactiveFormsModule,
    IonText,
    IonFabButton,
    IonIcon,
    IonFab,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  ionicForm!: FormGroup;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,

    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
          Validators.required,
        ],
      ],
    });
  }
}
