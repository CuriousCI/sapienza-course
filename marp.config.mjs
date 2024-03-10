import { Marp } from '@marp-team/marp-core';
import fs from 'fs';
import path from 'path';

const marp = new Marp({
    // marp-core constructor options
    html: true,
    // emoji: {
    //     shortcode: true,
    //     unicode: false,
    // twemoji: {
    //     base: '/resources/twemoji/',
    // },
    // },
    math: 'katex',
    minifyCSS: true,
    // script: {
    //     source: 'cdn',
    //     nonce: 'xxxxxxxxxxxxxxx',
    // },
    slug: false,

    // It can be included Marpit constructor options
    // looseYAML: false,
    // markdown: {
    //     breaks: false,
    // },
})

const themeCSS = fs.readFileSync(path.resolve(__dirname, '_assets/theme.css'), 'utf-8');

marp.themeSet.add(themeCSS);

export default marp;

