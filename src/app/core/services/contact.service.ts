import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../models/contact.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.CONTACT}`;

  constructor(private http: HttpClient) {}

  public create(contact: Contact): Observable<Response> {
    return this.http.post<Response>(`${ContactService.ENDPOINT}`, contact);
  }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(ContactService.ENDPOINT);
  }

  public findById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${ContactService.ENDPOINT}/${id}`);
  }

  public requestAccompaniment(id: string): Observable<Response> {
    return this.http.put<Response>(`${ContactService.ENDPOINT}/${id}/request-accompaniment`, null);
  }
}
