package com.booking.ticket.flight.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.booking.ticket.flight.entity.TicketBookingHistory;

@Repository
public interface TicketBookingHistoryRepository extends JpaRepository<TicketBookingHistory, Integer> {

	//@Query("SELECT DISTINCT t.fid FROM TicketBookingHistory t WHERE t.bid = :bid")
	//int findFidByBid(@Param("bid") Integer bid);


	
}
