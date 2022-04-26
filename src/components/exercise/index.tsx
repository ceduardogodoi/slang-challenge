import { FormEvent, useRef, useState } from 'react'

import { useGetExercise } from '../../hooks/useGetExercise'
import { useSendAnswer } from '../../hooks/useSendAnswer'

import { PostAnswerResponse } from '../../services/response/PostAnswerResponse'

import * as S from './styles'

function Exercise() {
  const [word, setWord] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [usedLetters, setUsedLetters] = useState<number[]>([])
  const [answer, setAnswer] = useState<PostAnswerResponse>()

  const audioRef = useRef<HTMLAudioElement>(null)

  const exercise = useGetExercise()
  const postAnswer = useSendAnswer()

  function handleClickLetter(letter: string, index: number) {
    setWord(prev => `${prev}${letter}`)

    setUsedLetters([...usedLetters, index])
  }

  async function playAudio(): Promise<void> {
    setIsPlaying(true)
    await audioRef.current?.play()
    setIsPlaying(false)
  }

  async function handleSubmitAudio(event: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault()

    const response = await postAnswer(exercise!!.id, word)
    setAnswer(response)
    setIsLoading(false)
  }

  return (
    <S.Form onSubmit={handleSubmitAudio}>
      <div>
        {exercise?.['audio-url'] && (
          <S.PlayerContainer>
            <S.Player>{!isPlaying && <button onClick={playAudio} />}</S.Player>
            <audio ref={audioRef}>
              <source src={exercise['audio-url']} type="audio/mp3" />
            </audio>
          </S.PlayerContainer>
        )}
        <S.PlayerInputContainer>
          <S.H1>What did you hear?</S.H1>
          <S.Input
            type="text"
            onChange={event => setWord(event.target.value)}
            value={word}
            disabled={!exercise || isLoading}
          />
        </S.PlayerInputContainer>
        {exercise && (
          <S.LetterContainer>
            {exercise['letter-pool'].map((letter, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleClickLetter(letter, index)}
                disabled={!exercise || isLoading || usedLetters.includes(index)}
              >
                {letter}
              </button>
            ))}
          </S.LetterContainer>
        )}
        {answer && (
          <S.AnswerContainer>
            {answer.correct ? (
              <S.Answer correct>Correct!</S.Answer>
            ) : (
              <S.Answer>Incorrect</S.Answer>
            )}
            <S.CorrectAnswer>
              The answer is: <strong>{answer['correct-answer']}</strong>
            </S.CorrectAnswer>
          </S.AnswerContainer>
        )}
      </div>
      <S.ButtonContainer>
        <S.Button disabled={!exercise || isLoading} type="submit">
          Send
        </S.Button>
      </S.ButtonContainer>
    </S.Form>
  )
}

export { Exercise }
