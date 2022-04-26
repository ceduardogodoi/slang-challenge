import styled from 'styled-components'

export const Form = styled.form`
  max-width: 70%;
  margin: 0 auto;
`

export const PlayerInputContainer = styled.div`
  margin-bottom: 1rem;
`

export const H1 = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 24px;
  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--border-gray-dark);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  outline: none;

  &:focus {
    border: 1px solid var(--border-main);
  }
`

export const LetterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;

  button {
    border: 1px solid var(--border-main);
    border-radius: var(--border-radius);
    padding: 0.5rem 0.65rem;
    color: var(--text-color-main);
    background-color: white;

    &:disabled {
      border-color: var(--border-gray-dark);
      color: var(--text-gray-dark);
    }
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
`

export const Button = styled.button`
  bottom: 1rem;
  left: 0;
  width: 100%;
  background-color: var(--bg-main);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;

  &:disabled {
    background-color: var(--bg-gray-dark);
  }
`

export const PlayerContainer = styled.div`
  margin-bottom: 1.5rem;
`

export const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--bg-main);
  padding: 0.5rem;
  margin: 0 auto;
  width: fit-content;
  border-radius: 4px;

  button {
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent var(--border-main);
    box-sizing: border-box;
    background-color: transparent;
  }
`

export const AnswerContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: center;
`

export const Answer = styled.p<{ correct?: boolean }>`
  text-align: center;
  color: ${props => (props.correct ? 'green' : 'red')};
`

export const CorrectAnswer = styled.output``
