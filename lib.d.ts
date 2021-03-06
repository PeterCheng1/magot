// global variable(webpack injected)
declare const __DEV__: boolean;
declare const __DEMOS__: Array<{
  name: string;
  done: boolean;
  tested: boolean;
}>;
declare const __ICONS__: string[];

interface Size {
  width: number;
  height: number;
}

interface Offset {
  left: number;
  top: number;
}

type AcceptableDate = Date | number | string;
