package com.booking.ticket.flight.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booking.ticket.flight.entity.SignupDetails;

@Repository
public interface SignupDetailsRepository extends JpaRepository<SignupDetails, Integer> {

}
