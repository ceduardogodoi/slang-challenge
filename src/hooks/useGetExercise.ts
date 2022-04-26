import { useEffect, useState } from 'react'

import { http } from '../services/http'
import { GetExerciseResponse } from '../services/response/GetExerciseResponse'

async function getExerciseData() {
  const response = await http.get<GetExerciseResponse>('/recruitment/spelling')
  return response.data
}

function useGetExercise() {
  const [exercise, setExercise] = useState<GetExerciseResponse>()

  async function loadExercise() {
    const data = await getExerciseData()
    setExercise(data)
  }

  useEffect(() => {
    loadExercise()
  }, [])

  return exercise
}

export { useGetExercise }
