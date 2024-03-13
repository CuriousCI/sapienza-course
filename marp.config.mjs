// import { Marp } from '@marp-team/marp-core';
// import fs from 'fs';
// import path from 'path';

const marp = new Marp({
    // marp-core constructor options
    html: true,
    math: 'katex',
    minifyCSS: true,
    inputDir: "./_slides/",
    output: "./_slides/"
    slug: false,

});

// const themeCSS = fs.readFileSync(path.resolve('./_assets/theme.css'), 'utf-8');
// marp.themeSet.add(themeCSS);
//
// export default marp;


// emoji: {
//     shortcode: true,
//     unicode: false,
// twemoji: {
//     base: '/resources/twemoji/',
// },
// },
// script: {
//     source: 'cdn',
//     nonce: 'xxxxxxxxxxxxxxx',
// },
// It can be included Marpit constructor options
// looseYAML: false,
// markdown: {
//     breaks: false,
// },
