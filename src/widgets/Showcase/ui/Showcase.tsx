import { Breadcumps } from '../../../features'
import { ShowcaseCover } from './@ShowcaseCover'
import cl from './Showcase.module.scss'

export const Showcase = () => {
  return (
    <div className={cl.root}>
      <ShowcaseCover />
      <div className={cl.root__content}>
        <div className={cl.root__content_item}>
          <h2 className={cl.root__content_item_title}>ЗАКАЗ #5</h2>
        </div>
        <div className={cl.root__content_item}>
          <h2 className={cl.root__content_item_text}>СТАТУС</h2>
          <Breadcumps />
        </div>
      </div>
    </div>
  )
}
