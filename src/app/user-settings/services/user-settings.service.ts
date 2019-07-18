import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUserSettings from '../../interfaces/user-settings.interface';
import { environment } from '@env/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  constructor(private http: HttpClient) {}

  public getUserSettings(id: number): Observable<IUserSettings> {
    return this.http.get<IUserSettings>(`${API_URL}users/${id}/`);
  }

  public updateUserSettings(
    userSettings: IUserSettings
  ): Observable<IUserSettings> {
    return this.http.put<IUserSettings>(
      `${API_URL}users/${userSettings.id}/`,
      userSettings
    );
  }
}
