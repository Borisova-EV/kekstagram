// Импорт модулей
import { createPhotos } from './create-photos.js';
import { createGalleryPhotos } from './create-gallery-photos.js';

const photos = createPhotos();
createGalleryPhotos(photos);


