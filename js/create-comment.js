//Импорт зависимостей
import { getRandomNumber, getRandomElementArray } from './utils.js';

// Идентификатор аватарок пользователей
const MIN_AVATAR_IMAGE_NUMBER = 1;
const MAX_AVATAR_IMAGE_NUMBER = 6;

// Массив с комментариями
const COMMENT_MESSAGES =
  [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

// Массив с именами
const NAME_USERS =
  [
    'Земфира Рамазанова',
    'Диана Арбенина',
    'Илья Лагутенко',
    'Андрей Лысиков',
  ];

// Функция создания объекта с комментариями
const createComment = (number) => ({
  id: number,
  avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_IMAGE_NUMBER, MAX_AVATAR_IMAGE_NUMBER)}.svg`,
  message: getRandomElementArray(COMMENT_MESSAGES),
  name: getRandomElementArray(NAME_USERS),
});

export { createComment };
