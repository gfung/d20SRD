import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ResLocals } from '../definitions/user';
import { ToolList } from '..//definitions/toolList';

@Injectable()
export class UserService {
  private userUrl = 'api/user';  // URL to web api
  // private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * Get the current logged in user deatils
   * 
   * @returns {Promise<ResLocals>} 
   * 
   * @memberof UserService
   */
  getUser(): Promise<ResLocals> {
    return this.http
      .get(this.userUrl)
      .toPromise()
      .then(response => {
        return response.json().data as ResLocals;
      })
      .catch(this.handleError);
  }



}

export class ToolService {
  private toolUrl = '/scheduler/tools';  // URL to web api

  constructor(
    private http: Http
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTools(): Promise<ToolList> {
    return this.http
      .get(this.toolUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json().data;
      })
      .catch(this.handleError);
  }
}
