package com.crm.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
public class ContactService implements CommandLineRunner {

    
    private ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository repository){
        this.contactRepository = repository;
    }

    @Override
    public void run(String... strings) throws Exception{
        this.contactRepository.save(new Contact("manudeep","gadde","manudeepgadde01@gmail.com"));
    }
    
}
