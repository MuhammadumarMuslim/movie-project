
import './app-filter.scss'

const AppFilter = ({ updateFilterHandler, filter }) => {
    return (
        <div className="btn-group">
        {btnsArr.map(btn => (
            <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-success' : 'btn-outline-success'}`} onClick={() => updateFilterHandler(btn.name)} type="button">
                {btn.label}
            </button>
        ))}
            
            
        </div>
    )
}

const btnsArr = [
    {name: 'all', label: 'Barcha Kinolar'},
    {name: 'popular', label: 'Mashxur Kinolar'},
    {name: 'mostViewers', label: "Eng Ko'p Ko'rilgan Kinolar"},
    {name: 'favourite', label: "Sevimli Kinolar"},

]


export default AppFilter




// <button className="btn btn-outline-success" type="button">
//     Mashxur Kinolar
// </button>
// <button className="btn btn-outline-success" type="button">
//     Eng Ko'p Ko'rilgan Kinolar
// </button>