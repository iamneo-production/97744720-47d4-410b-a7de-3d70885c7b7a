package com.examly.springapp.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.*;

@Repository
public interface FoodmenuRepository extends CrudRepository<MenuModel,Integer>{

}
