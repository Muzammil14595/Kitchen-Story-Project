package com.simplilearn.kitchenStory.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.kitchenStory.backend.entity.Item;
import com.simplilearn.kitchenStory.backend.service.ItemService;

@RestController
@RequestMapping("/api/item")
@CrossOrigin("http://localhost:4200/")
public class ItemController {

	@Autowired
	ItemService itemService;
	
	@PostMapping
	public ResponseEntity<Object> addItem(@RequestBody Item item){
		Item createdItem = itemService.addItem(item);
		if(createdItem != null) {
			return new ResponseEntity<Object> (createdItem, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getByName/{name}")
	public ResponseEntity<Object> getByName(@PathVariable String name){
		//calling method login to save object of Customer and taking response in variable named 'created'
		Item createdItem= itemService.getByName(name);
		if(createdItem!=null)
			return new ResponseEntity<Object>(createdItem,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("")
	public List<Item> getAll(){
		return itemService.getAllItems();
	}
	
	
	@GetMapping("/{id}")
	public Item getCust(@PathVariable int id) {
		return itemService.getById(id);
	}
	
	@DeleteMapping("/{id}")
	public void delCust(@PathVariable int id) {
		itemService.delItem(id);
	}
	
	@PutMapping("/{id}")
	public void updCust(@PathVariable int id, @RequestBody Item item) {
		itemService.updItem(id, item);		
	}
}
