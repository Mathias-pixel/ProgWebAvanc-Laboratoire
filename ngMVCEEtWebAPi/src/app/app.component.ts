import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginDTO } from './loginDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEEtWebAPi';

  UserIsConnected : boolean = false;
  loginUsername : string = "";
  loginPassword : string = "123456Zb$";

  ngOnInit() {
    //this.UserIsConnected = localStorage.getItem("token") != null;

  }

  constructor(public http : HttpClient) { }

  

  async Login() : Promise<void>{

    this.SignIn(this.loginUsername , this.loginPassword); 

  }

  async GetPublic() : Promise<void>{

    this.GetPublicText();

  }

  async GetPrivate() : Promise<void>{

   this.GetPrivateTexte(); 

  }

  async SignIn(loginUsername : string, loginPassword : string): Promise<void>{
    
    let loginDTO = new LoginDTO(loginUsername,  loginPassword); 

     let x = await lastValueFrom(this.http.post<any>("https://localhost:5249/Account/Login", loginDTO))

     sessionStorage.setItem("token", x.token);
}
  
async GetPublicText(): Promise<void>{
    
 

   let x = await lastValueFrom(this.http.get<any>("https://localhost:5249/Account/PublicTest"))

  
}
  async GetPrivateTexte(): Promise<void>{
    
   let x = await lastValueFrom(this.http.get<any>("https://localhost:5249/Account/PrivateTest"))

   
}



}
