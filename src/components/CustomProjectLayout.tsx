import React from 'react'
import { motion } from 'framer-motion'
import { getLayoutContent, type LayoutKey } from '../utils/layoutImports';
import { Cupid } from '../pages/Cupid';
import { Inklings } from '../pages/Inklings';
import { DoorJam } from '../pages/DoorJam';
import { Summerall } from '../pages/Summerall';

interface CustomProjectLayoutProps {
  layoutKey: LayoutKey;
}

export function CustomProjectLayout({ layoutKey }: CustomProjectLayoutProps) {
  // Check React components first
  if (layoutKey === 'doorjam') {
    return <DoorJam />;
  }

  if (layoutKey === 'inklings') {
    return <Inklings />;
  }

  if (layoutKey === 'cupid') {
    return <Cupid />;
  }

  if (layoutKey === 'summerall') {
    return <Summerall />;
  }

  // Fall back to HTML content for other projects
  const htmlContent = getLayoutContent(layoutKey);

  if (!htmlContent) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-16 custom-project-content"
    >
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </motion.div>
  );
}
