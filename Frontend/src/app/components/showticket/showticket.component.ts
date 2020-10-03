import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private showser:TicketService,private route: Router) { }

  ngOnInit(): void {
   this.tickets= this.showser.tickets;
   this.ticketcount=this.tickets.length;
   console.log(this.showser.tickets);
   console.log(this.tickets);
  }
  PrintNav(){
    
    this.route.navigate[('userview')]
  }
}
