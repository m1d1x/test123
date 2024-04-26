import cl from './Topbar.module.scss'
import HeaderCover from '../../../assets/HeaderCover'

export const Topbar = ({
  profile,
  game,
  handleProfile,
  handleGame,
}: {
  profile: boolean
  game: boolean
  handleProfile: () => void
  handleGame: () => void
}) => {
  return (
    <div className={cl.root}>
      <div className={cl.root__container}>
        <div className={cl.root__container__item}>
          <label className={cl.root__container__item_label}>
            <input
              checked={game}
              onChange={handleGame}
              className={cl.root__container__item_label__radio}
              type="radio"
              name="topbar"
            />
            <span className={cl.root__container__item_label__text}>GAME</span>
          </label>
        </div>
        <div className={cl.root__container__item}>
          <label className={cl.root__container__item_label}>
            <input
              checked={profile}
              onChange={handleProfile}
              className={cl.root__container__item_label__radio}
              type="radio"
              name="topbar"
            />
            <span className={cl.root__container__item_label__text}>
              PROFILE
            </span>
          </label>
        </div>
      </div>
      <div className={cl.root__cover}>
        <HeaderCover />
      </div>
    </div>
  )
}
