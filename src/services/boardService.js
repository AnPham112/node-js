import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Trả kết quả về, trong Service luôn phải có return
    return newBoard
  } catch (error) { throw error }
} 

export const boardService = {
  createNew
}