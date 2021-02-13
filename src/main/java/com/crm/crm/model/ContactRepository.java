package com.crm.crm.model;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource; 
//The above one allows us to return data to client and cors to happen

@RepositoryRestResource
public interface ContactRepository extends CrudRepository<Contact,Long> {
    
}
