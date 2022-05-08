package com.booking.ticket.flight.entity;

import java.util.Date;
import java.sql.Time;

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
@Table(name="flight_details_admin")
public class FlightDetailsAdmin {
		
		//define fields
		
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="fid")
		private int fid;
		
		@Column(name="airline_name")
		private String airlineName;
		
		@Column(name="fcode")
		private String fcode;
		
		@Column(name="source")
		private String source;
		
		@Column(name="destination")
		private String destination;
		
		@Column(name="fare_economy")
		private int fareEconomy;
		
		@Column(name="fare_first")
		private int fareFirst;
		
		@Column(name="date")
		private Date date;
		
		@Column(name="start_time")
		private Time startTime;
		
		@Column(name="end_time")
		private Time endTime;
		
		@Column(name="seat_economy")
		private int seatEconomy;
		
		@Column(name="seat_first")
		private int seatFirst;
		
		@Column(name="notification")
		private String notification;
		

	}



