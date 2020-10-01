import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent implements OnInit {
  ticketcount:any;
  tickets:Ticket[];
  constructor(private showser:TicketService) { }

  ngOnInit(): void {
   this.tickets= this.showser.tickets;
   this.ticketcount=this.tickets.length;
   console.log(this.showser.tickets);
   console.log(this.tickets);
  }

}
