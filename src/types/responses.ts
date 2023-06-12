export type ResourceResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedResource[];
};

type NamedResource = {
  name: string;
  url: string;
};
