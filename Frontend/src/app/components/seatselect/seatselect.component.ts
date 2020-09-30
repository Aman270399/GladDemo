import { Component, OnInit } from '@angular/core';
import { Seat} from 'src/app/models/Seat';
import { SeatqueryService } from 'src/app/services/seatquery.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seatselect',
  templateUrl: './seatselect.component.html',
  styleUrls: ['./seatselect.component.css']
})
export class SeatselectComponent implements OnInit {

  constructor(private _router: Router, private _seatService: SeatqueryService, private activatedRoute: ActivatedRoute) { }
  seats: Seat[];
  flightId: string;
  departDate: string;

  ngOnInit() {
    console.log(this.flightId);
    console.log(this.departDate);
    this.flightId =(JSON.parse(sessionStorage.getItem("flight"))).FlightId;
    console.log(this.flightId);
    this.departDate =localStorage.getItem('departdate');
    console.log(this.departDate);
    this.getSeatsFromService();
  }

  getSeatsFromService() {
    this._seatService.getSeats(this.flightId, this.departDate).subscribe((res: any) => {
    this.seats = res;
    console.log(this.seats);
    });
  }

  seatnum: string[] = [];

  selectSeat(seatNo: string) {  
    let index = this.seatnum.indexOf(seatNo);
    if (index === -1) {
      alert('You Selected : ' + seatNo)
      this.seatnum.push(seatNo);
      this.seats.forEach((item) => {
        if (item.SeatNo == seatNo) {
          item.status = "myselection";
        }
      });
    }else{
      this.seatnum.splice(index,1);
      this.seats.forEach((item) => {
        if (item.SeatNo === seatNo) {
          item.status = "available";
        }
      });
    }

    console.log(this.seatnum);
  }

  
  onClick1() {
    this._router.navigate(['/pass/'+this.seatnum]);
  }
}