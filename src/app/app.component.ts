import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing';

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('navi', {read: DragScrollComponent}) dss: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveLeftSlid(){
    this.dss.moveLeft();
  }

  moveRightSlid() {
    this.dss.moveRight();
  }

  moveDragons(){
    document.location.href = 'https://www.youtube.com/channel/UCy9TKLF04whVY0J-_5YOgNA';
  }

  moveLib(){
    document.location.href = 'https://www.youtube.com/channel/UC51IQYFqMjtAIr2pG7jIlKQ';
  }

  moveInsta(){
    document.location.href = 'https://www.instagram.com/shevchenko_lib/';
  }

}
