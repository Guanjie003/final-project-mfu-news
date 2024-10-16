package com.web.mfu.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Staff {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Staff_ID;
    private String Staff_Username;
    private Integer Staff_Password;
    
    public Long getStaff_ID() {
        return Staff_ID;
    }
    public void setStaff_ID(Long staff_ID) {
        Staff_ID = staff_ID;
    }
    public String getStaff_Username() {
        return Staff_Username;
    }
    public void setStaff_Username(String staff_Username) {
        Staff_Username = staff_Username;
    }
    public Integer getStaff_Password() {
        return Staff_Password;
    }
    public void setStaff_Password(Integer staff_Password) {
        Staff_Password = staff_Password;
    }
    
}