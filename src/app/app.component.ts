import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [{type:"server",name:"new test server",content:"hey this is a test server for propty or data binding to child"}];
  // newServerAdded(serverData:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type: 'server',
  //     name:serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  // newBluePrintAdded(bluePrintData:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent
  //   })
  // }
  navString = 'recipe';
  navgate(navName){
    this.navString = navName;
  }
  
}
