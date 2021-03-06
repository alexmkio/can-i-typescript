export interface IpFetch {
  ip:        string;
  latitude:  string;
  longitude: string;
  time_zone: {
    name:              string;
    offset:            number;
    current_time:      string;
    current_time_unix: number;
    is_dst:            boolean;
    dst_savings:       number;
  }
}

export interface Thresholds {
  temperature: {
    low: number;
    high: number
  };
  windSpeed: number;
  probOfPrecip: number;
}

export interface TempHours {
  [key: string]: {
    month:       number;
    day:         number;
    hour:        number;
    temperature: number;
  }
}

interface WindHour {
  windSpeed:   number;
}

export interface WindHours {
  [key: string]: {
    windSpeed:   number;
  }
}

export interface PreciptHours {
  [key: string]: {
    precipProb:   number;
  }
}

export interface CleanedHour {
  month:       number;
  day:         number;
  hour:        number;
  inCalendar:  boolean;
  temperature: number;
  windSpeed:   number;
  precipProb:  number;
}

export interface Notice {
  nice: boolean;
  hours: number;
}

export interface Time {
  number: number;
  name: string;
}

export interface CalendarProps {
  calendar: CleanedHour[];
  addToCalendar: (hourObject: CleanedHour) => void;
}

export interface ErrorProps {
  errorCode: number;
  clearSelected: () => void;
}

export interface HourProps {
  hour: CleanedHour;
  addToCalendar: (hourObject: CleanedHour) => void;
}

export interface PossibilitiesProps {
  suitableHours: CleanedHour[];
  addToCalendar: (hourObject: CleanedHour) => void;
}

export interface ResultsProps {
  notice: Notice;
}

export interface SearchProps {
  getForecast: (thresholds: Thresholds) => void;
}