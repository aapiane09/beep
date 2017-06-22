import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Message } from './../../models/message/message.interface';
import { Profile } from './../../models/profile/profile.interface';
import { MESSAGE_LIST } from './../../mocks/messages/messages';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;

  messageList: Message[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
