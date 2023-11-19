import { Injectable } from '@angular/core';
import { LookAndFeelDTO } from '../DTO/look-and-feel.dto';
const LOOK_AND_FEEL_KEY = 'look-and-feel';
@Injectable({
  providedIn: 'root'
})
export class ManageStorageService {

  setItem(lookAndFeel: LookAndFeelDTO) {
    sessionStorage.setItem(LOOK_AND_FEEL_KEY, JSON.stringify(lookAndFeel));
  }

  getItem() {
    const item = sessionStorage.getItem(LOOK_AND_FEEL_KEY);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
}
