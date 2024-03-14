package com.example.infinity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("")
    public String main(){

        System.out.println("메인페이지 접속");
        return "index";
    }


}
