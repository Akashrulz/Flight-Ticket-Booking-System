package com.booking.ticket.flight.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.booking.ticket.flight.dao.FlightDetailsAdminRepository;
import com.booking.ticket.flight.entity.FlightDetailsAdmin;

@Service
public class FlightDetailsAdminServiceimpl implements FlightDetailsAdminService {
	
	@Autowired
	FlightDetailsAdminRepository flightDetailsAdminRepository;
	
	
	@Override
	public FlightDetailsAdmin save(@RequestBody FlightDetailsAdmin theFlightDetailsAdmin) {
		// TODO Auto-generated method stub
		return	flightDetailsAdminRepository.save(theFlightDetailsAdmin);

	}


	@Override
	public List<FlightDetailsAdmin> findAllFlights() {
		// TODO Auto-generated method stub
		return flightDetailsAdminRepository.findAll();
	}


	@Override
	public FlightDetailsAdmin findById(int fid) {
		Optional<FlightDetailsAdmin> result = flightDetailsAdminRepository.findById(fid);
		
		FlightDetailsAdmin theFlightDetailsAdmin = null;
		
		if (result.isPresent()) {
			theFlightDetailsAdmin = result.get();
		}
		else {
			
			throw new RuntimeException("Did not find flight id - " + fid);
		}
		
		return theFlightDetailsAdmin;
	
		
	}


	@Override
	public void deleteById(int fid) {
		flightDetailsAdminRepository.deleteById(fid);
		
		
	}

	/*
	@Override
	public Object findBySourceAndDestinationAndDate(String source, String destination) {
		
		return flight_Details_Admin_Repository.findBySourceAndDestinationAndDate(source, destination);
	}	*/

}
