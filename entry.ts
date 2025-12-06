import type { App } from 'vue';

import * as components from './src';

const library = {
  install: (app: App) => {
    for (const [componentName, component] of Object.entries(components)) {
      app.component(componentName, component);
    }
  },
};

if (typeof globalThis !== 'undefined') {
  (globalThis as Record<string, unknown>).BuefyAddons = library;
  for (const [componentName, component] of Object.entries(components)) {
    (globalThis as Record<string, unknown>)[componentName] = component;
  }
}

export default library;

export * from './src';