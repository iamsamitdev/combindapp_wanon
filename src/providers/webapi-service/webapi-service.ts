import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebapiServiceProvider {

  baseURLAPI:any;
  
  constructor(public http: Http) {
    this.baseURLAPI = "http://192.168.141.72/combindapp_wanon_api/";
  }

  // Post method
  postData(objdata,segment){
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');  
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      this.http.post(this.baseURLAPI+segment,JSON.stringify(objdata),{headers:headers}).subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }

  // Get method
  getData(segment){
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=UTF-8');  
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      this.http.get(this.baseURLAPI+segment,{headers:headers}).subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }

}
