export class SignInDataUser{
 UserEmailId : string;
 Password : string;
 constructor(email: string, password: string){
     this.UserEmailId=email;
     this.Password = password;
 }
 getEmail():string{
     return this.UserEmailId;
 }
 getPassword():string{
     return this.Password;
 }
}
export class SignInDataAdmin{
    AdminEmailId : string;
    Password : string;
   constructor(email:string,password: string){
       this.AdminEmailId=email;
       this.Password = password;
   }   
   getEmail():string{
       return this.AdminEmailId;
   }
   getPassword() : string{
       return this.Password;
   }
}