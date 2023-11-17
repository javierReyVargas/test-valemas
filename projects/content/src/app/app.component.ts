import { Component, OnInit } from '@angular/core';
import { LookAndFeelRepository } from './core/repositories/look-and-feel.repository';
import { LookAndFeelModel } from './core/models/lookAndFeel.model';
import { applyTheme } from './styleLoad';
import { LookAndFeelDTO } from './infraestructure/DTO/look-and-feel.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private lookAndFeelRepository: LookAndFeelRepository) { }

  ngOnInit(): void {
    this.lookAndFeelRepository.getLookAndFeel().subscribe(
      {
        next: (lookAndFeel: LookAndFeelDTO|LookAndFeelModel) => {
          applyTheme(lookAndFeel as LookAndFeelModel);
        },
        error: (error) => {
          console.log('error: ', error);
        }
      }
    );
  }

}
