

import './app-info.scss'

const AppInfo = ({allMoviesCount, favouriteMoviesCount, likeMoviesCount}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha Kinolar soni: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">Sevimli Kinolar soni: {favouriteMoviesCount} </p>
      <p className="fs-4 text-uppercase">Like Bosilgan Kinolar soni: {likeMoviesCount} </p>
    </div>
  )
}

export default AppInfo