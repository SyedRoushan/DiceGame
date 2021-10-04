import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dice-Game';
  public name = "Roushan";
  tableStyle = "solid 2px black";
  prop = undefined;
  isSpecial = true;

  print(){
    console.log("Hey Bitch!");
    this.name = "omar";
  }

  danger = "danger";
  success = "success";
  special = "special";

  classes = "success special";

  hasError = true;

  stylesObject = {
    "success": !this.hasError,
    "danger": this.hasError,
    "special": this.isSpecial
  }

  classPrecedanceObject = {
    "success": false,
    "special": this.isSpecial
  }

  styleString = "color: aqua; font-size: 3rem";

  styleObject = {
    "color": "blue",
    "font-size": "2rem",
    "border" : "2px solid red"
  }

  nameColor = "green";
  fontSize = 5;

  onClick(){
    console.log("Button was clicked");
  }

  greeting = '';

  onClickEvent(event: any){
    console.log(event);
    this.greeting = this.greeting ? '' : "Hello World";
  }

  syncData = '';

  setUpperCaseData(event: any){

    console.log(event);
    event = event.toUpperCase();
    console.log(typeof(event));
    this.syncData = event.toUpperCase();
  }

  firstExample = null;

  // Structural Directives

  displayGreeting = true;

  items = [1,2,3,4,5,5,6,7,8,8,9];

  changeArray(){
    this.items[this.items.length - 1]++;
    console.log(this.items);
    
  }

  trackByItems(index: number, item: any): number { 
    return item; 
  }

  color = "gray";

}
