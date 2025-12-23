package com.electronic.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.electronic.store.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{  

}
