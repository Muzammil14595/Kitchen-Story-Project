package com.simplilearn.kitchenStory.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.kitchenStory.backend.entity.Item;

@Repository
public interface ItemRepo extends JpaRepository<Item, Integer>{

	@Query("from Item i where i.name=:name")
	public Item findByName(String name);
}
