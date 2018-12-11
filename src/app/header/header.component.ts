import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthserviceService } from "../auth/authservice.service";
@Component({
    selector: 'app-header',
    templateUrl:"./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit{
   @Output() navSelected = new EventEmitter<string>();   
    constructor(private auth:AuthserviceService){}  
    ngOnInit(){

    }
    
    // Naviagetion
    onSelect(navName: string){
        this.navSelected.emit(navName);
        
    }
    logout(){
        this.auth.logOut();
    }
}