import { useContext,useEffect,useState } from 'react'

import {InventoryContext} from '../../index'

import {Sidebar} from '../../components/Sidebar/Sidebar'

export function Dashboard(){

	const {inventory,getInventory}=useContext(InventoryContext);
	const [totalStock,setTotalStock]=useState(0);
	const [totalDelivered,setTotalDeliverd]=useState(0);
	const [lowStock,setLowStock]=useState(0);

	const getStockDetails=()=>{
		setTotalStock(inventory.reduce((acc,curr)=>acc+curr.stock,0));
		setTotalDeliverd(inventory.reduce((acc,curr)=>acc+curr.delivered,0));
		setLowStock(inventory.reduce((acc,curr)=>curr.stock<=10?acc+1:acc,0));
	}

	useEffect(()=>{
		getInventory();
		getStockDetails();
	},[])

	return (
		<section className="dashboard">
			<header>Dashboard Page</header>
			<Sidebar/>
			<div className="">
				<p>Total Stock:{totalStock}
				</p>
				<p>Total Delivered:{totalDelivered}</p>
				<p>Low Stock Items:{lowStock}</p>
			</div>
		</section>	
	)
}