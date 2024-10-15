package com.mfu.new_activity.controller;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.web.mfu.domain.Staff;

@RestController
public class Appcontroller {
    
    @Autowired
    StaffRepository StaffRepository;

    @GetMapping("/Staff")
    public ResponseEntity<List<Staff>> getStaff() {
        List<Staff> staff = StaffRepository.findAll();
        return new ResponseEntity<>(staff,HttpStatus.OK);
    }
    
}
