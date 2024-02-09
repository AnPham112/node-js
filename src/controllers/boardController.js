import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'
import { ApiResponse } from '~/utils/ApiResponse'


const createNew = async(req, res, next) => {
  try {
    // lấy kết quả từ tầng Service
    const createdBoard = await boardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(new ApiResponse({
      code: StatusCodes.CREATED,
      data: createdBoard,
      error: !Boolean(createdBoard)
    }))
  } catch (error) {
    next(error)
  }
}
const getDetails = async(req, res, next) => {
  try {
    const boardId = req.params.id
    const board = await boardService.getDetails(boardId)
    res.status(StatusCodes.OK).json(new ApiResponse({
      code: StatusCodes.OK,
      data: board,
      error: !Boolean(board)
    }))
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetails
}