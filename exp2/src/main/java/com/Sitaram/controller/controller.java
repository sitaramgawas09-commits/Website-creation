package com.Sitaram.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;






@Controller
public class controller {
    
    @GetMapping("/index")
    public String getMethodName1() {
        return "index";
    }
   
   @GetMapping("/about")
   public String getMethodName2() {
       return "about";
   }

   @GetMapping("/teacherDetails")
   public String getMethodName3() {
       return "TeacherDetails";
   }
   
   
}

