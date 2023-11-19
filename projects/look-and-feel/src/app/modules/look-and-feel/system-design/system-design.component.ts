import { Component, OnInit } from '@angular/core';
import { LookAndFeelRepository } from '../../../core/repositories/look-and-feel.repository';
import { LookAndFeelDTO } from '../../../infraestructure/DTO/look-and-feel.dto';

@Component({
  selector: 'app-system-design',
  templateUrl: './system-design.component.html',
  styleUrls: ['./system-design.component.scss']
})
export class SystemDesignComponent implements OnInit {

  lookAF: LookAndFeelDTO = {
    PrimaryColor: '',
    SecondaryColor: '',
    TertiaryColor: '',
    BackgroundColor: '',
    FontName: '',
    ImageBackgroundLogin: '',
    Logo: '',
    ProgramId: ''
  };

  constructor(private lookAndFeelRepository: LookAndFeelRepository) { }

  ngOnInit(): void {
    this.lookAndFeelRepository.getLookAndFeel().subscribe((data: LookAndFeelDTO) => {
      this.lookAF = data;
    })
  }

  onChangeColor(type: string, newColor: string) {
    if (!newColor) return;
    type == '1' ? this.lookAF = {...this.lookAF, PrimaryColor: newColor} : null;
    type == '2' ? this.lookAF = {...this.lookAF, SecondaryColor: newColor} : null;
    type == '3' ? this.lookAF = {...this.lookAF, TertiaryColor: newColor} : null;
    //this.onSaveChanges() // ------> enable the call here to change color in real time
  }

  onSaveChanges() {
    this.lookAndFeelRepository.saveLookAndFeel(this.lookAF);
  }
}
