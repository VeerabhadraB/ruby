import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger,style,state,transition,animate, animation, keyframes} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('useremail',[
        state('in',style({
          transform:'translateX(0)',
          offset:'0.3'
          }),
        ),
        transition('void=>*', [
          style({
            transform: 'translateX(-200px)',
            offset: '0.3'
          }),
          animate(3000)
        ]),
        transition('void=>*', [
          style({
            transform: 'translateX(300px)',
            offset: '0.3'
          }),
          animate(300)
        ])
      ]),
      trigger('userpassword',[
        state('in',style({
          transform:'translateX(0)',
          offset:'0.3'
          }),
        ),
        transition('void=>*', [
          style({
            transform: 'translateX(500px)',
            offset: '0.3'
          }),
          animate(3000)
        ]),
        transition('void=>*', [
          style({
            transform: 'translateX(200px)',
            offset: '0.3'
          }),
          animate(300)
        ])
      ]),  
  trigger('loginbtn',[
        state('in',style({
          transform:'translateZ(0) scale(0.4)',
          offset:'0.3'
          }),
        ),
        transition('void=>*',[
          animate(1000,keyframes([
            style({
              transform: 'translate(0,0)',
            }),
            style({
              transform: 'translate(100px,100px) ',
            }),
            style({
              transform: 'translate(0px,0px)',
            }),
          ]))
        ]),
      ]), 
    ]
})
export class LoginComponent implements OnInit {
  //currentState;
  state='inanimation';
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
