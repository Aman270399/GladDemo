create database GladiatorProject;
use GladiatorProject

create table Admin
(
AdminEmailId nvarchar(320) NOT NULL,
Password nvarchar(20) NOT NULL,
Title nvarchar(3) NOT NULL,
FirstName nvarchar(50) NOT NULL,
LastName  nvarchar(50) NOT NULL,
Constraint Admin_PK PRIMARY KEY(AdminEmailId),
Constraint Admin_Email_C CHECK (AdminEmailId LIKE '%_@__%.__%')
)

drop table Admin;

create table Airport
(
AirportId varchar(3),
AirportName nvarchar(100) NOT NULL,
CityName nvarchar(20) NOT NULL,
StateName nvarchar(20) NOT NULL,
Constraint Airport_PK PRIMARY KEY(AirportId)
)

create table Flight
(
FlightId nvarchar(5),
SourceId varchar(3) NOT NULL,
DestinationId varchar(3) NOT NULL,
DepartTime Time(0) NOT NULL,
ArrivalTime Time(0) NOT NULL,
Duration Time(0) NOT NULL,
EconomyPrice numeric(6,2) NOT NULL,
BusinessPrice numeric(6,2) NOT NULL,
Constraint Flight_PK PRIMARY KEY(FlightId),
Constraint Flight_Source_FK FOREIGN KEY(SourceId) references Airport(AirportId),
Constraint Flight_Destination_FK FOREIGN KEY(DestinationId) references Airport(AirportId),
Constraint S_D_Unequal Check(SourceId <> DestinationId),
Constraint Ec_Price_Pos CHECK(EconomyPrice>-1),
Constraint B_Price_Pos CHECK(BusinessPrice>-1)
);

create table FlightSchedule
(
DateFlight Date NOT NULL,
FlightId nvarchar(5) ,
AvailableSeats int NOT NULL,
Constraint Schedule_PK PRIMARY KEY(DateFlight,FlightId),
Constraint Schedule_Flight_FK FOREIGN KEY(FlightId) references Flight(FlightId),
Constraint Seats_Pos CHECK(AvailableSeats>-1)
)

drop table FlightSchedule;
drop table Flight;
drop table Airport;

create table UserTable
(
    UserEmailId nvarchar(320),
	Password nvarchar(20) NOT NULL,
    Title nvarchar(3) NOT NULL,
    FirstName nvarchar(50) NOT NULL,
    LastName  nvarchar(50) NOT NULL,
	Age int NOT NULL,
	MobileNumber numeric(10) NOT NULL,
	Constraint User_PK PRIMARY KEY(UserEmailId),
	Constraint User_Email_C CHECK (UserEmailId LIKE '%_@__%.__%')
)

drop table UserTable;

create table Booking
(
BookingId varchar(6),
UserEmailId nvarchar(320) NOT NULL,
DateBooking Date NOT NULL,
TransactionId nvarchar(12) NOT NULL,
TotalPrice numeric(10,2) NOT NULL,
TotalPassenger int NOT NULL,
Constraint Booking_PK PRIMARY KEY(BookingId),
Constraint Booking_User_FK FOREIGN KEY(UserEmailId) references UserTable(UserEmailId)
)

drop table Booking

create table Ticket
(
TicketId varchar(13) NOT NULL,
FlightId nvarchar(5) NOT NULL,
Title nvarchar(3) NOT NULL,
FirstName nvarchar(50) NOT NULL,
LastName  nvarchar(50) NOT NULL,
Age int NOT NULL,
SeatNo nvarchar(2) NOT NULL,
DateTravel Date NOT NULL,
Class nvarchar(15) NOT NULL,
Price int NOT NULL,
BookingId varchar(6) NOT NULL,
DateCancellation Date,
Constraint Ticket_PK PRIMARY KEY(TicketId,FlightId),
Constraint Ticket_Flight_FK FOREIGN KEY(FlightId) references Flight(FlightId),
Constraint Ticket_Booking_FK FOREIGN KEY(BookingId) references Booking(BookingId)
)











