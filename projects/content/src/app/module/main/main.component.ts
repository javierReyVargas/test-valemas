import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isSidebarHidden: boolean = true;
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
