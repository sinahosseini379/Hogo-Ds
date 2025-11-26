import React from 'react';

type ModuleType = Record<string, any>;

export function Template({ module, props }: { module: ModuleType; props?: any }) {
  const Component = module?.Root || module?.default || Object.values(module).find((v) => typeof v === 'function');
  if (!Component) return null;
  return <Component {...(props ?? {})} />;
}

export default Template;
