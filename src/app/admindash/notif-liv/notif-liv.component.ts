import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export class Livreur {
  constructor(
    public id: number,
    public prix: number,
    public date: Date,
    public quantite: number,
    public status: string,
    public adresse_livraison: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) {}
}

@Component({
  selector: 'app-notif-liv',
  templateUrl: './notif-liv.component.html',
  styleUrls: ['./notif-liv.component.scss']
})
export class NotifLivComponent implements OnInit {
  private titlee: string = 'Browser Push Notifications!';
 
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 livs = [];
 dtElement: any;



  httpClient: any;
  constructor( private http: HttpClient,private modalService: NgbModal
    ) {
     }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }
    this.getListliv()
  }
//Affichage cmdes
getListliv(){
  
  this.http.get('http://localhost:3000/livreur/getAll')
 .subscribe( response => {
   console.log(response);
   this.livs = response as any;
 });
  }

   openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'green-modal' });
  }

 }

