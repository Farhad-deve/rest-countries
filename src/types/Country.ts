export interface Country {
  flags: Flags;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital?: string;
  alpha3Code: string;

  topLevelDomain: string[];
  currencies?: Currencies[];
  languages: Languages[];

  borders?: string[];
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
}