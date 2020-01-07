import ScrollSnap from '../src/ScrollSnap';
import generateCss from './generateCss';
import cssMatcher from 'jest-matcher-css';
import fs from 'fs';

expect.extend({
  toMatchCss: cssMatcher,
});

describe('All plugins', () => {
  it('generates utilities for all plugins', async () => {
    const css = await generateCss(ScrollSnap);

    // @ts-ignore
    expect(css).toMatchCss(fs.readFileSync('test/bench/scroll-snap.css').toString());
  });
});
