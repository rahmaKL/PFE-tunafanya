import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../services/user-service.service';

export class Client {

  constructor(
    public tel: number,
    public adresse: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) { }
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  updateForm: FormGroup;
  clts: [];
  isLoggedin: boolean = null;
  form: any = {
    fullname: null,
    tel:null,
    adresse: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(  private router:Router,
    private formBuilder: FormBuilder,
    private userService: UserServiceService,

    private http: HttpClient) { }


  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      fullname : ['', Validators.required],
      tel: ['', Validators.required],
      adresse:['', Validators.required]
    });
  }
  onSubmit(form): void {
    const { fullname, tel, adresse } = this.form;
    let id = localStorage.getItem("id");
    console.log(this.form);
    this.userService.updateC(id,fullname, tel, adresse).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
    );
  }

  //  Affichage clits
 getClt() {
  this.http.get('http://localhost:3000/client/getAll')
    .subscribe(response => {
      console.log(response);
     this.clts = response as any;
    });
}
}
