import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public toggledValue = true;

  public hiddenSidebar(event: boolean) {
    this.toggledValue = event;
  }

}
