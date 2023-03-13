package com.simplilearn.kitchenStory.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.kitchenStory.backend.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	@Query("from User u where u.email=:email and u.password=:password")
	public User findByEmailPass(String email, String password);
	
}
