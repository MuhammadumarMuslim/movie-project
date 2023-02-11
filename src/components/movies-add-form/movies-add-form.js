import {Component} from 'react'
import './movies-add-form.scss'

class MoviesAddForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: '',
    }
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  addFormHandler = e => {
    e.preventDefault()
    this.props.addForm({name: this.state.name, viewers: this.state.views})
    this.setState({
      name: '',
      views: '',
    })
  }

  render(){
    return (
      <div className="movies-add-form">
          <h3>Yangi Kino Qo'shish</h3>
          <form className="add-form d-flex" onSubmit={this.addFormHandler}>
              <input type="text"
                  className="form-control new-post-label" 
                  placeholder="Qanday Kino?" 
                  onChange={this.changeHandlerInput} 
                  name="name" 
                  value={this.state.name} />

              <input type="number" 
                  className="form-control new-post-label" 
                  placeholder="Nechi Marotaba Ko'rilgan" 
                  onChange={this.changeHandlerInput} 
                  name="views" 
                  value={this.state.views} />

              <button type="submit" className="btn btn-outline-success">
                  Qo'shish
              </button>
          </form>
      </div>
    )
  }
  
}

export default MoviesAddForm