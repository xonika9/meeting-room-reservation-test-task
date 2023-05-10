const dateFormat = 'DD.MM.YYYY';
const floors = Array.from({ length: 25 }, (_, i) => i + 3);
const rooms = Array.from({ length: 10 }, (_, i) => i + 1);
const requiredMessage = 'This field is required';

export { dateFormat, floors, rooms, requiredMessage };
