import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  return (
    <main className="auth-page">
      <SignUp/>
    </main>
  )
}