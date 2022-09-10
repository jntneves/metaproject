package com.jntneves.metaproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jntneves.metaproject.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
