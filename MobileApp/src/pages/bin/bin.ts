import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bin',
  templateUrl: 'bin.html',

})
export class BinPage {

categories: any = ['Plastic', 'Glass', 'Paper', 'Metal', 'Wood', 'Electronics', 'Other'];
newCards: any = [];
newAmounts: any = [];
myDate : String = new Date().toISOString().slice(0, 10);
time = Date().slice(16,21);

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController){}

  ionViewDidLoad() {
    //
  }

  changeAmount(cat){
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
                        let index = this.newCards.indexOf(cat);

                        if(index > -1){
                          this.newAmounts[index] = data;
                        }
                    }
                }
            ]
        });

        prompt.present();

    }

    remove(no){
      (this.newCards).splice(no, 1);
    }

  addPlasticCard(){
    this.newCards.push("Plastic");
    this.newAmounts.push(0);
  }
  addGlassCard(){
    this.newCards.push("Glass");
    this.newAmounts.push(0);
  }
  addPaperCard(){
    this.newCards.push("Paper");
    this.newAmounts.push(0);
  }
  addMetalCard(){
    this.newCards.push("Metal");
    this.newAmounts.push(0);
  }
  addWoodCard(){
    this.newCards.push("Wood");
    this.newAmounts.push(0);
  }
  addElectronicsCard(){
    this.newCards.push("Electronics");
    this.newAmounts.push(0);
  }
  addOtherCard(){
    this.newCards.push("Other");
    this.newAmounts.push(0);
  }

}
