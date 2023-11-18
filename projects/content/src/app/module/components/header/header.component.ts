import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isSidebarHidden: boolean = true;
  @Output() toggleSidebarEvent = new EventEmitter();


  onToggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
