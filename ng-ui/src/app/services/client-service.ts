import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClientModel } from "../models/client.model";
import { environment } from "src/environments/environment";
import { CLIENT_CREATE_URL, CLIENT_GET_URL, CLIENT_MANY_URL, CLIENT_UPDATE_URL } from "../constants/clients-endpoints";

@Injectable({
    providedIn: 'root'
  })
  export class ClientService {
  
    constructor(private http: HttpClient){
      
    }

    getMany(searchKeyword?: string) : Observable<ClientModel[]>{
        return this.http.get<ClientModel[]>(`${ environment.apiUrl }${ CLIENT_MANY_URL }?filter=${searchKeyword ? searchKeyword : ''}`);
    }

    get(id: string){
        return this.http.get<ClientModel[]>(`${ environment.apiUrl }${ CLIENT_GET_URL }/${ id }`);
    }

    create(payload: ClientModel){
        return this.http.post(`${ environment.apiUrl }${ CLIENT_CREATE_URL }`, payload);
    }

    udpate(payload: ClientModel){
        return this.http.put(`${ environment.apiUrl }${ CLIENT_UPDATE_URL }`, payload);
    }

  }
