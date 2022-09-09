import { Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent  {

  constructor(private router:Router){}

  /* Para poder validar el Login */
  userName = 'erwin';
  passwordUser = '123456';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  onClickLogin():void{
    console.log('Hice click en el boton de Ingresar')
    this.router.navigateByUrl("/dashboard")
  }

  onClickRegistrar():void{
    console.log('Hice click en el boton de registrar')
    this.router.navigateByUrl('/register');
  }

}

