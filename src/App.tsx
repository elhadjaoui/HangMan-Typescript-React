import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { HangmanDrawin } from './component/HangmanDrawin'
import { HangmanWord } from './component/HangmanWord'
import { Keyboard } from './component/Keyboard'
import word from "./WorldList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return word[Math.floor(Math.random() * word.length)]
  })  

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters  = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string)=>  
  {    
    if (guessedLetters.includes(letter) ) return
    setGuessedLetters(currentLetter => [...currentLetter,letter])
  }, [guessedLetters])

  const handler = (e :KeyboardEvent) =>
  {
    const key = e.key
    if (!key.match(/^[a-z]$/) || isWinner || isLoser) return
    e.preventDefault()
    addGuessedLetter(key)
  }
  useEffect(() =>
  {
    document.addEventListener("keypress",handler)
    return (()=>
    {
      document.removeEventListener("keypress", handler)
    })
  },[guessedLetters])
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "auto auto",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}> {isWinner && "Winner - Refrech to try again"}  {isLoser && "Try Again - Refrech to try again"} </div>
      <HangmanDrawin numberOfGuesses={incorrectLetters.length }/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>

      {/* Wrapper */}
      <div style={{ 
        alignSelf: "stretch"
      }}>
        <Keyboard activeLetters={guessedLetters.filter(letters => wordToGuess.includes(letters))}
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetter }
          disabled={isWinner || isLoser}
          />
      </div>
    </div>
  )
}

export default App
