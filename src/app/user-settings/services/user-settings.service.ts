import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../user-settings-container/user-settings';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getUserSettings(): Observable<{}> {
    return this.http.get(`${this.SERVER_URL + 'userSettings'}`);
  }

  public updateUserSettings(userSettings: IUser): Observable<{}> {
    return this.http.put(
      `${this.SERVER_URL + 'userSettings'}/${userSettings.id}`,
      userSettings
    );
  }
}
