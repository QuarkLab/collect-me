import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bin',
  templateUrl: 'bin.html',

})
export class BinPage {

categories: any = ['Plastic','Paper','Glass','Wood','Metal'];
newCards: any = [];
myDate : String = new Date().toISOString();
time = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BinPage');
  }

  changeAmount(amount){
        let prompt = this.alertCtrl.create({
            title: 'Add Amount',
            inputs: [{
                name: 'amount'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.newCards.indexOf(amount);

                        if(index > -1){
                          this.newCards[index] = data;
                        }
                    }
                }
            ]
        });

        prompt.present();

    }

  addCard_plastic(){
    this.newCards.push("Plastic");
    console.log("card added" );
  }
  addCard_glass(){
    this.newCards.push("Glass");
    console.log("card added" );
  }
  addCard_paper(){
    this.newCards.push("Paper");
    console.log("card added" );
  }
  addCard_metal(){
    this.newCards.push("Metal");
    console.log("card added" );
  }
  addCard_wood(){
    this.newCards.push("Wood");
    console.log("card added" );
  }


}
