import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  isLoading: boolean = false;
  clientsList: ClientModel[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(searchKeyword? : string){
    this.isLoading = true;
    this.clientService.getMany(searchKeyword).subscribe({
    next:(response : any[]) => 
    {
      console.log(response)
      this.clientsList = response;
    },
    complete: () => this.isLoading = true,
    error: (err : any) => console.log(err)
    });
  }


}
