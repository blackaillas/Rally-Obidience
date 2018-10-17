import { HostListener, Input, HostBinding, Directive } from '@angular/core';
import { DragService } from '../services/drag.service';

@Directive({
    selector: '[myDraggable]'
})
export class DraggableDirective {
    constructor(private dragService: DragService) {
    }

    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @Input()
    set myDraggable(options: DraggableOptions) {
        if (options) {
            this.options = options;
        }
    }

    private options: DraggableOptions = {};

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const { zone = 'zone', data = {} } = this.options;
        data.offsetX = event.layerX - event.target.offsetLeft;
        data.offsetY = event.layerY - event.target.offsetTop;
        data.height = event.target.clientHeight;
        data.width = event.target.clientWidth;
        this.dragService.startDrag(zone);

        event.dataTransfer.setData('Text', JSON.stringify(data));
    }
}
export interface DraggableOptions {
    zone?: string;
    data?: any;
}
