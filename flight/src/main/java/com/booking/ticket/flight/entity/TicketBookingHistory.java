package com.booking.ticket.flight.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="ticket_booking_history")
public class TicketBookingHistory {
	
	//define fields
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bid") 
	private int bid;
	
	@Column(name="fid")
	private int fid;
	
	@Column(name="numberof_economy")
	private int numberofEconomy;
	
	@Column(name="numberof_first")
	private int numberofFirst;
	
	
	
	@Column(name="fare_total")
	private int fareTotal;
		
}
