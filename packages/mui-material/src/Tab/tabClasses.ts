import { generateUtilityClass, generateUtilityClasses } from '@mui/core';

export interface TabClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: string;
  /** Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
  textColorInherit: string;
  /** Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
  textColorPrimary: string;
  /** Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
  textColorSecondary: string;
  /** State class applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: string;
  /** State class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: string;
  /** Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: string;
  /** Styles applied to the root element if `wrapped={true}`. */
  wrapped: string;
  /** Styles applied to the wrapper element of `icon` if `icon` is provided. */
  iconWrapper: string;
}

export type TabClassKey = keyof TabClasses;

export function getTabUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTab', slot);
}

const tabClasses: TabClasses = generateUtilityClasses('MuiTab', [
  'root',
  'labelIcon',
  'textColorInherit',
  'textColorPrimary',
  'textColorSecondary',
  'selected',
  'disabled',
  'fullWidth',
  'wrapped',
  'iconWrapper',
]);

export default tabClasses;
