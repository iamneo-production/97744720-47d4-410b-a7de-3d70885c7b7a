package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.*;
import com.examly.springapp.Service.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class FoodmenuController {

	@Autowired
	private FoodmenuService foodmenuservice;
	
	@PostMapping("/additem")
	public Foodmenu addItem(@RequestBody Foodmenu foodmenu)
	{
		return foodmenuservice.addItem(foodmenu);
	}
	
	@GetMapping("/getitems")
	public List<Foodmenu> getItems()
	{
		return foodmenuservice.getItems();
	}
	
	@DeleteMapping("/deleteitem")
	public void deleteItem(@RequestParam Integer sno)
	{
			foodmenuservice.deleteItem(sno);
	}
	
	@PutMapping("/updateitem")
	public Foodmenu updateItem(@RequestBody Foodmenu foodmenu)
	{
		return foodmenuservice.upadteItem(foodmenu);
	}
}
