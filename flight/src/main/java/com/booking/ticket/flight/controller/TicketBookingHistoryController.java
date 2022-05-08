package com.booking.ticket.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.booking.ticket.flight.entity.PassengerDetails;
import com.booking.ticket.flight.entity.SignupDetails;
import com.booking.ticket.flight.entity.TicketBookingHistory;
import com.booking.ticket.flight.service.TicketBookingHistoryService;

@CrossOrigin
@RestController
public class TicketBookingHistoryController {
	
	@Autowired
	TicketBookingHistoryService ticketBookingHistoryService;
	
	
	
////Add new seats
	
	@PostMapping("/ticketbookinghistory/newseats")
	public TicketBookingHistory addTicketBookingHistory(@RequestBody TicketBookingHistory theTicketBookingHistory) {
		
		// also just in case they pass an id in JSON ... set id to 0
					// this is to force a save of new item ... instead of update
					
		theTicketBookingHistory.setBid(0);
					
		ticketBookingHistoryService.save(theTicketBookingHistory);
		
		return theTicketBookingHistory;
		
		
		
	}
	

	@GetMapping("/signupdetails/credentials")
	public List<SignupDetails> findAllSignupDetails(){
		return ticketBookingHistoryService.findAllSignupDetails();
		
	}
	
	//create user rest api
	@PostMapping("/signupdetails/createuser")
	public SignupDetails createUser(@RequestBody SignupDetails signupDetails) {
		return ticketBookingHistoryService.save(signupDetails);
		
	}
	
	@GetMapping("/passengerdetails/passengers")
	public List<PassengerDetails> findAllPassengers(){
		return ticketBookingHistoryService.findAllPassengers();
		
	}
	
	@PostMapping("/passengerdetails/newpassenger")
	public PassengerDetails addPassengerDetails(@RequestBody PassengerDetails thePassengerDetails) {
		
		// also just in case they pass an id in JSON ... set id to 0
					// this is to force a save of new item ... instead of update
					
		thePassengerDetails.setPid(0);
					
		ticketBookingHistoryService.addNewPassenger(thePassengerDetails);
		
		return thePassengerDetails;
		
		
		
	}
	
	@GetMapping("/ticketbookinghistory/{bid}")
	public TicketBookingHistory getBookingHistory(@PathVariable int bid) {
		
		TicketBookingHistory theBook= ticketBookingHistoryService.findById(bid);
		
		if (theBook == null) {
			throw new RuntimeException("flight id not found - " + bid);
		}
		
		return theBook;
	}
	
	@GetMapping("/passengerdetails/{bid}")
	public List<PassengerDetails> findByBid(@PathVariable int bid) {
		return ticketBookingHistoryService.findByBid(bid);
	}
	

}
