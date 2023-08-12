import { useContext, useEffect,useReducer, useState } from "react";



import {InventoryContext} from '../../index'

import { Sidebar } from "../../components/Sidebar/Sidebar"

import { filterReducer } from "../../reducer/filterReducer";

import './style.css'
import { Link, useNavigate } from "react-router-dom";


export function ProductListing(){

	const {inventory,departments,getDepartments,filter}=useContext(InventoryContext);
	const [initialState,setInitialState]=useState(inventory);

	const [state,dispatch]=useReducer(filterReducer,initialState);
	const navigate=useNavigate();

	const filterDepartment=(e)=>{
		dispatch({type:'filter_department',payload:e.target.value,initial:inventory});
	}

	const sortItems=(e)=>{
		dispatch({type:'sort_items',payload:e.target.value});
	}

	useEffect(()=>{
		getDepartments();
	},[])

	
	return(
		<section className=" layout">
			<Sidebar/>
			<div className="product_listing">
			<header className="product_listing_header">
				<h1>Products</h1>
				<select name="departments" onChange={filterDepartment} >
					<option value="all">All Departments</option>
					{
						departments.map(item=>(
							<option value={item}>{item}</option>
						))
						
					}
				</select>

				{/* checkbox */}
				<div className="checkbox">
					<input id="low_stock" onChange={()=>{
						dispatch({type:'filter_low_stock'})
					}} type="checkbox"/>
					<label htmlFor="low_stock">Low Stock Item</label>
				</div>
				
				{/* name */}
				<select id="" onChange={sortItems}>
					<option value="price">Price</option>
					<option value='stock'>Stock</option>
					<option value="name">Name</option>
				</select>
				<Link className="btn_primary" to='/new-product'>New</Link>
			</header>

			<table className="products_table">
				<tr className="tr_dark">
					<th>Image</th>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
					<th>Stock</th>
					<th>Supplier</th>
				</tr>
				
					{
						state.map(item=>{
							const {id,imageUrl,name,description,price,stock,supplier}=item;
							return(
								<tr>
									<td><img className="product_img" src={imageUrl} alt="" /></td>
									<td><Link to={`/product/${id}`}  >{name} </Link> </td>
									<td>{description}</td>
									<td>{price}</td>
									<td>{stock}</td>
									<td>{supplier}</td>
								</tr>
							)
						})
					}
				
			</table>
			</div>

		</section>	
	)
}