package com.electronic.store.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.electronic.store.model.Product;
import com.electronic.store.repository.ProductRepository;

@Service
public class ProductService implements ProductServiceI {

	@Autowired
	ProductRepository pr;

	public List<Product> getdata() {
		
		return pr.findAll();
	}

	@Override
	public void savedata(Product p) {
		// TODO Auto-generated method stub
		pr.save(p);
		
	}

	@Override
	public Product getSingle(int id) {
		
		return pr.findById(id).get();
	}

	@Override
	public void delete(int id) {
		pr.deleteById(id);
		
	}

	@Override
	public Product editdata(int id) {
		
		return null;
	}
	
	

}
