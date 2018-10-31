import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  // กำหนดตัวแปรไว้รับค่าจาก webAPI
  courseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webAPI: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    this.webAPI.getData('feed_course.php').then((result)=>{
      console.log(result);
      this.courseData = result;
    });
  }

}
