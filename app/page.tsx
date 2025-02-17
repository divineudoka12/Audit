import { SignIn } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  )
}

export default Home