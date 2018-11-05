import { SignsSet } from './sign.models';
import { HUN_LEVELS } from '../enum/hun-levels.enum';

export const NoviceSigns: SignsSet[] = [
    {
        id: 1,
        name: 'Novice Set',
        desc: '',
        category: HUN_LEVELS.RO_B,
        signs: [
            {
                id: 1,
                name: 'Start',
                desc: `Miután a teljesítménybíró átadta az akadálypályát, a páros normál lépéssel halad át a startvonalon. A párosnak előtte nem kell új alapállást felvennie, hanem rögtön elindulhat a felkészülés után. A bírálás és az időmérés a startvonal átlépésével indul.`,
                image: '001-start',
                reusable: 1,
                ignoreFromCountRule: true
            },
            {
                id: 2,
                name: 'Cél',
                desc: `Amint a páros a tábla bal oldalán áthalad a célvonalon, leáll az idő, és kiszámolják a futamidőt. Az értékelés a célvonal átlépésével ér véget. Utána lehet a kutyát simogatással, játékkal, jutalomfalatokkal és játékszerekkel jutalmazni.`,
                image: '002-finish',
                reusable: 1,
                ignoreFromCountRule: true
            },
            {
                id: 3,
                name: 'Lábhoz kerülés',
                desc: ``,
                image: '003-labhoz-kerules',
                reusable: 4
            },
            {
                id: 4,
                name: 'Lábhoz',
                desc: ``,
                image: '004-labhoz',
                reusable: 4
            },
            {
                id: 5,
                name: 'Lábhoz kerülés - lépés indul',
                desc: ``,
                image: '005-labhoz-kerules-lepes-indul',
                reusable: 4
            },
            {
                id: 6,
                name: 'Lábhoz - lépés indul',
                desc: ``,
                image: '006-labhoz-lepes-indul',
                reusable: 4
            },
            {
                id: 7,
                name: 'Stop',
                desc: ``,
                image: '007-stop',
                reusable: 3
            },
            {
                id: 8,
                name: 'Stop - fektetés',
                desc: ``,
                image: '008-stop-fektetes',
                reusable: 1
            },
            {
                id: 9,
                name: 'Stop - fektetés - ültetés',
                desc: ``,
                image: '009-stop-fektetes-ultetes',
                reusable: 1
            },
            {
                id: 10,
                name: 'Stop - kutya megkerülése',
                desc: ``,
                image: '010-stop-kutya-megkerulese',
                reusable: 1
            },
            {
                id: 11,
                name: 'Stop - Fektetés - Kutya megkerülése',
                desc: ``,
                image: '011-stop-fektetes-kutya-megkerulese',
                reusable: 1
            },
            {
                id: 12,
                name: 'Jobbra át',
                desc: ``,
                image: '012-jobbra-at',
                reusable: 3
            },
            {
                id: 13,
                name: 'Balra át',
                desc: ``,
                image: '013-balra-at',
                reusable: 3
            },
            {
                id: 14,
                name: 'Hátra arc jobbra',
                desc: ``,
                image: '014-hatra-arc-jobbra',
                reusable: 3
            },
            {
                id: 15,
                name: 'Hátra arc balra',
                desc: ``,
                image: '015-hatra-arc-balra',
                reusable: 3
            },
            {
                id: 16,
                name: 'Hátra arc - vezető balra - kutya jobbra',
                desc: ``,
                image: '016-hatra-arc-vezeto-balra-kutya-jobbra',
                reusable: 1
            },
            {
                id: 17,
                name: '270° jobbra',
                desc: ``,
                image: '017-270-jobbra',
                reusable: 3
            },
            {
                id: 18,
                name: '270° balra',
                desc: ``,
                image: '018-270-balra',
                reusable: 3
            },
            {
                id: 19,
                name: '360° jobbra',
                desc: ``,
                image: '019-360-jobbra',
                reusable: 1
            },
            {
                id: 20,
                name: 'Beülés',
                desc: ``,
                image: '020-beules',
                reusable: 4
            },
            {
                id: 21,
                name: 'Lassú lépés',
                desc: ``,
                image: '021-lassu-lepes',
                reusable: 1
            },
            {
                id: 22,
                name: 'Futólépés',
                desc: ``,
                image: '022-futo-lepes',
                reusable: 1
            },
            {
                id: 23,
                name: 'Normál lépés',
                desc: ``,
                image: '023-normal-lepes',
                reusable: 3
            },
            {
                id: 24,
                name: 'Spirál jobbra - kutya kívül',
                desc: ``,
                image: '024-spiral-jobbra-kutya-kivul',
                reusable: 1
            },
            {
                id: 25,
                name: 'Spirál balra - kutya belül',
                desc: ``,
                image: '025-spiral-balra-kutya-belul',
                reusable: 1
            },
            {
                id: 26,
                name: 'Szlalom',
                desc: ``,
                image: '026-szlalom',
                reusable: 1
            },
            {
                id: 27,
                name: 'Szlalom oda vissza',
                desc: ``,
                image: '027-szlalom-oda-vissza',
                reusable: 1
            },
            {
                id: 28,
                name: 'Nyolcas kerülés - zavarás nélkül',
                desc: ``,
                image: '028-nyolcas-kerules-zavaras-nelkul',
                reusable: 1
            }
        ]
    }
];
