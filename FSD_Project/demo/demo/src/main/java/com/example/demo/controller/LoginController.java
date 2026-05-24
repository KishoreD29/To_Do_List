package com.example.demo.controller;

import com.example.demo.entity.Login;
import com.example.demo.entity.User;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {
    @Autowired
    LoginService    loginService;
    @PostMapping("/login")
    public Login addUser(@RequestBody Login login){
        System.out.println("HI");
        return loginService.addUser(login);
    }
    @GetMapping("/details")
    public List<Login>  getUser(){
        System.out.println("hello");
        return loginService.getuser();
    }
    @DeleteMapping("/deletelogin/{email}")
    public String delete(@PathVariable String email){

        return loginService.deleteuser(email);

    }
    @PutMapping("/edit/{em}")
    public String update(@PathVariable String em,@RequestBody User name){
        System.out.println("UPDATE");
        return loginService.update(em,name);

    }




}
