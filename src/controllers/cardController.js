import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'
import { ApiResponse } from '~/utils/ApiResponse'


const createNew = async(req, res, next) => {
  try {
    const createdCard = await cardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(new ApiResponse({
      code: StatusCodes.CREATED,
      data: createdCard,
      error: !Boolean(createdCard)
    }))
  } catch (error) {
    next(error)
  }
}

export const cardController = {
  createNew
}