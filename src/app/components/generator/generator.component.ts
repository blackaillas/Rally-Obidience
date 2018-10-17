import { Component, ViewChild, ElementRef } from '@angular/core';
import { NoviceSigns, RallyCategory } from 'src/app/models/sign.models';

const SignWidth = 100;
const SignHeight = 75;

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  @ViewChild('rallyCanvas') canvasRef: ElementRef;
  signs = NoviceSigns.find(set => set.category === RallyCategory.Novice);


  constructor() { }

  onDrop(data: any) {
    console.log('data: ', data, event);
    const context = this.canvasRef.nativeElement.getContext('2d');
    const source = new Image();
    source.src = '../../../assets/signs/normal/' + data.data.image + '.png';
    context.drawImage(source,
      (data.event.layerX - data.data.offsetX)*2,
      (data.event.layerY - data.data.offsetY)*2,
      (data.data.width)*2, (data.data.height)*2);
    context.save();
  }

}
