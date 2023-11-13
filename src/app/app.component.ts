import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.example();
    
  }

example(){
  var variable1='Hello';
  let variable2='world';
  const variable3='welcome';

  if(2>1){
    var variable1='goodbye';
    let variable2="universe";
    console.log('1',variable1);
    console.log('2',variable2);
    console.log('3',variable3);
  }

  console.log('4',variable1);
  console.log('5',variable2);
  console.log('6',variable3);
}
} 