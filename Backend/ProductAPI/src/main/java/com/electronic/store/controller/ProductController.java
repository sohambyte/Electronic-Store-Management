package com.electronic.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.electronic.store.model.Product;
import com.electronic.store.service.ProductServiceI;
@CrossOrigin("*")
@RestController

public class ProductController {

	@Autowired
	ProductServiceI psi;
	@GetMapping("/products")
	public List<Product> getdata(){
		return psi.getdata();
	}
	
	@PostMapping("/product")
	public void savedata(@RequestBody Product p) {
	psi.savedata(p);
	}
	
	@GetMapping("/products/{id}")
	public Product getSingle(@PathVariable int id) {
		return psi.getSingle(id);
	}
	@PutMapping("/product/{id}")
	public Product editdata(@PathVariable int id) {
		return psi.editdata(id);
	}
	@DeleteMapping("/product/{id}")
	public void delete(@PathVariable int id) {
		psi.delete(id);
	}
}
