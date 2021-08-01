import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'octans-angular';
  user:any;

  searchUsers(search:any){
      this.user = search;
  }
}
