package com.web.mfu.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Division_Student {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Division_ID;
    private String Division_Username;
    private Integer Division_Password;
    
    public Long getDivision_ID() {
        return Division_ID;
    }
    public void setDivision_ID(Long division_ID) {
        Division_ID = division_ID;
    }
    public String getDivision_Username() {
        return Division_Username;
    }
    public void setDivision_Username(String division_Username) {
        Division_Username = division_Username;
    }
    public Integer getDivision_Password() {
        return Division_Password;
    }
    public void setDivision_Password(Integer division_Password) {
        Division_Password = division_Password;
    }
    
    
    
}