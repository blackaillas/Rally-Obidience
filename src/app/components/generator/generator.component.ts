import { Component, ViewChild, ElementRef } from '@angular/core';
import { NoviceSigns, RallyCategory, RallySign } from 'src/app/models/sign.models';
import { NoviceSigns as NoviceSigns_hu } from 'src/app/models/sign-hu.models';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
    @ViewChild('rallyCanvas') canvasRef: ElementRef;
    signs = NoviceSigns_hu.find(set => set.category === RallyCategory.Basic);
    rallySigns: RallySign[] = [];
    infoText = 'A jelek és nyílak húzásával készítsd el a saját pályádat. ' +
        'Az elhelyezett elemeket tudod forgatni kattintással. Nyomtatáshoz használd a Chrome beépitett funckióját (Ctrl + P).';

    constructor() { }

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
