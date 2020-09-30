create database GladiatorProject;
use GladiatorProject

create table Admin
(
AdminEmailId nvarchar(320) NOT NULL,
Password nvarchar(15) NOT NULL,
Title nvarchar(3) NOT NULL,
FirstName nvarchar(50) NOT NULL,
LastName  nvarchar(50) NOT NULL,
Constraint Admin_PK PRIMARY KEY(AdminEmailId),
Constraint Admin_Email_C CHECK (AdminEmailId LIKE '%_@__%.__%')
)

drop table Admin;

create table Seat
(
SeatId int IDENTITY(1,1),
SeatNo nvarchar(3) UNIQUE NOT NULL,
class nvarchar(20) NOT NULL,
Constraint Seat_PK PRIMARY KEY(SeatId)
)
drop table Seat
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
EconomyPrice numeric(8,2) NOT NULL,
BusinessPrice numeric(8,2) NOT NULL,
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
Constraint Schedule_Flight_FK FOREIGN KEY(FlightId) references Flight(FlightId) on delete cascade,
Constraint Seats_Pos CHECK(AvailableSeats>-1)
)

create table UserTable
(
    UserEmailId nvarchar(320),
	Password nvarchar(15) NOT NULL,
    Title nvarchar(3) NOT NULL,
    FirstName nvarchar(50) NOT NULL,
    LastName  nvarchar(50) NOT NULL,
	DateOfBirth Date NOT NULL,
	Age int NOT NULL,
	MobileNumber varchar(10) NOT NULL,
	Constraint User_PK PRIMARY KEY(UserEmailId),
	Constraint User_Email_C CHECK (UserEmailId LIKE '%_@__%.__%'),
	Constraint Age_Ck CHECK(Age>=18),
	Constraint phone_Ck CHECK (MobileNumber LIKE '[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')
)

create table Booking
(
BookingId varchar(6),
UserEmailId nvarchar(320) NOT NULL,
DateBooking Date NOT NULL,
TransactionId nvarchar(12) NOT NULL,
TotalPrice numeric(12,2) NOT NULL,
TotalPassenger int NOT NULL,
BookStatus nvarchar(15) NOT NULL,
Constraint Booking_PK PRIMARY KEY(BookingId),
Constraint Booking_User_FK FOREIGN KEY(UserEmailId) references UserTable(UserEmailId) on delete cascade
)


create table Ticket
(
TicketId varchar(13) NOT NULL,
FlightId nvarchar(5) NOT NULL,
Title nvarchar(3) NOT NULL,
FirstName nvarchar(50) NOT NULL,
LastName  nvarchar(50) NOT NULL,
AgeGroup nvarchar(10) NOT NULL,
SourceId varchar(3) NOT NULL,
DestinationId varchar(3) NOT NULL,
DepartTime Time(0) NOT NULL,
ArrivalTime Time(0) NOT NULL,
Duration Time(0) NOT NULL,
SeatNo nvarchar(2) NOT NULL,
DateTravel Date NOT NULL,
Class nvarchar(15) NOT NULL,
Price numeric(10,2) NOT NULL,
BookingId varchar(6) NOT NULL,
DateCancellation Date,
Constraint Ticket_PK PRIMARY KEY(TicketId,FlightId),
Constraint Ticket_Booking_FK FOREIGN KEY(BookingId) references Booking(BookingId) on delete cascade,
)

drop table UserTable;
drop table Booking
drop table Ticket;
drop table FlightSchedule;
drop table Flight;
drop table Airport;



delete from Airport

INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('BOM','CS airport','Mumbai','Maharashtra');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('DEL','IG airport','Delhi','Delhi');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('BBI','BP airport','Bhubaneswar','Odisha');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('CCJ','NB airport','Kolkata','West Bengal');

delete from UserTable;


INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('ad@gmail.com',12345,'Mr','Arhan','Das','07/27/1998',22,'7234567891')

INSERT INTO Admin(AdminEmailId, Password, Title, FirstName, LastName) VALUES('arhandas1998ad@gmail.com',12345,'Mr','Arhan','Das')

INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA807','BOM','DEL','12:00:00','02:00:00','02:00:00',7689.00,24678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA707','DEL','BOM','12:00:00','02:00:00','02:00:00',7689.00,24678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA607','BBI','CCJ','2:30:00','04:45:00','02:15:00',3489.00,14678.00);

INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('09-26-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('09-26-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('09-26-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('09-27-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('09-27-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-26-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-26-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-26-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-27-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-27-2020','AA707',150);


select * from Flight;

