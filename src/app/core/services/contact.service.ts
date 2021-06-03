import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.CONTACT}`;

  constructor(private http: HttpClient) {}

  public create(contact: Contact): Observable<Boolean> {
    return this.http.post<Boolean>(ContactService.ENDPOINT, contact);
  }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(ContactService.ENDPOINT);
  }
}
