import { Component } from '@angular/core';
import {StyleClass} from 'primeng/styleclass';
import {Ripple} from 'primeng/ripple';
import {Avatar} from 'primeng/avatar';
import {InputSwitch} from 'primeng/inputswitch';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'app-root',
  imports: [
    StyleClass,
    Ripple,
    Avatar,
    InputSwitch,
    ButtonDirective,
    Textarea,
    InputText,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email: string='@aptitudepro';
  contacto: string='contacto@aptitudepro.com';
}
