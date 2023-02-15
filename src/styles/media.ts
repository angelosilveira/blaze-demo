import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  desktop: '75em',
  tablet: '64em',
  mobile: '40em',
});
