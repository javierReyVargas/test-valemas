import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LookAndFeelService } from "../../infraestructure/services/look-and-feel.service";
import { LookAndFeelDTO } from "../../infraestructure/DTO/look-and-feel.dto";

@Injectable({
  providedIn: 'root'
})
export abstract class LookAndFeelRepository {

  constructor(private lookAndFeelService: LookAndFeelService) {}

  getLookAndFeel(): Observable<LookAndFeelDTO> {
    return this.lookAndFeelService.getLookAndFeel();
  }

  saveLookAndFeel(lookAndFeel: LookAndFeelDTO): void {
    return this.lookAndFeelService.saveLookAndFeel(lookAndFeel);
  }


}
