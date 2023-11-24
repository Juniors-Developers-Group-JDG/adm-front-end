'use client'

import { toastsContext } from '@/context/ToastContext'
import { useContext } from 'react'

export function useToasts() {
  const context = useContext(toastsContext)

  if (!context)
    throw new Error('useToasts must be used inside a ToastsProvider')

  return context
}
