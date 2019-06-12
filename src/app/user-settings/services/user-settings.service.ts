import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUserSettings from '../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getUserSettings(): Observable<IUserSettings> {
    return this.http.get<IUserSettings>(`${this.SERVER_URL + 'userSettings'}`);
  }

  public updateUserSettings(
    userSettings: IUserSettings
  ): Observable<IUserSettings> {
    return this.http.put<IUserSettings>(
      `${this.SERVER_URL + 'userSettings'}/${userSettings.id}`,
      userSettings
    );
  }
}
