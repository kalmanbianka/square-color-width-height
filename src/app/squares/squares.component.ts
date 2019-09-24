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
  @ViewChild('papayawhipSquare', {static:false}) papayawhipSquare:ElementRef;
  @ViewChild('plumSquare', {static:false}) plumSquare:ElementRef;
  @ViewChild('powderblueSquare', {static:false}) powderblueSquare:ElementRef;
  @ViewChild('rebeccapurpleSquare', {static:false}) rebeccapurpleSquare:ElementRef;

 



  constructor() { }

  ngOnInit() {
  }
  setTitlesByCWHPapaya(){
    this.colorTitle = this.papayawhipSquare.nativeElement.background;
    this.widthTitle = this.papayawhipSquare.nativeElement.width;
    this.heightTitle = this.papayawhipSquare.nativeElement.height;
  }
}
