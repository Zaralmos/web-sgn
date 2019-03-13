import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { promisify } from 'src/app/shared/utils/promisify';

@Injectable()
export class HttpService {

  private readonly options?: { withCredentials: boolean, headers: {} };

  constructor(
    private readonly http: HttpClient,
    private readonly config: ConfigurationService
  ) {
    if (!config.env.production) {
      this.options = { withCredentials: true, headers: { 'crossDomain': 'true' } };
    }
  }

  public async get<T>(url: string) {
    return await promisify<T>(this.http.get<T>(url, this.options));
  }

  public async post<T>(url: string, body: any) {
    return await promisify<T>(this.http.post<T>(url, body, this.options));
  }

  public async put<T>(url: string, body: any) {
    return await promisify<T>(this.http.put<T>(url, body, this.options));
  }

  public async delete<T>(url: string) {
    return await promisify<T>(this.http.delete<T>(url, this.options));
  }

}
