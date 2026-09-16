import React from 'react'
import { motion } from 'framer-motion';
import { getLayoutContent, type LayoutKey } from '../utils/layoutImports';
import { DoorJamVideos } from './DoorJamVideos';

interface CustomProjectLayoutProps {
  layoutKey: LayoutKey;
}

export function CustomProjectLayout({ layoutKey }: CustomProjectLayoutProps) {
  const htmlContent = getLayoutContent(layoutKey);

  if (!htmlContent) {
    return null;
  }

  // For doorjam, we need to inject the video gallery component
  if (layoutKey === 'doorjam') {
    // Split the HTML at the video section placeholder and inject the React component
    const parts = htmlContent.split('<!-- Content will go here -->');

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="custom-project-content"
      >
        {/* Before video section */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: parts[0] }}
        />

        {/* DoorJam Videos Component */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <DoorJamVideos />
        </div>

        {/* After video section */}
        {parts[1] && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: parts[1] }}
          />
        )}
      </motion.div>
    );
  }

  if (layoutKey === 'inklings') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="custom-project-content receipt-page-bg py-24 px-4 md:px-8"
      >
        <div className="receipt-paper max-w-6xl mx-auto">
          <div
            className="prose prose-lg max-w-none px-6 py-16 md:px-16"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </motion.div>
    );
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
