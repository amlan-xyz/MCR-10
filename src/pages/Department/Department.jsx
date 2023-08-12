
import { useEffect,useContext, useState, useReducer } from 'react'

import {InventoryContext} from '../../index'

import './style.css'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { filterReducer } from '../../reducer/filterReducer';
import { useNavigate } from 'react-router-dom';

export function Department(){

	const {departments,inventory,getDepartments,dispatch}=useContext(InventoryContext);

	const navigate=useNavigate();

	useEffect(()=>{
		getDepartments();
		dispatch({type:'reset',initial:inventory});
	},[])

	return(
		<section className="department layout">
			<Sidebar/>
			<ul className="department_list">
				{
					departments.map(item=>(
						<li className='department_card' onClick={()=>{
							dispatch({type:'filter_department',payload:item,inital:inventory})
							navigate('/products');
						}}>{item}</li>	
					))
				}
			</ul>
		</section>	
	)
}