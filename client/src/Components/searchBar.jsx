import React from 'react'
import axios from 'axios'
class searchBar extends React.Component {
  state = {
	  employees: [],
    };
    componentDidMount() {
        this.getSearch()
    }
        getSearch(){
		axios.post(`http://localhost:5000/search`)
			.then(res => {
				this.setState({
					employees: res.data.data
				})
			})
	}
    render() {
        return (
            <div class="row">

                <div class="col-md-6 mb-4">

                    <div class="input-group md-form form-sm form-1 pl-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"
                                aria-hidden="true"></i></span>
                        </div>
                        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" onClick={this.getSearch}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default searchBar


