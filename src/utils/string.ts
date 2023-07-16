export const validateNotContainSpecialChar = (inputValue: string) => {
  const specialCharRegex = /^[a-zA-Z0-9]*$/;
  return specialCharRegex.test(inputValue)
}