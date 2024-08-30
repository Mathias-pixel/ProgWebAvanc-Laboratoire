import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginDTO } from './loginDTO';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'ngMVCEEtWebAPi';

  UserIsConnected : boolean = false;
  loginUsername : string = "";
  wordListPublic : string[] = []; 
  wordListPrivate : string[] = []; 
 

  ngOnInit() {
    this.UserIsConnected = sessionStorage.getItem("token") != null;


  }

  constructor(public http : HttpClient) { }

  

  async Login() : Promise<void>{

    this.SignIn(this.loginUsername); 

  }

  async GetPublic() : Promise<void>{

    this.wordListPublic.push(await  this.GetPublicText());

  }

  async LogOut() : Promise<void>{

    sessionStorage.removeItem("token");

  }

  async GetPrivate() : Promise<void>{

    this.wordListPrivate.push( await this.GetPrivateTexte()); 

  }

  async SignIn(loginUsername : string): Promise<void>{
    
    let loginDTO = new LoginDTO(loginUsername,  "123456Zb$"); 

     let x = await lastValueFrom(this.http.post<any>("https://localhost:5249/api/Account/Login", loginDTO))
     console.log(x);
     sessionStorage.setItem("token", x.token);
}
  
async GetPublicText(): Promise<string>{
    
 

   let x = await lastValueFrom(this.http.get<any>("https://localhost:5249/api/Account/PublicTest"))
   console.log(x);
    return x ; 
  
}
  async GetPrivateTexte(): Promise<string>{
    
   let x = await lastValueFrom(this.http.get<any>("https://localhost:5249/api/Account/PrivateTest"))
console.log(x);
  return x;
   
}


}
