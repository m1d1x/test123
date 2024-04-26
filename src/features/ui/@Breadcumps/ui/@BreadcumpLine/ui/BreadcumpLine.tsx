import cl from './BreadcumpLine.module.scss'

export const BreadcumpLine = () => {
  return (
    <div className={cl.root}>
      <div className={cl.root__text}>
        <svg
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
          viewBox="0 -0.5 20 2"
        >
          <path stroke="rgba(255,53,50,0.9725490196078431)" d="M0 0h1M0 1h1" />
          <path stroke="#ff3532" d="M1 0h18M1 1h18" />
          <path
            stroke="rgba(255,53,50,0.9490196078431372)"
            d="M19 0h1m-1 1h1"
          />
        </svg>
      </div>
    </div>
  )
}
