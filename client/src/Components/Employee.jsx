import React from 'react';
import axios from 'axios';
import './App.css';
import { Pagination } from '@material-ui/lab';

const customStyles = {
	content: {
		top: '30%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		padding: '5%',
		transform: 'translate(-50%, -50%)',
		background: '#76b0a7',
		borderRadius:  '5px'
	}
};

class Employee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			AddEmployees: false,
			employees: [],
			employee_id: '',
			employee_name: '',
            employee_image: '',
            department:'',
			gender: '',
			page: 1,
			totalCount: 0,
		};
	}

    componentDidMount = () => {
		axios.get(`http://localhost:5000/allemployees?page=1&limit=5`).then((res) => {
			this.setState({
				employees: res.data,
				loading: false,
			});
		});
	};
	
	onChange = (e) => {
		const { employee_id, employee_name, employee_image, department, gender } = this.state;
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	
	render() {
		const {
			employees,
			totalCount,
			loading,
			AddEmployees,
			employee_id,
			employee_name,
			employee_image,
			department,
			gender
		} = this.state;
		return (
			<div className="App">
				{loading ? (
					<p>Employees are Loading...</p>
				) : (
					employees.map((item) => (
						<section className="card-list" key={item.employee_id}>
							<article className="card">
                                <header className="card-header">
                                    <h2>{item.employee_id}</h2>
									<h2>{item.employee_name}</h2>
								</header>

								<div className="card-author">
									<a className="author-avatar" href="#">
										<img src={item.employee_image} />
									</a>
									<div className="blood">
										<div className="blood-prefix">Department: {item.department}</div>
										<div className="blood-prefix">Gender: {item.gender}</div>
									</div>
								</div>
                                </article>
						</section>
					))
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

export default Employee;
