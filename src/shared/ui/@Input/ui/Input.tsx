import cl from './Input.module.scss'
import { PixelCover } from './@PixelCover'

export const Input = () => {
  return (
    <div className={cl.root}>
      <PixelCover />
      <input className={cl.root__input} type="text" maxLength={8} />
    </div>
  )
}
