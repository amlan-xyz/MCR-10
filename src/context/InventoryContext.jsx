import { createContext, useState } from "react";

import {inventoryData} from '../data/inventory'

export const InventoryContext=createContext();

export function InventoryContextProvider({children}){

	const [inventory,setInventory]=useState([]);
	const [departments,setDepartments]=useState([]);

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

	const value={inventory,getInventory,departments,getDepartments};

	return(
		<InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>	
	)
}