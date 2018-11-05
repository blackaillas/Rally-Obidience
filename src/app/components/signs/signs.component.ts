import { Component, OnInit } from '@angular/core';
import { NoviceSigns as NoviceSigns_hu } from 'src/app/models/sign-hu.models';
import { HUN_LEVELS } from 'src/app/enum/hun-levels.enum';
import { Level } from 'src/app/models/header.models';
import { Language } from 'src/app/enum/language.enum';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.css']
})
export class SignsComponent implements OnInit {
  signs = NoviceSigns_hu.find(set => set.category === HUN_LEVELS.RO_B);
  selectedLevel: Level;
  selectedLanguage = Language.HU;

  constructor() { }

  ngOnInit() {
  }

  onLevelChange(level: Level) {
    this.selectedLevel = level;
    this.signs = NoviceSigns_hu.find(set => set.category === level.code);
  }

  onLanguageChange(lang: Language) {
    this.selectedLanguage = lang;
  }

}
