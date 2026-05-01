package com.Sitaram.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Sitaram.DTO.Teacher;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class TeacherApi {
@PostMapping("/teacher")
public Teacher postMethodName(@RequestBody Teacher DTO) {
    return DTO;
}

}
