import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>() ;
  @Output() bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName="";
  newServercontent = "";

  constructor() { }

  ngOnInit() {
  }
  onAddserver(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServercontent
    })
  }
  onAddBluPrint(){
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServercontent
    })
  }
}
