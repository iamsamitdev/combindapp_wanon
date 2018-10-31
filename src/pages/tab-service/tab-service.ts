import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-tab-service',
  templateUrl: 'tab-service.html',
})
export class TabServicePage {

  // กำหนดตัวแปรไว้รับค่าจาก webAPI
  memberData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webAPI: WebapiServiceProvider) {

  }

  ionViewDidLoad() {
    this.webAPI.getData('feed_member.php').then((result)=>{
      console.log(result);
      this.memberData = result;
    });
  }

}
