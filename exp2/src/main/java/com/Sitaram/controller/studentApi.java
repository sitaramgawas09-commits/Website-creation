package com.Sitaram.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Sitaram.DTO.StudentForm;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class studentApi {
    @PostMapping("/student")
    public StudentForm postMethodName(@RequestBody StudentForm DTO) {
        
        return DTO;
    }
    
}
