import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger,style,state,transition,animate, animation} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('inputRight',[
        state('in',style({
          transform: 'translateX(-20) scale(1)',
          offset:'0.4'
          }),
        ),
      ]),
    ]
})
export class LoginComponent implements OnInit {
  //currentState;
  state='inanimation';
  inanimation = 'out';
  timeset=true;

  constructor(private fb:FormBuilder) { }
  login:FormGroup;
  ngOnInit() {
    this.login = new FormGroup({
      "username": new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      "useremail": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.minLength(4)])
    });
  }
  settime = setTimeout(()=>this.timeset=false,30000)
  get username(){
    return this.login.get('username');
  }
  get useremail(){
    return this.login.get('useremail');
  }
  get password(){
    return this.login.get('password');

  }
  formSubmit(){
    console.log(this.login.value);
    this.login.reset();
  }

}
