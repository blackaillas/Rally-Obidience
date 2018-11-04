import { Component, OnInit } from '@angular/core';
import { NoviceSigns, RallyCategory } from 'src/app/models/sign.models';
import { NoviceSigns as NoviceSigns_hu } from 'src/app/models/sign-hu.models';
import { HUN_LEVELS } from 'src/app/enum/hun-levels.enum';
import { Language } from 'src/app/enum/language.enum';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.css']
})
export class SignsComponent implements OnInit {
  noviceSigns = NoviceSigns_hu.find(set => set.category === RallyCategory.Basic);
  selectedLanguage = Language.HU;
  selectedLevel = HUN_LEVELS.RO_B;

  HUN_LEVELS = HUN_LEVELS;
  Language = Language;

  constructor() { }

  ngOnInit() {
  }

}
