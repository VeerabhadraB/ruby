import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger,style,state,transition,animate} from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('2000ms'))
    ])]
})
export class LoginComponent implements OnInit {
  //currentState;
  constructor(private fb:FormBuilder) { }
  login:FormGroup;
  ngOnInit() {
    this.login = new FormGroup({
      "username": new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      "useremail": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.minLength(4)])
    });
  }
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
  // title = 'angularanimation01';
  // toState = 'state1';
  // changeState(state: any) {
  //   this.toState = state;
  // }
}
