import { Language } from '../enum/language.enum';

export class Level {
    language: Language;
    name: string;
    code?: string;
    desc?: string;
    minSign?: number;
    maxSign?: number;
}

export class HeaderFilters {
    languages: Language[];
    levels: Level[];
}
