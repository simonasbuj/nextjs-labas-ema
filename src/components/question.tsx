import React from 'react'

interface QuestionProps {
    question: string
}

export default function Question({ question }: QuestionProps) {
  return (
    <div className='text-white text-4xl text-center mb-10 font-medium'>{question}</div>
  )
}
