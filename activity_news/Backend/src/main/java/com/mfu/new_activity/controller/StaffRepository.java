package com.mfu.new_activity.controller;

import java.util.List;
import com.web.mfu.domain.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository <Staff,Long> {
    List<Staff> findAll();
    List<Staff> findByStaff_username (String Staff_Username);
} 