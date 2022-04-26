import { Injectable } from '@angular/core';
import {WebSocketUtl} from "./utils/websocket-utl";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocketUtl<string> | null

  constructor() {
    this.socket = null;
  }
  connect(): Observable<string>{
    if (!this.socket){
      this.socket = new WebSocketUtl()
      this.socket.connect()

      this.socket.errorMessages.subscribe(value => {
        console.log(value);
        })
    }
    return this.socket.messages
  }

  sendMessage(message: string): void{
    this.socket?.sendMessage(message)
  }

}
