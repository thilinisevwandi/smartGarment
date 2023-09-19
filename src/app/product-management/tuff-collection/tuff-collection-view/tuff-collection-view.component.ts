import { Component } from '@angular/core';

@Component({
  selector: 'app-tuff-collection-view',
  templateUrl: './tuff-collection-view.component.html',
  styleUrls: ['./tuff-collection-view.component.scss']
})
export class TuffCollectionViewComponent {
  isEnableDescription: boolean = true;
  isEnableMaterial: boolean = false;
  isEnableSize: boolean = false;
  isEnableConfirmation: boolean = false;
  activeIndex: number = 0;

  items: any[]  = [
    {
        label: 'Description',
        routerLink: 'tuffCollection/material'
    },
    {
      label: 'Size',
      routerLink: 'seat'
    },
    // {
    //     label: 'Material',
    //     routerLink: 'seat'
    // },
    // {
    //     label: 'Payment',
    //     routerLink: 'payment'
    // },
    {
        label: 'Confirmation',
        routerLink: 'confirmation'
    }
];

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    if(this.activeIndex == 1){
      this.isEnableDescription = false;
      this.isEnableMaterial = false;
      this.isEnableSize = true;
      this.isEnableConfirmation = false;
    }
    else if(this.activeIndex == 2){
      this.isEnableDescription = false;
      this.isEnableMaterial = false;
      this.isEnableSize = false;
      this.isEnableConfirmation = true;
    }
    else if(this.activeIndex == 3){
      this.isEnableDescription = false;
      this.isEnableMaterial = false;
      this.isEnableSize = false;
      this.isEnableConfirmation = true;
    }
    else{
      this.isEnableDescription = true;
      this.isEnableMaterial = false;
      this.isEnableSize = false;
      this.isEnableConfirmation = false;
    }
  }

}
