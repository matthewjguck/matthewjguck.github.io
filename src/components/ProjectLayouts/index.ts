import { ComponentType } from 'react';

// Import all layout components - will be created
import Cupid from './Cupid';
import DoorJam from './DoorJam';
import ClarityGrid from './ClarityGrid';
import Nab3D from './Nab3D';
import EKG from './EKG';
import Myst from './Myst';
import Slatt from './Slatt';
import Vending from './Vending';
import Engauge from './Engauge';
import SkyHigh from './SkyHigh';

export const layoutComponents = {
  'cupid': Cupid,
  'doorjam': DoorJam,
  'claritygrid': ClarityGrid,
  'nab3d': Nab3D,
  'ekg': EKG,
  'myst': Myst,
  'slatt': Slatt,
  'vending': Vending,
  'engauge': Engauge,
  'skyhigh': SkyHigh,
} as const;

export type LayoutKey = keyof typeof layoutComponents;

export const getLayoutComponent = (key: LayoutKey): ComponentType | null => {
  return layoutComponents[key] || null;
};
