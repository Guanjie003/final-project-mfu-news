package com.mfu.new_activity.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.web.domain;

public interface StaffRepository extends JpaRepository <Staff,Long> {
    List<Staff> findByStaff_username (String Staff_Username);
} 