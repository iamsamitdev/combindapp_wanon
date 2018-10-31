import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ShowmemberPage } from '../showmember/showmember';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  fullname:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fullname = localStorage.getItem('fullnameLogin');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  logout(){
    // คำสั่งในการ clear localStorage ออก
    localStorage.removeItem('userLogin');
    localStorage.removeItem('fullnameLogin');
    // ทำการเปลี่ยนไปหน้า login
    this.navCtrl.setRoot(LoginPage);
  }

  showMember(){
    this.navCtrl.push(ShowmemberPage);
  }

}
