package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Login {
    @Id
    @GeneratedValue
    int ind;
    String name;
    String email;
    String role;


}
