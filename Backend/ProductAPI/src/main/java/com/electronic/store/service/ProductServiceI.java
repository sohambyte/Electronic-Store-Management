package com.electronic.store.service;

import java.util.List;

import com.electronic.store.model.Product;

public interface ProductServiceI {

	public List<Product> getdata();

	public void savedata(Product p);

	public Product getSingle(int id);

	public void delete(int id);

	public Product editdata(int id);

}
