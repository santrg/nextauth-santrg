"use client"
import Link from 'next/link'

import React from 'react'

function CardLayout() {
  return (
    <div className='bg-slate-700 p-3'>
      <Link href="/" className='text-white mx-3'>Home</Link>
      <Link href="../frontend/register" className='text-white mx-3'>Register</Link>
      <Link href="../frontend/login" className="text-white mx-3">Signin</Link>
    </div>
  )
}

export default CardLayout
