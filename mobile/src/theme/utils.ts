import { DefaultTheme } from 'styled-components';

export function getColorByMode(
  theme: DefaultTheme,
  mode: 'primary' | 'secondary',
): string {
  return mode === 'primary' ? theme.colorPrimary : theme.colorSecondary;
}
