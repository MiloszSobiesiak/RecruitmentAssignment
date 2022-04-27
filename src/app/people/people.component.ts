import { Component, OnInit , OnDestroy} from '@angular/core';
import { HttpService } from '../services/http.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {
  user: any;
  number: number = 2000;
  obs = interval(this.number)
  sub: any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
      this.newPerson()
      this.intervalfunction()
      
  }

  newPerson(){
    this.http.getPerson().subscribe(
      (data: any) => {
        this.user = data.results[0];
      },
      (err: any) => {
        alert('Something went wrong!')
      }
    );
  }

  buttonclick(){
    this.newPerson()
    this.sub.unsubscribe()
    this.obs = interval(this.number)
    this.intervalfunction()
  }

  intervalfunction(){
    this.sub =  this.obs.subscribe( d =>{
      this.newPerson()
      console.log(d)
    }
    )
  } 
  mouseEnter(zmienna:string){
    console.log(zmienna)
    this.sub.unsubscribe()

  }

  mouseLeave(){
    console.log('Naura')
    this.intervalfunction()
  }


ngOnDestroy(): void {
  this.sub.unsubscribe()
}
}
