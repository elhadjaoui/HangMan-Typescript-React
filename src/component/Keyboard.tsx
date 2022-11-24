import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type keyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetters: (letter: string) => void,
    disabled:boolean
}
export const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetters, disabled }: keyboardProps) => {
    console.log(activeLetters);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem"
        }}>
            {KEYS.map((key, index) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button onClick={() => addGuessedLetters(key)} className={`${styles.btn}
                         ${isActive ? styles.active : ""}
                         ${isInactive ? styles.inactive : ""}`} key={index}
                         disabled={isActive || isInactive || disabled}
                         >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}