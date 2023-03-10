import { StandardModel } from './standardModel';

type Parse = string | ((value: string) => StandardModel[]);
type Generate = string | ((value: string) => StandardModel[]);

interface AbstractConfig {
  outDir: string;
  parse: Parse;
  generate: Generate;
}

interface Origin extends AbstractConfig {
  url: string;
}

interface Config extends AbstractConfig {
  origin: Origin | Origin[];
}
