import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-showmember',
  templateUrl: 'showmember.html',
})
export class ShowmemberPage {

   // กำหนดตัวแปรไว้รับค่าจาก web api
   responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webAPI: WebapiServiceProvider) {

  }

  ionViewDidLoad() {
    this.webAPI.getData("feed_member.php").then((result) => {
      console.log(result);
      // this.responseData = Array.of(result); // กรณีส่งมาเป็น object
      this.responseData = result;
    },(error)=>{
      console.log(error); 
    });
  }

}
