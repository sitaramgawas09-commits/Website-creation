package com.Sitaram.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Sitaram.DTO.StudentDetails;

import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api")
public class MainApi {
    @GetMapping("/details")

     public StudentDetails GetDetailes() {
        StudentDetails  obj = new StudentDetails();
        // obj.setName("sitaram");
        // obj.setRollno("2408033");
        // obj.setDiv("A");
        // obj.setSTD("SYBCA");
        obj.input();
        obj.output();
        
        return obj  ;
     }
}
