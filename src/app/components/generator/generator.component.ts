import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RallySign, Sign, SignsSet, SignViewModel } from 'src/app/models/sign.models';
import { NoviceSigns as NoviceSigns_hu } from 'src/app/models/sign-hu.models';
import { Level } from 'src/app/models/header.models';
import { HUN_LEVELS } from 'src/app/enum/hun-levels.enum';

const ARROW = 0;

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
    @ViewChild('rallyCanvas') canvasRef: ElementRef;
    rallySigns: RallySign[] = [];
    infoText = 'A jelek és nyílak húzásával készítsd el a saját pályádat. ' +
        'Az elhelyezett elemeket tudod forgatni kattintással. Nyomtatáshoz használd a Chrome beépitett funckióját (Ctrl + P).';
    selectedLevel: Level = null;
    signs: SignsSet;
    currentSignCount = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.signs = NoviceSigns_hu.find(set => set.category === HUN_LEVELS.RO_B);
        this.signs.signs.forEach((sign: SignViewModel) => {
            sign.cannotReuse = false;
        });
    }

    onDrop(data: any) {
        if (this.canReuse(data.data) && !this.reachedMaxLimit()) {

            if (!data.data.ignoreFromCountRule) {
                this.currentSignCount++;
            }

            this.rallySigns.push(
                {
                    ...data.data,
                    posX: data.event.layerX - data.data.offsetX + 'px',
                    posY: data.event.layerY - data.data.offsetY + 'px'
                }
            );
        }
    }

    canReuse(sign: SignViewModel): boolean {
        const countUsed = this.rallySigns.filter(s => s.id === sign.id).length;
        if (countUsed < sign.reusable || sign.id === ARROW) {
            if (countUsed + 1 === sign.reusable) {
                this.setUnusable(sign);
            }
            return true;
        } else {
            this.setUnusable(sign);
            return false;
        }
    }

    setUnusable(sign: SignViewModel) {
        const foundSign = (this.signs.signs.find(set => set.id === sign.id) as SignViewModel);
        if (foundSign) {
            foundSign.cannotReuse = true;
        }
    }

    reachedMaxLimit() {
        return this.rallySigns.length + 1 > this.selectedLevel.maxSign;
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

    onLevelChange(level: Level) {
        this.selectedLevel = level;
        this.signs = NoviceSigns_hu.find(set => set.category === level.code);
    }

}
