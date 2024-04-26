import React from 'react'
import cl from './Container.module.scss'
import { BG } from '../../../../assets/Bg'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cl.root}>
      <BG />
      {children}
    </div>
  )
}
