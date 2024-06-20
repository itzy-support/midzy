export const getThumbnailURL = (imageId: string, width: number = 256): string =>
  `https://drive.google.com/thumbnail?id=${imageId}&sz=w${width}`;

export const getImageURL = (imageId: string): string => `https://lh3.googleusercontent.com/d/${imageId}?authuser=0`;
