import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.scss']
})
export class ClientsDetailComponent implements OnInit {
  isLoading: boolean = false;
  client : ClientModel;
  constructor(private clientService: ClientService, private modalRef: BsModalRef) { 
    this.client = new ClientModel('', '', '', '', '');
  }

  ngOnInit(): void {

  }

  createClient(): void { 
    this.isLoading = true;
    this.clientService.create(this.client).subscribe({
      next : (response: any) => {
        console.log(response);
        this.closeDialog();
      },
      complete: () => this.isLoading = true,
      error: (err : any) => console.log(err)
    });
  }

  closeDialog(): void{
    this.modalRef.hide();
  }
}
