import { WebPlugin } from '@capacitor/core';

import type { PDFViewerPlugin } from './definitions';

export class PDFViewerWeb extends WebPlugin implements PDFViewerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
