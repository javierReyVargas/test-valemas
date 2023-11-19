import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'laf-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() colorPredeterminate: string = '';
  @Output() colorChange = new EventEmitter<string>();

  onChangeColor(event: any) {
    this.colorChange.emit(event.target.value);
  }
}
