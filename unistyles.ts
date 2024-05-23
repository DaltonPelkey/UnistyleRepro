import {UnistylesRegistry, UnistylesThemes} from 'react-native-unistyles';
import {
  ExtractVariantNames,
  StyleSheetWithSuperPowers
} from 'react-native-unistyles/lib/typescript/src/types';
import type {ReactNativeStyleSheet} from 'react-native-unistyles/src/types';
import type {UnistylesBreakpoints} from 'react-native-unistyles/src/global';

const lightTheme = {
  myColor: '#fff',
  foo: '#fff',
  bar: '#fff',
  hello: '#fff',
  something: '#fff',
  else: '#fff',
  to: '#fff',
  name: '#fff',
  these: '#fff',
  props: '#fff',
  so: '#fff',
  many: '#fff',
  // makes: '#fff',
  // it: '#fff',
  // say: '#fff',
  // never: '#fff'
} as const;

const darkTheme = lightTheme;

const INITIAL_THEME: keyof UnistylesThemes = 'light';

// declare module 'react-native-unistyles' {
//   export interface UnistylesThemes {
//     light: typeof lightTheme;
//     dark: typeof darkTheme;
//   }
//
//   export type UnistylesTheme = UnistylesThemes[typeof INITIAL_THEME];
//
//   export function useStyles<T extends StyleSheetWithSuperPowers, >(
//     stylesheet?: T,
//     variantsMap?: ExtractVariantNames<typeof stylesheet>
//   ): {
//     theme: UnistylesTheme,
//     breakpoint: keyof UnistylesBreakpoints,
//     styles: ReactNativeStyleSheet<T>
//   };
// }

declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
}

UnistylesRegistry
.addThemes({
  light: lightTheme,
  dark: darkTheme
})
.addConfig({
  adaptiveThemes: true,
  initialTheme: INITIAL_THEME
});
