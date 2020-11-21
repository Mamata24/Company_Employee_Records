import React from 'react'
import axios from 'axios'
import { Pagination } from '@material-ui/lab';
import searchBar from './searchBar'
class Employee extends React.Component {
  state = {
	  employees: [],
	  page: 1,
	  totalCount:0
    };
	componentDidMount() {
		axios.post(`http://localhost:5000/allemployees?page=${this.state.page}&limit=5`)
			.then(res => {
				this.setState({
					employees: res.data.data
				})
			})
	}
	PageChange = async (e, value) => {
		await this.setState({ page: value });
		axios
			.get(`http://localhost:5000/api/user/?page=${value}&limit=5`)
			.then((res) => {
				this.setState({
					students: [ ...res.data.current ],
					totalCount: res.data.totalCount
				});
			})
			.catch((err) => console.log(err));
	};
	render() {
		const{totalCount}=this.state
		return (
			<div>
				{this.state.employees.map(employee =>
					<section className="card-list" key={employee._id}>
							<article className="card">
								<header className="card-header">
							  <h2>{employee.employee_name}</h2>
								</header>
								<div className="card-author">
									<a className="author-avatar" href="#">
										<img src={employee.employee_image} />
									</a>
									<div className="blood">
									<div className="blood-prefix">Blood Group: {employee.department}</div>
								  	<div className="blood-prefix">Gender: {employee.gender}</div>
									<div className="blood-prefix">Salary: {employee.total_salary}</div>
								  	<div className="blood-prefix">Joining_date: {employee.joining_date}</div>

									</div>
						  </div>
					  </article>
					  </section>
				)}
				<Pagination
					className="pagination"
					count={Math.ceil(totalCount / 5)}
					variant="outlined"
					page={this.state.page}
					onChange={this.PageChange}
				/>
				
						  </div>
	
		  );
	}
  }


export default Employee