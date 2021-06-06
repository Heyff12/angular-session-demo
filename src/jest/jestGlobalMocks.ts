
// A workaround for `Error: Not implemented: navigation (except hash changes)`
const strLocation = JSON.stringify(window.location);
delete window.location;
Object.defineProperty(window, 'location', {
  value: JSON.parse(strLocation),
});

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
/**
 * Suppress exception stack for simple alerts - just show them as console message
 */
Object.defineProperty(window, 'alert', {
  value: (message: string): void => {
    // tslint:disable-next-line:no-console
    console.warn(`ALERT: ${message}`);
  },
});

/**
 * Suppress moment.js deprecation warning for invalid date strings as we deal with test data that may contain invalid formats to be tested
 */
const originalConsoleWarn: any = console.warn;
const filterMomentDeprecationWarning: RegExp = new RegExp(
  'Deprecation warning: value provided is not in a recognized RFC2822 or ISO format\. moment construction falls back to js Date',
  'gi',
);
Object.defineProperty(console, 'warn', {
  value: (...args: Array<any>): void => {
    if (args.length  > 0 && 'string' === typeof args[0] && args[0].match(filterMomentDeprecationWarning)) {
      // Skip this warning
      return;
    }

    originalConsoleWarn(...args);
  },
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

// @ts-ignore
HTMLCanvasElement.prototype.getContext = contextId => {
  if (contextId === '2d') {
    return {
      font: '12px',
      measureText: value => ({ width: 12 * value.length }),
    };
  }
};
