import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { LookAndFeelDTO } from '../DTO/look-and-feel.dto';
import { ManageStorageService } from './manage-satorage.service';

@Injectable({
  providedIn: 'root'
})
export class LookAndFeelService {
  private readonly lookAndFeelUrl = 'assets/jsons/lookandfeel.json';

  constructor(private http: HttpClient,
              private manageStorageService: ManageStorageService) { }

  getLookAndFeel(): Observable<LookAndFeelDTO> {
    const storeDataLaf = this.manageStorageService.getItem();

    if (storeDataLaf) {
      return of(storeDataLaf);
    } else {
      return this.http.get<LookAndFeelDTO>(this.lookAndFeelUrl)
      .pipe(
        map((data) => {
          this.manageStorageService.setItem(data);
          return data;
        })
      );
    }
  }

}
