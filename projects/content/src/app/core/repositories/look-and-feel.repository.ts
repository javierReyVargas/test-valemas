import { Injectable } from "@angular/core";
import { LookAndFeelService } from "../../infraestructure/services/look-and-feel.service";
import { LookAndFeelDTO } from "../../infraestructure/DTO/look-and-feel.dto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class LookAndFeelRepository {

  constructor(private lookAndFeelService: LookAndFeelService) {}

  getLookAndFeel(): Observable<LookAndFeelDTO> {
    return this.lookAndFeelService.getLookAndFeel();
  }


}
