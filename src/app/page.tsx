'use client'

import Question from "@/components/question";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: 100, left: 100 })
  const [wasHovered, setWasHovered] = useState(false)

  const [text, setText] = useState("My question is with alot of words that span in multiple lines?")
  const [isAnswered, setIsAnswered] = useState(false)

  const moveButton = () => {
    setWasHovered(true)
    const randomTop = Math.floor(Math.random() * window.innerHeight * 0.8) // Stay within viewport
    const randomLeft = Math.floor(Math.random() * window.innerWidth * 0.8)

    setPosition({ top: randomTop, left: randomLeft })
    console.log(`New Position: Top ${randomTop}px, Left ${randomLeft}px`)
  }

  const recordAnswer = async () => {
    setText("Our customer support representatives will contact you shortly")
    setIsAnswered(true)

    await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  return (
    <div className="
      min-h-screen flex h-full flex-col items-center justify-center bg-linear-to-tr from-pink-400 via-pink-400 to-pink-200
    ">
      <main >
        <Question question={text}/>
      
        <div className="flex flex-col gap-2 p-4 items-center">
          <button 
            className={`
              border-3 py-2 px-4 rounded-lg text-white font-bold 
              cursor-pointer animate-bounce
              hover:border-5
              pulse-hover
              ${wasHovered ? "text-8xl border-4 py-8 px-20" : "text-6xl"}
              ${isAnswered ? "opacity-0": ""}
            `}
            onClick={recordAnswer}
          >
            YES
          </button>
          <button 
            className={`
              w-24 border-3 py-1 px-1 rounded-lg text-white font-bold text-2xl
              cursor-pointer 
              ${wasHovered ? "fixed" : ""}
              ${isAnswered ? "opacity-0": "opacity-75"}
            `}
            style={{ top: position.top, left: position.left }}
            onMouseEnter={moveButton}
            onClick={moveButton}
          >
              NO!
          </button>
        </div>
      </main>
    </div>
  );
}
