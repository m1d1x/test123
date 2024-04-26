import { GameButton, Input } from '../shared'
import SvgComponent from '../assets/Icon'
import { Topbar } from '../widgets/Topbar'
import { useState } from 'react'
import { CartButton, HomeButton, SettingsButton } from '../features'
import { Showcase } from '../widgets/Showcase'

function App() {
  const [profile, setProfile] = useState(true)
  const [game, setGame] = useState(false)

  const handleProfile = () => {
    setGame(false)
    setProfile(true)
  }

  const handleGame = () => {
    setProfile(false)
    setGame(true)
  }

  return (
    <>
      <Topbar
        profile={profile}
        game={game}
        handleProfile={handleProfile}
        handleGame={handleGame}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '90px 0 0 0',
        }}
      >
        <HomeButton />
        <SettingsButton />
        <CartButton />

        <Input />
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <GameButton text={'привязать'} SvgComponent={SvgComponent} />
          <GameButton text={'привязать'} SvgComponent={SvgComponent} />
          <GameButton text={'привязать'} SvgComponent={SvgComponent} />
          <GameButton text={'привязать'} SvgComponent={SvgComponent} />
        </div>

        <Showcase />
      </div>
    </>
  )
}

export default App
