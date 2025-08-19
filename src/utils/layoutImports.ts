// Import HTML layout files as raw text
import nab3dLayout from '../layouts/nab3d.html?raw';
import ekgLayout from '../layouts/ekg.html?raw';
import mystLayout from '../layouts/myst.html?raw';
import slattLayout from '../layouts/slatt.html?raw';
import vendingLayout from '../layouts/vending.html?raw';
import engaugeLayout from '../layouts/engauge.html?raw';
import cupidLayout from '../layouts/cupid.html?raw';
import skyhighLayout from '../layouts/skyhigh.html?raw';

// Layout mappings
export const layouts = {
  'nab3d': nab3dLayout,
  'ekg': ekgLayout,
  'myst': mystLayout,
  'slatt': slattLayout,
  'vending': vendingLayout,
  'engauge': engaugeLayout,
  'cupid': cupidLayout,
  'skyhigh': skyhighLayout,
  // Add more layouts as we create them
} as const;

export type LayoutKey = keyof typeof layouts;

// Helper function to get layout content
export const getLayoutContent = (key: LayoutKey): string => {
  return layouts[key] || '';
};
