// @flow
import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';

// 日本語向けのフォント設定
const fontFamilies = [
  'M PLUS 1p',
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica Neue',
  'Hiragino Kaku Gothic ProN',
  'Meiryo',
  'メイリオ',
  'sans-serif'
];

const typography = new Typography({
  ...stAnnesTheme,
  headerFontFamily: fontFamilies,
  bodyFontFamily: fontFamilies,
  googleFonts: [
    {
      name: 'M PLUS 1p',
      styles: ['400', '700']
    }
  ]
});

export default typography;
