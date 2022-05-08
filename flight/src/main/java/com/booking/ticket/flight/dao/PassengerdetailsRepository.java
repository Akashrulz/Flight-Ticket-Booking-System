package com.booking.ticket.flight.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.booking.ticket.flight.entity.PassengerDetails;

@Repository
public interface PassengerdetailsRepository extends JpaRepository<PassengerDetails,Integer >  {

	public List<PassengerDetails> findByBid(int bid); 
}
