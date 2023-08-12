import { Link } from "react-router-dom";

import './style.css'

export function Sidebar(){
	return(
		<div className="sidebar">
				<Link className="sidebar_item"  to='/'>Dashboard</Link>
				<Link className="sidebar_item" to='/department'>Department</Link>
				<Link className="sidebar_item" to='/products'>Products</Link>
		</div>	
	)
}