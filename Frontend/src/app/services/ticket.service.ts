import { Injectable } from '@angular/core';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
  tickets:Ticket[];
  addTicket(ticketObj:Ticket)
  {
    this.tickets.push(ticketObj);
  }
}
