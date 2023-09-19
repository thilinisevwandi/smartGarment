import { Component } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  materialList:any[] = [
    {
      image: 'tag.png',
      lable: 'lable'
    },
    {
      image: 'white.jpeg',
      lable: 'zipper'
    },
    {
      image: 'white.jpeg',
      lable: 'zipper'
    },
    {
      image: 'white.jpeg',
      lable: 'zipper'
    },
    {
      image: 'white.jpeg',
      lable: 'zipper'
    }
  ]
}
