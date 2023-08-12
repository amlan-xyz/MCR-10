import { createContext, useState,useEffect } from "react";

import {inventoryData} from '../data/inventory'
import {v4 as uuid} from 'uuid'

export const InventoryContext=createContext();

export function InventoryContextProvider({children}){

	const [inventory,setInventory]=useState([]);
	const [departments,setDepartments]=useState([]);
	const [product,setProduct]=useState({});

	const getInventory=()=>{
		setInventory(inventoryData);
	}

	const getDepartments=()=>{
		setDepartments(inventoryData.reduce((acc,curr)=>{
			if(!acc.includes(curr.department)){
				acc.push(curr.department);
			}
			return acc;
		},[]))
	}


	
	const getProduct=(product_id)=>{
		setProduct(inventory.find(({id})=>id===Number(product_id)));
	}

	const filterItem=(item)=>{
		setInventory(inventory.filter(({department})=>department===item));
	}

	const value={setInventory,getProduct,product,inventory,getInventory,departments,getDepartments,filterItem};

	useEffect(()=>{
		getInventory();
	},[]);

	return(
		<InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>	
	)
}