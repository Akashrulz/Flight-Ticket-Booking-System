package com.booking.ticket.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.booking.ticket.flight.dao.FlightDetailsAdminRepository;
import com.booking.ticket.flight.entity.FlightDetailsAdmin;
import com.booking.ticket.flight.entity.PassengerDetails;
import com.booking.ticket.flight.service.FlightDetailsAdminService;



@CrossOrigin
@RestController
@RequestMapping("/flightdetailsadmin")
public class FlightDetailsAdminController {
		
	//need to inject service 
	@Autowired
	FlightDetailsAdminService flightDetailsAdminService;

	
	
	////Add new flight
	
	@PostMapping("/newflight")
	public FlightDetailsAdmin addFlightDetailsAdmin(@RequestBody FlightDetailsAdmin theFlightDetailsAdmin) {
		
		// also just in case they pass an id in JSON ... set id to 0
					// this is to force a save of new item ... instead of update
					
		theFlightDetailsAdmin.setFid(0);
					
		flightDetailsAdminService.save(theFlightDetailsAdmin);
		
		return theFlightDetailsAdmin;
		
		
		
	}
	
	// get all flights
	@GetMapping("/showflightsadmin")
	public List<FlightDetailsAdmin> findAllFlights(){
		return flightDetailsAdminService.findAllFlights();
		
	}
	
	
	//get single flight
	
		@GetMapping("/showflightsadmin/{fid}")
		public FlightDetailsAdmin getFlight(@PathVariable int fid) {
			
			FlightDetailsAdmin theFlight= flightDetailsAdminService.findById(fid);
			
			if (theFlight == null) {
				throw new RuntimeException("flight id not found - " + fid);
			}
			
			return theFlight;
		}
		
			
		
		// add mapping for PUT  - update existing flight
		
		@PutMapping("/updateflight")
		public FlightDetailsAdmin updateFlight(@RequestBody FlightDetailsAdmin theFlightDetailsAdmin) {
			
			flightDetailsAdminService.save(theFlightDetailsAdmin);
			
			return theFlightDetailsAdmin;
		}
		
		
		// add mapping for DELETE /showflightsadmin/{fid} - delete flight
		
		@DeleteMapping("/showflightsadmin/{fid}")
		public String deleteFlight(@PathVariable int fid) {
			
			FlightDetailsAdmin tempFlight= flightDetailsAdminService.findById(fid);
			
			// throw exception if null
			
			if (tempFlight == null) {
				throw new RuntimeException("flight id not found - " + fid);
			}
			
			flightDetailsAdminService.deleteById(fid);
			
			return "Deleted flight id - " + fid;
		}
		
		@Autowired 
		FlightDetailsAdminRepository test;
		
		@GetMapping("/searchflightpass")
		public ResponseEntity<List<FlightDetailsAdmin>> getFlightBySourceAndDestinationAndDate(@RequestParam 
				String source, String destination){
			
			return new ResponseEntity<>(test.findBySourceAndDestination(source,destination),HttpStatus.OK);
			
		}
		
		/*@PutMapping("/testkl")
		public int getupdateUserSetStatusForName(@RequestParam int fid) {
			return test.updateUserSetStatusForName(fid);
			
		}
		
		/*
		@GetMapping("/passengerdetails/{bid}")
		public List<PassengerDetails> findByBid(@PathVariable int bid) {
			return ticketBookingHistoryService.findByBid(bid);
		}*/
		
		
		@GetMapping("/testmickl/{fid}")
		public FlightDetailsAdmin findByFid(@PathVariable int fid) {
			
			return test.findFlightByFid(fid); 
			
		}
		
		

}
