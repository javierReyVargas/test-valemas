import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

  saveLookAndFeel(lookAndFeel: LookAndFeelDTO): void {
    this.saveOnDocument(lookAndFeel);
    return this.manageStorageService.setItem(lookAndFeel);
  }

  private saveOnDocument(lafData: LookAndFeelDTO) {
    document.documentElement.style.setProperty('--ngx-color-primary', lafData.PrimaryColor);
    document.documentElement.style.setProperty('--ngx-color-secondary', lafData.SecondaryColor);
    document.documentElement.style.setProperty('--ngx-color-tertiary', lafData.TertiaryColor);
    document.documentElement.style.setProperty('--imagen-background-login', lafData.ImageBackgroundLogin);
  }

}
