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
  seats: Seat[] = [{seatNo:"A1",status:"booked",class:"economy"},{seatNo:"A2",status:"available",class:"economy"},{seatNo:"A3",status:"available",class:"economy"},
  {seatNo:"A4",status:"available",class:"economy"},{seatNo:"A5",status:"available",class:"economy"},{seatNo:"A6",status:"available",class:"economy"},{seatNo:"A7",status:"available",class:"economy"}
  ,{seatNo:"A8",status:"available",class:"economy"},{seatNo:"B1",status:"available",class:"economy"},{seatNo:"B2",status:"available",class:"economy"},{seatNo:"B3",status:"available",class:"economy"},
  {seatNo:"B4",status:"available",class:"economy"},{seatNo:"B5",status:"booked",class:"economy"},{seatNo:"B6",status:"available",class:"economy"},{seatNo:"B7",status:"available",class:"economy"},{seatNo:"B8",status:"available",class:"economy"},
  {seatNo:"C1",status:"available",class:"economy"},{seatNo:"C2",status:"available",class:"economy"},{seatNo:"C3",status:"available",class:"economy"}, {seatNo:"C4",status:"available",class:"economy"},{seatNo:"C5",status:"booked",class:"economy"},{seatNo:"C6",status:"available",class:"economy"},{seatNo:"C7",status:"available",class:"economy"},{seatNo:"C8",status:"available",class:"economy"}
  ,{seatNo:"D1",status:"available",class:"economy"},{seatNo:"D2",status:"booked",class:"economy"},{seatNo:"D3",status:"available",class:"economy"},{seatNo:"D4",status:"available",class:"economy"},{seatNo:"D5",status:"available",class:"economy"},
  {seatNo:"D1",status:"available",class:"economy"},{seatNo:"D2",status:"booked",class:"economy"},{seatNo:"D3",status:"available",class:"economy"},{seatNo:"D4",status:"available",class:"economy"},{seatNo:"D5",status:"available",class:"economy"}];
  flightId: string;
  departDate: string;

  ngOnInit() {
    // console.log(this.flightId);
    // console.log(this.departDate);
    // this.flightId =JSON.parse(sessionStorage.getItem("flight")).FlightId;
    // console.log(this.flightId);
    // this.departDate =localStorage.getItem('departdate');
    // console.log(this.departDate);
    // this.getSeatsFromService();
  }

  // getSeatsFromService() {
  //   this._seatService.getSeats(this.flightId, this.departDate).subscribe((res: any) => {
  //     this.seats = res;
  //     console.log(this.seats);
  //   });
  // }

  seatnum: string[] = [];

  selectSeat(seatNo: string) {  
    let index = this.seatnum.indexOf(seatNo);
    if (index === -1) {
      //alert('You Selected : ' + seatNo)
      this.seatnum.push(seatNo);
      this.seats.forEach((item) => {
        if (item.seatNo === seatNo) {
          item.status = "myselection";
        }
      });
    }else{
      this.seatnum.splice(index,1);
      this.seats.forEach((item) => {
        if (item.seatNo === seatNo) {
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