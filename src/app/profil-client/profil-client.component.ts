import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export class User {

  constructor(
    public id: number,
    public email: string,
    public role: string,

    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) { }
}


@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.scss']
})
export class ProfilClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
