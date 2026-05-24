package com.example.demo.service;

import com.example.demo.entity.Login;
import com.example.demo.entity.User;
import com.example.demo.repository.LoginRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class LoginService {
    @Autowired
    LoginRepository loginRepository;
    public Login addUser(Login login){
        return loginRepository.save(login);
    }
    public List<Login> getuser(){
        return loginRepository.findAll();
    }
    public String deleteuser(String email){
        Login e=loginRepository.findByEmail(email);
        System.out.println("I AM WORKING");
        System.out.println(e);
        if (e==null){
            return "Not found";
        }
        loginRepository.delete(e);
        return "deleted Successfull";
    }

    public String update(String email, User user){
        Login e=loginRepository.findByEmail(email);
        if (e==null){
            return "NO FOUND";
        }
        e.setName(user.getName());
        loginRepository.save(e);
        return "UPDATED";
    }



}
