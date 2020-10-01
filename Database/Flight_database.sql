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
SeatNo nvarchar(3) NOT NULL,
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

INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('GAU','LGB airport','Guwahati','Assam');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('PAT','JPN airport','Patna','Bihar');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('MZU','Muzaffarpur airport','Muzaffarpur','Bihar');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('IXC','Chandigarh airport','Chandigarh','Chandigarh');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('NMB','Daman airport','Daman','Daman & Diu');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('DIU','Diu airport','Diu','Daman & Diu');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('AMD','SVP airport','Ahmedabad','Gujrat');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('JRH','Jorhat airport','Jorhat','Assam');

INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('BHJ','Bhuj airport','Bhuj','Gujrat');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('STV','Surat airport','Surat','Gujrat');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('BDQ','Vadodara airport','Vadodara','Gujrat');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('SLV','Shimla airport','Shimla','Himachal Pradesh');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('IXJ','Jammu airport','Jammu','Jammu & Kashmir');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('SXR','SUA airport','Srinagar','Jammu & Kashmir');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('DBD','Dhanbad airport','Dhanbad','Jharkhand');
INSERT INTO Airport(AirportId, AirportName, CityName,StateName) VALUES('BHO','RB airport','Bhopal','Madhya Pradesh');
select * from Airport
delete from UserTable;


INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('ad@gmail.com',12345,'Mr','Arhan','Das','07/27/1998',22,'7234567891')

INSERT INTO Admin(AdminEmailId, Password, Title, FirstName, LastName) VALUES('arhandas1998ad@gmail.com',12345,'Mr','Arhan','Das')
INSERT INTO Admin(AdminEmailId, Password, Title, FirstName, LastName) VALUES('aman27399@gmail.com',12345,'Mr','Aman','Das')
select*from Admin

INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA807','BOM','DEL','12:00:00','02:00:00','02:00:00',7689.00,24678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA707','DEL','BOM','12:00:00','02:00:00','02:00:00',7689.00,24678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA607','BBI','CCJ','2:30:00','04:45:00','02:15:00',3489.00,14678.00);


INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA101','BOM','GAU','12:00:00','02:00:00','02:00:00',7899.00,25678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA102','GAU','BOM','12:00:00','02:00:00','02:00:00',8989.00,28978.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA103','BBI','DEL','2:30:00','04:45:00','02:15:00',4889.00,14678.00);

INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA201','MZU','PAT','3:00:00','4:00:00','01:00:00',4689.00,14678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA202','PAT','MZU','12:00:00','01:00:00','01:00:00',5689.00,14678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA203','SLV','DEL','2:30:00','04:45:00','02:15:00',9489.00,14678.00);

INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA241','DEL','SLV','5:00:00','07:00:00','02:00:00',4989.00,15678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA244','AMD','BBI','12:00:00','03:00:00','03:00:00',7899.00,24678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA273','DEL','BHJ','2:30:00','04:45:00','02:15:00',9489.00,14678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA291','BHJ','DEL','3:00:00','4:00:00','01:00:00',4689.00,14678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA301','SXR','IXJ','12:00:00','01:00:00','01:00:00',5689.00,14678.00);
INSERT INTO Flight(FlightId,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,EconomyPrice,BusinessPrice) VALUES('AA345','IXJ','SXR','2:30:00','04:45:00','02:15:00',9489.00,14678.00);


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

INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-07-2020','AA101',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-11-2020','AA102',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-15-2020','AA103',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-07-2020','AA201',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-08-2020','AA202',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-10-2020','AA203',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-11-2020','AA241',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-19-2020','AA244',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-13-2020','AA273',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-01-2020','AA291',150);

INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-01-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('12-26-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-26-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-27-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-27-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-26-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('11-26-2020','AA707',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('12-26-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('12-27-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('12-27-2020','AA707',150);

select * from FlightSchedule
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-26-2020','AA301',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('10-26-2020','AA345',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('01-26-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('01-26-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('02-26-2020','AA301',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('01-02-2020','AA607',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('02-27-2020','AA807',150);
INSERT INTO FlightSchedule(DateFlight,FlightId,AvailableSeats) VALUES('03-27-2020','AA707',150);

INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('arhandas1998ad@gmail.com',12345,'Mr','Arhan','Das','07/27/1998',22,'7234567891')
INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('aman27399@gmail.com',12345,'Mr','Aman','Singh','07/29/1998',22,'7888937062')
INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('khushimishra1104@gmail.com',12345,'Ms','Khushi','Mishra','07/28/1998',22,'8979859441')
INSERT INTO UserTable(UserEmailId, Password, Title, FirstName, LastName, DateOfBirth, Age, MobileNumber) VALUES('agrawalmohit603@gmail.com',12345,'Mr','Mohit','Agarwal','07/20/1998',22,'8222002785')




select * from UserTable
select * from Flight;

INSERT INTO Seat Values('A1','Business'),('A2','Business'),('A3','Business'),('A4','Business'),('A5','Economy'),('A6','Economy'),('A7','Economy'),('A8','Economy'),
                       ('B1','Business'),('B2','Business'),('B3','Business'),('B4','Business'),('B5','Economy'),('B6','Economy'),('B7','Economy'),('B8','Economy'),
					   ('C1','Business'),('C2','Business'),('C3','Business'),('C4','Business'),('C5','Economy'),('C6','Economy'),('C7','Economy'),('C8','Economy'),
					   ('D1','Business'),('D2','Business'),('D3','Business'),('D4','Business'),('D5','Economy'),('D6','Economy'),('D7','Economy'),('D8','Economy'),
					   ('E1','Business'),('E2','Business'),('E3','Business'),('E4','Business'),('E5','Economy'),('E6','Economy'),('E7','Economy'),('E8','Economy'),
					   ('F1','Business'),('F2','Business'),('F3','Business'),('F4','Business'),('F5','Economy'),('F6','Economy'),('F7','Economy'),('F8','Economy');



INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('B30OCL', 'arhandas1998ad@gmail.com', '09-26-2020', 'T30CL','8999.00', '1','Confirmed')
INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('C30RTE', 'aman27399@gmail.com', '09-26-2020', 'T30CO','24909.00', '2','Confirmed')
INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('B30OCM', 'aman27399@gmail.com', '09-27-2020', 'T30CC','24909.00', '2','Confirmed')
INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('B30OCK', 'khushimishra1104@gmail.com', '09-26-2020', 'T30BM','8999.00', '1','Confirmed')
INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('C30RBB', 'aman27399@gmail.com', '09-30-2020', 'T30DD','24909.00', '2','Confirmed')
INSERT INTO Booking (BookingId,UserEmailId,DateBooking,TransactionId,TotalPrice,TotalPassenger,BookStatus) Values('B30OCT', 'aman27399@gmail.com', '10-27-2020', 'T30CM','7909.00', '1','Confirmed')
select* from Booking

INSERT INTO Ticket (TicketId,FlightId,Title,FirstName,LastName,AgeGroup,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,SeatNo,DateTravel,Class ,Price,BookingId)Values('T01','AA807','Mr','Arhan','Das','Adult','BOM','DEL','12:00:00','02:00:00','02:00:00','C5','10-26-2020','Economy',7689.00,'B30OCL');
INSERT INTO Ticket (TicketId,FlightId,Title,FirstName,LastName,AgeGroup,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,SeatNo,DateTravel,Class ,Price,BookingId)Values('T03','AA807','Mr','Aman','Singh','Adult','BOM','DEL','12:00:00','02:00:00','02:00:00','C6','10-26-2020','Economy',7689.00,'B30OCM');
INSERT INTO Ticket (TicketId,FlightId,Title,FirstName,LastName,AgeGroup,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,SeatNo,DateTravel,Class ,Price,BookingId)Values('T04','AA807','Mr','Aman','Singh','Adult','BOM','DEL','12:00:00','02:00:00','02:00:00','C7','10-26-2020','Economy',7689.00,'B30OCM');
INSERT INTO Ticket (TicketId,FlightId,Title,FirstName,LastName,AgeGroup,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,SeatNo,DateTravel,Class ,Price,BookingId)Values('T02','AA807','Mr','Arhan','Das','Adult','BOM','DEL','12:00:00','02:00:00','02:00:00','A1','10-26-2020','Business',24678.00,'C30RTE');
INSERT INTO Ticket (TicketId,FlightId,Title,FirstName,LastName,AgeGroup,SourceId,DestinationId,DepartTime,ArrivalTime,Duration,SeatNo,DateTravel,Class ,Price,BookingId)Values('T06','AA807','Mr','Mohit','Singh','Adult','BOM','DEL','12:00:00','02:00:00','02:00:00','C6','10-27-2020','Economy',7689.00,'B30OCK');

select * from Ticket