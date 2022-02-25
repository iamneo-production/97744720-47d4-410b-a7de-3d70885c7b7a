package com.examly.springapp.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Foodmenu {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer sno;
	
	private String itemimage;
	private String itemname;
	private String itemcategory;
	private Integer price;

	public Integer getSno() {
		return sno;
	}
	public void setSno(Integer sno) {
		this.sno = sno;
	}
	public String getItemimage() {
		return itemimage;
	}
	public void setItemimage(String itemimage) {
		this.itemimage = itemimage;
	}
	public String getItemname() {
		return itemname;
	}
	public void setItemname(String itemname) {
		this.itemname = itemname;
	}
	public String getItemcategory() {
		return itemcategory;
	}
	public void setItemcategory(String itemcategory) {
		this.itemcategory = itemcategory;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
}
