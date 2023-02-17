import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public AuthService: AuthService){}

  user: any
  ngOnInit(): void {
    // onAuthStateChanged(this.AuthService.auth,(user)=>{
    //   if(user != null)
    //   {
    //     this.user = user;
    //   }else
    //   {
    //      this.user = null;
    //   }
    // })
  }
  show()
  {
    this.user = this.AuthService.people;
  }
  login()
  {
    this.AuthService.login().then((res)=>{
      console.log(res);
    });
  }

   async logout()
  {
    await this.AuthService.logout();
  }
}
