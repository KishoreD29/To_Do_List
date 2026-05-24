package com.example.demo.repository;

import com.example.demo.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer>{
    @Query("select login from Login login where login.email=:email ")
    public Login findByEmail(@Param("email") String email);

}
