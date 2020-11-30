import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public toggleValue = true;
  @Output() toggleStatus = new EventEmitter<boolean>();

  public toggled() {
    if (this.toggleValue === undefined) {
      this.toggleValue = true;
    }

    this.toggleValue = !this.toggleValue;
    console.log(this.toggleValue);
    this.toggleStatus.emit(this.toggleValue);
  }
}
