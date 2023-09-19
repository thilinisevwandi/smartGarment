import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})


export class ConfirmationComponent {
  @ViewChild('invoice') invoiceElement!: ElementRef;
  productSize: any[] = [
    {
      size: "S",
      half:1,
      QTY: 1
    },
    {
      size: "M",
      half:1,
      QTY: 1
    },
    {
      size: "L",
      half:1,
      QTY: 1
    },
    // {
    //   size: "XL",
    //   half:1,
    //   QTY: 1
    // },
    // {
    //   size: "2XL",
    //   half:1,
    //   QTY: 1
    // },
    // {
    //   size: "3XL",
    //   half:1,
    //   QTY: 1
    // },
    // {
    //   size: "4XL",
    //   half:1,
    //   QTY: 1
    // },
    // {
    //   size: "5XL",
    //   half:1,
    //   QTY: 1
    // }
  ]
  generatePDF(){
    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });

  }
}
