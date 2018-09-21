import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//here i am defining the app interfcace which is used to create all your apps 
export interface App {
  name: string;
  desc: string;
  links: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // this is to validate that an app is always selected
  appControl = new FormControl('', [Validators.required]);
  
  
  // this is the array of your apps
  apps: App[] = [
    {name: 'LAVS',desc: 'LAVS', links: ['https://google.com','yourWebsite.com','yourHyperlink']},
    {name: 'NCU',desc: 'NCU', links: ['https://google.com','yourWebsite.com','yourHyperlink']}
  ];
  selected:boolean = false;
  
  ngOnInit(){

  }

  // this is the submit function which is triggered when clicked to display the list of hyperlinks
  onSubmit(array:string[]){
    this.selected = true;
    console.log(array);
  }

  //this is the function to call your service, left it blank as i have no services with me which can fecth data
  callService(){
    console.log('Works');
    // write function here to call your service
  }
}
