import { http } from '../services/http'
import { PostAnswerResponse } from '../services/response/PostAnswerResponse'

async function getAnswerData(id: number, answer: string) {
  const response = await http.post<PostAnswerResponse>(
    `/recruitment/spelling?id=${id}&answer=${answer}`
  )
  return response.data
}

function useSendAnswer() {
  async function postAnswer(id: number, userAnswer: string) {
    return getAnswerData(id, userAnswer)
  }

  return postAnswer
}

export { useSendAnswer }
