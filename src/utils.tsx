import { SyntheticEvent } from 'react';
import defaultImage from './images/no-cover.jpg';

export const setDefaultImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = defaultImage;
};
