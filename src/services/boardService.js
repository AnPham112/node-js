import { boardModel } from '~/models/boardModel'
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // lấy createdBoard từ phía Model trả về
    const createdBoard = await boardModel.createNew(newBoard)
    // Lấy bản ghi board sau khi tạo trên mongodb với findById
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    // Trả kết quả về, trong Service luôn phải có return
    return getNewBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}