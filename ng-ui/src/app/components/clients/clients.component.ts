import { Component, DebugEventListener, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { ClientsDetailComponent } from '../clients-detail/clients-detail.component';
import { ClientsListComponent } from '../clients-list/clients-list.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  searchValue: string = '';
  @ViewChild('clientList', { static: false }) clientsList?: ClientsListComponent;
  modelChanged: Subject<string> = new Subject<string>();

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { 
    this.modelChanged
      this.modelChanged.pipe(
        debounceTime(300), 
        distinctUntilChanged())
        .subscribe(searchKeyword => {
          this.clientsList?.loadClients(searchKeyword);
        });
  }

  ngOnInit(): void {
  }

  showCreateClient(){
    const modalConfig : ModalOptions = {
      initialState: {
        title : 'Create Client'
      }
    }
    this.bsModalRef = this.modalService.show(ClientsDetailComponent, modalConfig);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.modalService.onHidden.subscribe(() => {
      this.clientsList?.loadClients();
    });

  }

  search(searchValue : any) {
    this.modelChanged.next(searchValue);
  }

}
