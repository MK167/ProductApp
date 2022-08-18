import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  ValidationText: any;

  constructor(fb: FormBuilder, private authSer: AuthService, private router: Router) {
    this.loginForm = fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  login(formData: any) {

    let Login = {
      username: this.loginForm.get('userName').value,
      password: this.loginForm.get('password').value
    }

    this.authSer.signIn(Login).subscribe((data) => {
      console.log('Token Data ', data)
      this.authSer.isLoggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);

    })

  }

}
