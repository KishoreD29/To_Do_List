package com.example.demo.controller;

import com.example.demo.entity.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")


public class TaskController {

    @Autowired
    TaskService taskService;
    @PostMapping("/addtask")
    public Task addTask(@RequestBody Task task){
        System.out.println("HI API");
        return taskService.addTask(task);
    }


    @GetMapping("/getalltask")
    public List<Task> getAllTask(){
        return taskService.getAllTask();
    }
    @DeleteMapping("/delete/{tid}")
    public String delete(@PathVariable int  tid){
        return taskService.delete(tid);
    }




}
