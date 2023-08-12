
import { useEffect,useContext, useState, useReducer } from 'react'

import {InventoryContext} from '../../index'

import './style.css'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { filterReducer } from '../../reducer/filterReducer';
import { useNavigate } from 'react-router-dom';

export function Department(){

	const {departments,getDepartments,filterItem}=useContext(InventoryContext);

	const navigate=useNavigate();

	useEffect(()=>{
		getDepartments();
	},[])

	return(
		<section className="department layout">
			<Sidebar/>
			<ul className="department_list">
				{
					departments.map(item=>(
						<li className='department_card' onClick={()=>{
							filterItem(item);
							navigate('/products');
						}}>{item}</li>	
					))
				}
			</ul>
		</section>	
	)
}