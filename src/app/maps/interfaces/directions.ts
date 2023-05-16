export interface DirectionsResponse {
  code:      string;
  routes:    Route[];
  uuid:      string;
  waypoints: Waypoint[];
}

export interface Route {
  distance:    number;
  duration:    number;
  geometry:    Geometry;
  legs:        Leg[];
  weight:      number;
  weight_name: string;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type:        Type;
}

export enum Type {
  LineString = "LineString",
}

export interface Leg {
  admins:        Admin[];
  distance:      number;
  duration:      number;
  steps:         Step[];
  summary:       string;
  via_waypoints: any[];
  weight:        number;
}

export interface Admin {
  iso_3166_1:        string;
  iso_3166_1_alpha3: string;
}

export interface Step {
  destinations?: string;
  distance:      number;
  driving_side:  DrivingSide;
  duration:      number;
  geometry:      Geometry;
  intersections: Intersection[];
  maneuver:      Maneuver;
  mode:          Mode;
  name:          string;
  ref?:          string;
  weight:        number;
}

export enum DrivingSide {
  Left = "left",
  Right = "right",
  SlightLeft = "slight left",
  SlightRight = "slight right",
  Straight = "straight",
}

export interface Intersection {
  admin_index:        number;
  bearings:           number[];
  classes?:           string[];
  duration?:          number;
  entry:              boolean[];
  geometry_index:     number;
  in?:                number;
  is_urban?:          boolean;
  lanes?:             Lane[];
  location:           number[];
  mapbox_streets_v8?: MapboxStreetsV8;
  out?:               number;
  stop_sign?:         boolean;
  traffic_signal?:    boolean;
  turn_duration?:     number;
  turn_weight?:       number;
  weight?:            number;
}

export interface Lane {
  active:            boolean;
  indications:       DrivingSide[];
  valid:             boolean;
  valid_indication?: DrivingSide;
}

export interface MapboxStreetsV8 {
  class: Class;
}

export enum Class {
  Primary = "primary",
  PrimaryLink = "primary_link",
  Secondary = "secondary",
  Street = "street",
  Trunk = "trunk",
}

export interface Maneuver {
  bearing_after:  number;
  bearing_before: number;
  instruction:    string;
  location:       number[];
  modifier?:      DrivingSide;
  type:           string;
}

export enum Mode {
  Driving = "driving",
}

export interface Waypoint {
  distance: number;
  location: number[];
  name:     string;
}
