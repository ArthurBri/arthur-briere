export const age = () => {
  const birthDate = new Date('03/19/1996')
  return Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10)
}
