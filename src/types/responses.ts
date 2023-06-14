import {Pokemon} from './pokemon';

export type ResourceResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedResource[];
};

export type EnrichedResourceResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type NamedResource = {
  name: string;
  url: string;
};
