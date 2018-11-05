import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Language } from 'src/app/enum/language.enum';
import { HUN_LEVELS } from 'src/app/enum/hun-levels.enum';
import { HeaderFilters, Level } from 'src/app/models/header.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() languageChange: EventEmitter<Language> = new EventEmitter<Language>();
  @Output() levelChange: EventEmitter<Level> = new EventEmitter<Level>();

  selectedLanguage = Language.HU;
  selectedLevel: string = HUN_LEVELS.RO_B;

  headerFilters: HeaderFilters;

  constructor() {
    this.headerFilters = {
      languages: [Language.HU],
      levels: [
        {
          language: Language.HU,
          name: 'Kezdő',
          code: HUN_LEVELS.RO_B,
          desc: `Ebben az osztályban a teljesítménybírók a 001-022 táblák közül választhatnak. 
          A következő feladatoknak a kezdő osztályban legalább egyszer meg kell jelenniük: 
          • 1 alakzat a 018 - 022 táblák közül 
          • 1 feladat 004 vagy 005 
          • 1 feladat 104 a, b, c vagy d kiegészítéssel.`,
          minSign: 15,
          maxSign: 18
        },
        {
          language: Language.HU,
          name: '1-es szint',
          code: HUN_LEVELS.RO_1,
          desc: `A bíró itt a 001-022 és az RO 1 101 - 117 feladatai közül választhat. 
          A következő feladatoknak az 1. osztályban legalább egyszer meg kell jelenniük: • 1 balra fordulás 009, 012, 101 vagy 113 közül 
          • 1 feladat a 103 - 106 táblák közül 
          • legalább három további feladat a 101-117-es feladatok közül. `,
          minSign: 18,
          maxSign: 20
        },
        {
          language: Language.HU,
          name: '2-es szint',
          code: 'RO_2',
          desc: `A bíró az RO B, RO 1, RO 2 és RO 201 - 220 szint feladatai közül választhat. 
          A következő feladatoknak kötelezően szerepelnie kell az akadálypályán: 
          • 1 behívási feladat a 2. osztályból • 1 ugró feladat a 217, 218 feladatok közül 
          • 1 fordulási feladat a 203 - 206 feladatok közül 
          • 1 feladat az élelem megtagadásához a 111, 117 vagy 220 sz. feladatok közül 
          • legalább egy további feladat a 201 - 220 táblák közül`,
          minSign: 20,
          maxSign: 22
        },
        {
          language: Language.HU,
          name: '3-as szint',
          code: 'RO_3',
          desc: `A bíró az RO B, RO 1, RO 2 és RO 301 - 315 szint feladatai közül választhat. 
          A következő feladatoknak kötelezően szerepelnie kell az akadálypályán: 
          • 1 behívási feladat az RO 3 osztályból 
          • 2 ugrás a 217, 218, 313, 314 feladatok közül (ezek közül legalább egynek a 3. szintről kell lennie) 
          • 1 Állítás-feladat az RO 3 osztályból 
          • 310 - 312 közül 1 feladat 
          • és 2 további feladat az RO 3 osztályból `,
          minSign: 22,
          maxSign: 24
        },
        {
          language: Language.HU,
          name: 'Senior',
          code: 'RO_Senior',
          desc: `A bíró kiválaszthatja a táblákat az RO B és RO 1 feladatai közül. 
          A következő táblákat NEM szabad használni: 
          003. Stop - Fektetés - Ültetés 009. Hátraarc balra 012. 270° balra 101. 360° balra 113. 180° fordulat balra 
          Z-b és Z-d kiegészítő táblák `,
          minSign: 12,
          maxSign: 12
        }
      ]
    };
  }

  ngOnInit() {
    this.languageChange.emit(this.selectedLanguage);
    this.levelChange.emit(this.headerFilters.levels.find(l => l.code === this.selectedLevel));
  }

  selectLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.languageChange.emit(lang);
  }

  selectLevel(level: Level) {
    this.selectedLevel = level.code;
    this.levelChange.emit(level);
  }

}
