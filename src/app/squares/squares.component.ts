import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {
  colorTitle:string = 'szín';
  widthTitle:number = 0;
  heightTitle:number = 0;
  @ViewChild('squareElement', {static:false}) squareElement:ElementRef;
 



  constructor() { }

  ngOnInit() {
  }
  setTitlesByCWH(){
    this.colorTitle = this.squareElement.nativeElement.background;
    this.widthTitle = this.squareElement.nativeElement.width;
    this.heightTitle = this.squareElement.nativeElement.height;
  }
}
