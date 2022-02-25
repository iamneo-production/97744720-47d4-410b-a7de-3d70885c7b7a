package com.examly.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.*;
import com.examly.springapp.Repository.*;

@Service
public class FoodmenuService {
	
	@Autowired
	private FoodmenuRepository foodmenurepository;	
	public Foodmenu addItem(Foodmenu foodmenu)
	{
		return foodmenurepository.save(foodmenu);
	}
	
	public List<Foodmenu> getItems()
	{
		return (List<Foodmenu>) foodmenurepository.findAll();
	}
	
	public void deleteItem(Integer sno)
	{
		foodmenurepository.deleteById(sno);
	}
	
	public Foodmenu upadteItem(Foodmenu foodmenu)
	{
		Integer sno=foodmenu.getSno();
		Foodmenu item=foodmenurepository.findById(sno).get();
		item.setItemimage(foodmenu.getItemimage());
		item.setItemname(foodmenu.getItemname());
		item.setItemcategory(foodmenu.getItemcategory());
		item.setPrice(foodmenu.getPrice());
		return foodmenurepository.save(item);
	}
}
