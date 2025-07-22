import React from 'react'
import { motion } from 'framer-motion';
import { getLayoutContent, type LayoutKey } from '../utils/layoutImports';

interface CustomProjectLayoutProps {
  layoutKey: LayoutKey;
}

export function CustomProjectLayout({ layoutKey }: CustomProjectLayoutProps) {
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
