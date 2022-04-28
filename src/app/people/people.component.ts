import { Component, OnInit , OnDestroy} from '@angular/core';
import { HttpService } from '../services/http.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {
  userdata: any;
  currentsec: number = 0;
  timer = interval(1000)
  settimer: any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
      this.newPerson()
      this.intervalfunction()   
  }

  buttonclick(){
    this.newPerson()
    this.currentsec = 0;
  }

  intervalfunction(){
    this.settimer =  this.timer.subscribe( (d) =>{
      console.log(this.currentsec)
      this.currentsec = this.currentsec + 1;
      if(this.currentsec===5){
        this.currentsec = 0;
        this.newPerson();
      }
    })  
  } 

  mouseEnter(){
    this.settimer.unsubscribe()
  }

  mouseLeave(){
    this.intervalfunction()
  }

  newPerson(){
    this.http.getPerson().subscribe(
      (data: any) => {
        this.userdata = data.results[0];
      },
      () => {
        alert('Something went wrong!')
      });
  }

  ngOnDestroy(): void {
  this.settimer.unsubscribe()
  }
}