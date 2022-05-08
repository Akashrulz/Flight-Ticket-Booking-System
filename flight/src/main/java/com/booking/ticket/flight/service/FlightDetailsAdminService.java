package com.booking.ticket.flight.service;


import java.util.List;

import com.booking.ticket.flight.entity.FlightDetailsAdmin;

public interface FlightDetailsAdminService {
	
	public FlightDetailsAdmin save(FlightDetailsAdmin theFlightDetailsAdmin);

	public List<FlightDetailsAdmin> findAllFlights();

	public FlightDetailsAdmin findById(int fid);

	public void deleteById(int fid);

	//public Object findBySourceAndDestinationAndDate(String source, String destination, Date date);

	

	

}
