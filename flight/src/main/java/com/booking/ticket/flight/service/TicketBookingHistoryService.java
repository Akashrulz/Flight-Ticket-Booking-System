package com.booking.ticket.flight.service;


import java.util.List;

import com.booking.ticket.flight.entity.PassengerDetails;
import com.booking.ticket.flight.entity.SignupDetails;
import com.booking.ticket.flight.entity.TicketBookingHistory;

public interface TicketBookingHistoryService {
	
	public TicketBookingHistory save(TicketBookingHistory theTicketBookingHistory);

	public List<SignupDetails> findAllSignupDetails();

	public SignupDetails save(SignupDetails signupDetails);
	
	public List<PassengerDetails> findAllPassengers();
	
	public PassengerDetails addNewPassenger(PassengerDetails passengerDetails);

	public TicketBookingHistory findById(int bid);

	public List<PassengerDetails> findByBid(int bid);
}


//

