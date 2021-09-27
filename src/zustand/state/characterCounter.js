import create from 'zustand'


const useCharacterCounterStore = create(set => ({
  textInput: '',
  setTextInput: (value) => set(() => ({ textInput: value })),
}))

export { useCharacterCounterStore };