import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers,RequestOptions }  from '@angular/http';
import { site_url } from '../config/env.config';
import { SheetModel, QuestionModel } from '../model/sheet.model';

import 'rxjs/add/operator/map';

const url = site_url;
const options = new RequestOptions({headers:new Headers({'Content-Type': 'application/json'})});

@Injectable()
export class SheetService {

  constructor(private http: Http) { }

  //handleError
  handleError(error:any){
  	alert(error);
  	return Observable.throw(error.json().error ||'server error');
  }
  //get Sheets 
  getSheets(options?:RequestOptions):Observable<any>{
  	return this.http.get(url+'sheets',options)
  				.map(res=>res.json().data)
          .catch(this.handleError)
  }

  getSheetById(id:string):Observable<any>{
    return this.http.get(url+'sheets/'+id,)
                    .map(res => res.json().data)
                    .catch(this.handleError)
  }

  //delete Sheet
  deleteSheet(id:string):Observable<any>{
  	let _url = url +'sheets/delete' + id;
  	return this.http.delete(_url)
  }

  //post Sheet
  updateSheet(sheet:SheetModel):Observable<any>{
  	let body = JSON.stringify(sheet);
  	return this.http.put(url+'sheets/update',body,options)
  					.map(res => res.json().data)
  					.catch(this.handleError)
  }

  //add Sheet
  newSheet(sheet:SheetModel):Observable<any>{
  	let body = JSON.stringify(sheet);
  	return this.http.post(url+'sheets/add',body,options)
  					.map(res =>res.json().dta)
  					.catch(this.handleError)
  }

  //add question
  newQuestion(question:QuestionModel,id:string):Observable<any>{
    let body = JSON.stringify(question);
    return this.http.post(url+'sheets/'+id+'/updateContent',body,options)
                    .map(res => res.json())
                    .catch(this.handleError)
  }
}
