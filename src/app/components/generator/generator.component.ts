import { Component, ViewChild, ElementRef } from '@angular/core';
import { NoviceSigns, RallyCategory, RallySign } from 'src/app/models/sign.models';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
    @ViewChild('rallyCanvas') canvasRef: ElementRef;
    signs = NoviceSigns.find(set => set.category === RallyCategory.Novice);
    rallySigns: RallySign[] = [];
    infoText = 'Drag the arrows and signs within the empty area to build your set. ' +
        'With clicking on the placed elements you can rotate them.';

    constructor() { }

    /*
    works with real canvas
    onDrop(data: any) {
      const context = this.canvasRef.nativeElement.getContext('2d');
      const source = new Image();
      source.src = '../../../assets/signs/normal/' + data.data.image + '.png';
      context.drawImage(source,
        (data.event.layerX - data.data.offsetX)*2,
        (data.event.layerY - data.data.offsetY)*2,
        (data.data.width)*2, (data.data.height)*2);
      context.save();
    }*/

    onDrop(data: any) {
        this.rallySigns.push(
            {
                ...data.data,
                posX: data.event.layerX - data.data.offsetX + 'px',
                posY: data.event.layerY - data.data.offsetY + 'px'
            }
        );
    }

    rotate(event, sign: RallySign) {
        if (!sign.rotateIndex) {
            event.target.style.transform = 'rotate(-90deg)';
            sign.rotateIndex = 90;
        } else if (sign.rotateIndex === 90) {
            event.target.style.transform = 'rotate(-180deg)';
            sign.rotateIndex = 180;
        } else if (sign.rotateIndex === 180) {
            event.target.style.transform = 'rotate(-270deg)';
            sign.rotateIndex = 270;
        } else if (sign.rotateIndex === 270) {
            event.target.style.transform = 'rotate(0deg)';
            sign.rotateIndex = null;
        }
    }

}
