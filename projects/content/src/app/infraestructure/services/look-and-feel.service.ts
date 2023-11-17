import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LookAndFeelDTO } from '../DTO/look-and-feel.dto';

@Injectable({
  providedIn: 'root'
})
export class LookAndFeelService {
  private readonly lookAndFeelUrl = 'assets/jsons/lookandfeel.json';

  constructor(private http: HttpClient) { }

  getLookAndFeel(): Observable<LookAndFeelDTO> {
    return this.http.get<LookAndFeelDTO>(this.lookAndFeelUrl);
  }

}
