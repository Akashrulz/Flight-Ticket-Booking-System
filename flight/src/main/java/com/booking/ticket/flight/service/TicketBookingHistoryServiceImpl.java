package com.booking.ticket.flight.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.booking.ticket.flight.dao.PassengerdetailsRepository;
import com.booking.ticket.flight.dao.SignupDetailsRepository;
import com.booking.ticket.flight.dao.TicketBookingHistoryRepository;
import com.booking.ticket.flight.entity.PassengerDetails;
import com.booking.ticket.flight.entity.SignupDetails;
import com.booking.ticket.flight.entity.TicketBookingHistory;

@Service
public class TicketBookingHistoryServiceImpl implements TicketBookingHistoryService {
	
	@Autowired
	TicketBookingHistoryRepository ticketBookingHistoryRepository;
	
	@Autowired
	SignupDetailsRepository signupDetailsRepository;
	
	@Autowired
	PassengerdetailsRepository passengerDetailsRepository;
	
	@Override
	public TicketBookingHistory save(TicketBookingHistory theTicketBookingHistory) {
		// TODO Auto-generated method stub
		return ticketBookingHistoryRepository.save(theTicketBookingHistory);
	}

	


	@Override
	public List<SignupDetails> findAllSignupDetails() {
		// TODO Auto-generated method stub
		return signupDetailsRepository.findAll();
	}





	@Override
	public SignupDetails save(@RequestBody	SignupDetails signupDetails) {
		// TODO Auto-generated method stub
		return signupDetailsRepository.save(signupDetails);
	}
	
	
	@Override
	public List<PassengerDetails> findAllPassengers() {
		
		return passengerDetailsRepository.findAll();
	}




	@Override
	public PassengerDetails addNewPassenger(PassengerDetails passengerDetails) {
		// TODO Auto-generated method stub
		return passengerDetailsRepository.save(passengerDetails);
	}
	

	@Override
	public TicketBookingHistory findById(int bid) {
		Optional<TicketBookingHistory> result = ticketBookingHistoryRepository.findById(bid);
		
		TicketBookingHistory theTicketBookingHistory= null;
		
		if (result.isPresent()) {
			theTicketBookingHistory = result.get();
		}
		else {
			
			throw new RuntimeException("Did not find flight id - " + bid);
		}
		
		return theTicketBookingHistory;
	
		
	}




	@Override
	public List<PassengerDetails> findByBid(int bid) {
		// TODO Auto-generated method stub
		return passengerDetailsRepository.findByBid(bid);
	}

	

}
