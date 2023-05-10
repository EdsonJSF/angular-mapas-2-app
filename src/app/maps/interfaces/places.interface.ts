export interface PlacesResponse {
  attribution: string;
  features:    Feature[];
  query:       string[];
  type:        string;
}

export interface Feature {
  bbox?:         number[];
  center:        number[];
  context:       Context[];
  geometry:      Geometry;
  id:            string;
  language?:     Language;
  language_es?:  Language;
  place_name:    string;
  place_name_es: string;
  place_type:    string[];
  properties:    Properties;
  relevance:     number;
  text:          string;
  text_es:       string;
  type:          string;
}

export interface Context {
  id:           string;
  language?:    Language;
  language_es?: Language;
  mapbox_id:    string;
  short_code?:  string;
  text:         string;
  text_es:      string;
  wikidata?:    string;
}

export enum Language {
  Es = "es",
  Fr = "fr",
  Pt = "pt",
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  address?:    string;
  category?:   string;
  foursquare?: string;
  landmark?:   boolean;
  maki?:       string;
  mapbox_id?:  string;
  wikidata?:   string;
}
