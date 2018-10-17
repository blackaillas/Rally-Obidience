import { Component, OnInit } from '@angular/core';
import { NoviceSigns, RallyCategory } from 'src/app/models/sign.models';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.css']
})
export class SignsComponent implements OnInit {
  noviceSigns = NoviceSigns.find(set => set.category === RallyCategory.Novice);

  constructor() { }

  ngOnInit() {
  }

}
