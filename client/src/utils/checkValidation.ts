export function checkValidation(
  state: string[],
  actionKind: string[],
  setValidation: (c: any) => void
) {
  for (let i = 0; i < state.length; i++) {
    setValidation({
      payload: {
        text: state[i],
        key: actionKind[i]
      }
    });
  }
}
