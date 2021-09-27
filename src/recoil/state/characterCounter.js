import { atom, selector } from 'recoil';

const textInput = atom({
  key: 'textInput', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const characterCount = selector({
  key: 'characterCount', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textInput);

    return text.length;
  },
});

export { characterCount, textInput }