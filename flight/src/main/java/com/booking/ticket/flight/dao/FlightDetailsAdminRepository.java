package com.booking.ticket.flight.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.booking.ticket.flight.entity.FlightDetailsAdmin;
import com.booking.ticket.flight.entity.PassengerDetails;

@Repository
public interface FlightDetailsAdminRepository extends JpaRepository<FlightDetailsAdmin,Integer > {

	List<FlightDetailsAdmin> findBySourceAndDestination(String source,String destination);
	
	/*//update DecrementDemo
	  // −> set DecrementValue = DecrementValue - 1 where DecrementValue > 0;

	   @Query("update FlightDetailsAdmin a set a.seatEconomy = a.seatEconomy- 1 where a.fid = :fid")
	   int updateUserSetStatusForName(@Param("fid") Integer fid);

	
	@Query("select FlightDetailsAdmin a set a.seatEconomy = a.seatEconomy- 1 where a.fid = :fid")
	void letsupdate(@Param("fid") int fid);*/
	
	public  FlightDetailsAdmin findFlightByFid(int fid); 
		
	
	
	
	
}
