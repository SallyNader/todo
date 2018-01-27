import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FavoriteService {

  constructor(private _http: Http) { }

  addToFavorite(newFevorite)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/favorite', newFevorite, {headers: headers})
      .map(res => res.json());
  }

  getAllFavorites()
  {
    return this._http.get('http://localhost:8888/favorite')
      .map(res => res.json());
  }

  removeFromFavorite(taskId)
  {
    return this._http.delete('http://localhost:8888/favorite/'+taskId)
      .map(res => res.json());
  }
}
