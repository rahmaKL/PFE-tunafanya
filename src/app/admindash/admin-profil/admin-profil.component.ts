import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LivreurService } from './../../services/livreur.service';
import { UserServiceService } from './../../services/user-service.service';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.scss']
})
export class AdminProfilComponent implements OnInit {
admin:[];


  constructor(  private router:Router,
    private formBuilder: FormBuilder,
    private UserService :UserServiceService,
    private http: HttpClient) { }


  ngOnInit(): void {

  }

  getAdmin() {
    let id= localStorage.getItem("id")
    this.http.get(`http://localhost:3000/users/getAdmin/${id}`)
      .subscribe(response => {
        console.log(response);
       this.admin = response as any;
      });
  }


}
