export const getDriveURL = (fileId: string): string => `https://drive.google.com/file/d/${fileId}/view?usp=drive_link`;

const IMAGE_BASE = "/images";

export const getCoverURL = (path: string): string => `${IMAGE_BASE}/${path}/${path}_cover.webp`;

export const getPhotoURL = (path: string, photo: string): string => `${IMAGE_BASE}/${path}/photos/${photo}`;

export const getMessageBookURL = (path: string, page: number): string =>
  `${IMAGE_BASE}/${path}/message-book/${path}_${String(page).padStart(3, "0")}.webp`;
