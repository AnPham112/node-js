/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
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
const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }
    return board
  } catch (error) { throw error }
}

export const boardService = {
  createNew,
  getDetails
}