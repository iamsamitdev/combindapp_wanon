import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // กำหนดตัวแปรไว้รับค่าจากฟอร์ม
  userData = {
    "username":"",
    "password":""
  }

  // กำหนดตัวแปรไว้รับค่าจาก web api
  responseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public webAPI: WebapiServiceProvider,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register()
  {
    this.navCtrl.setRoot(RegisterPage);
  }

  loginProcess(){
    this.webAPI.postData(this.userData,"login.php").then((result)=>{
      // console.log(result);
      this.responseData = result;      
      if(this.responseData.userData != null){

        // บันทึกข้อมูลการ  login ลงตัวแปรแบบ localStorage
        localStorage.setItem("userLogin",this.responseData.userData.username);
        localStorage.setItem("fullnameLogin",this.responseData.userData.fullname);

        let alert = this.alertCtrl.create({
         // title: 'สถานะการเข้าระบบ',
         // subTitle: 'เข้าระบบสำเร็จ',
         message:"<center><img src='assets/imgs/success.png' width='100'><p style='margin-top:0px'>เข้าระบบสำเร็จ</p></center>'",
          buttons: [
            {
              text:'ปิดหน้าต่าง',
              handler: () => {
                // เหตุการณ์เมื่อกดปิดหน้าต่าง
                this.navCtrl.setRoot(TabsPage);
              }
            }
          ]
        });
        alert.present();
      }else{
        let alert = this.alertCtrl.create({
          // title: 'สถานะการเข้าระบบ',
          // subTitle: 'ข้อมูลเข้าระบบไม่ถูกต้อง',
          message:"<center><img src='assets/imgs/warning.png' width='100'><p style='margin-top:0px'>ข้อมูลเข้าระบบไม่ถูกต้อง</p></center>'",
          buttons: ['ปิดหน้าต่าง']
        });
        alert.present();
      }
    });
  }

  onChange(key){
    if(key==13){
      this.loginProcess();
    }
  }

}
