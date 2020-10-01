import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {
  
  carddetailsForm: FormGroup;
  detailsForm: FormGroup;
  paymentForm: FormGroup;
  OtpForm: FormGroup;
  card=["Credit Card", "Debit Card"];
  bank=["HDFC","ICICI", "SBI", "PNB", "Canara", "Kotak"];
  //cardNumber: FormGroup;
  requestSent: boolean=false;
  cardCvv: any;
  current: Number;
  getdetailsform: any;
  makepayment:boolean=false;
  
  
  constructor(private formBuilder: FormBuilder ,private auth_service: AuthService,private router:Router) {}
  ngOnInit() {
    //console.log(this.card[0]);
    this.detailsForm = this.formBuilder.group({
      bank: new FormControl('', [Validators.required]),
      card: new FormControl('', [Validators.required]),
    })
    this.carddetailsForm = this.formBuilder.group({
      cardNumber:['',[Validators.required, Validators.max(16),Validators.pattern("^[0-9]*$")]],
      cardCvv:['',[Validators.required,Validators.max(3),Validators.pattern("^[0-9]*$")]],
      cardHolderName:['',[Validators.required,Validators.pattern("[A-Za-z]+")]],
      mobilenumber:['',[Validators.required,Validators.max(11),Validators.pattern("^[0-9]*$")]]
     })
     
    this.OtpForm = this.formBuilder.group({
      otp: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(9999), Validators.pattern("^[0-9]*$")])
    })
  }
  get f(){
    return this.detailsForm.controls;
  }
  get f2(){
    return this.carddetailsForm.controls;
  }
  
  get f3(){
    return this.OtpForm.controls;
  }
  onSubmit(form)
{
  this.requestSent = true;
}
onSubmit2(form){
  this.makepayment = true;
  this.auth_service.otpverfiy(form.value.mobilenumber).subscribe(data => {
    this.requestSent = true;
    this.current = data;
    console.log(data);
})
}

onSubmit3(form){
  try{
    if(this.current === form.value.otp){
      alert("Payment Successfull!");
      this.makepayment = true;
      
    }
    else{
    alert("Incorrect OTP");
  }
  }
  catch{ }
}
 submit(){
  this.router.navigate(['showticket']);
 }

}
