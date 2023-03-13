package com.simplilearn.kitchenStory.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.kitchenStory.backend.entity.User;
import com.simplilearn.kitchenStory.backend.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public User addUser(User user) {
		return userRepo.save(user);
	}
	
	public User login(User user) {
		// TODO Auto-generated method stub
		return userRepo.findByEmailPass(user.getEmail(), user.getPassword());
	}
	
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	
	public User getUser(int id) {
		return userRepo.findById(id).get();
		
	}

	
	public void updateUser(int id, User user) {
		
		if(userRepo.findById(id).isPresent()) {
			
			User oldUser = userRepo.findById(id).get();
			oldUser.setName(user.getName());
			oldUser.setEmail(user.getEmail());
			oldUser.setPassword(user.getPassword());
			userRepo.save(oldUser);
		
		}
	}

	
	public void deleteUser(int id) {
		if(userRepo.findById(id).isPresent()) {
			userRepo.deleteById(id);
		}
	}
}
