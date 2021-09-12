import { MAX_RGB_NUMBER } from '../constants.js'

export const getRandomColor = () => {
  const rgb = Math.floor(Math.random() * MAX_RGB_NUMBER)
    .toString(16)
    .padStart(6, 0)

  return `#${rgb}`
}
