package com.simplilearn.kitchenStory.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.kitchenStory.backend.entity.Item;
import com.simplilearn.kitchenStory.backend.repository.ItemRepo;

@Service
public class ItemService {

	@Autowired
	ItemRepo itemRepo;
	
	public Item addItem(Item item) {
		return itemRepo.save(item);
	}
	
	public List<Item> getAllItems() {
		return itemRepo.findAll();
	}
	
	public Item getById(int id) {
		return itemRepo.findById(id).get();
	}
	
	public Item getByName(String name) {
		return itemRepo.findByName(name);
	}
	
	public void updItem(int id, Item item) {
		if(itemRepo.findById(id).isPresent()) {
			
			Item oldItem = itemRepo.findById(id).get();
			oldItem.setName(item.getName());
			oldItem.setPrice(item.getPrice());
			
			itemRepo.save(oldItem);
		}

	}
	
	public void delItem(int id) {
		itemRepo.deleteById(id);

	}
	
}
