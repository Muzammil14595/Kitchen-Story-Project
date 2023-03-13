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

import com.simplilearn.kitchenStory.backend.entity.User;
import com.simplilearn.kitchenStory.backend.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:4200/")
public class UserController {

	@Autowired
	UserService service;
	
	@PostMapping("")
	public ResponseEntity<Object> register(@RequestBody User user){
		//calling method to save object and taking response in variable named 'created'
		User created= service.addUser(user);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.CREATED);
		else
			return new ResponseEntity<Object>("Error while registering the user",
					HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody User user){
		//calling method login to save object of Customer and taking response in variable named 'created'
		User created= service.login(user);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("")
	public List<User> getAll(){
		return service.getAllUsers();
	}
	
	
	@GetMapping("/{id}")
	public User getCust(@PathVariable int id) {
		return service.getUser(id);
	}
	
	@DeleteMapping("/{id}")
	public void delCust(@PathVariable int id) {
		service.deleteUser(id);
	}
	
	@PutMapping("/{id}")
	public void updCust(@PathVariable int id, @RequestBody User user) {
		service.updateUser(id, user);		
	}
}
