USE [master]
GO
/****** Object:  Database [GladiatorProject]    Script Date: 04-10-2020 21:54:50 ******/
CREATE DATABASE [GladiatorProject]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GladiatorProject', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GladiatorProject.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GladiatorProject_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GladiatorProject_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [GladiatorProject] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GladiatorProject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GladiatorProject] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GladiatorProject] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GladiatorProject] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GladiatorProject] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GladiatorProject] SET ARITHABORT OFF 
GO
ALTER DATABASE [GladiatorProject] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [GladiatorProject] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GladiatorProject] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GladiatorProject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GladiatorProject] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GladiatorProject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GladiatorProject] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GladiatorProject] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GladiatorProject] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GladiatorProject] SET  ENABLE_BROKER 
GO
ALTER DATABASE [GladiatorProject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GladiatorProject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GladiatorProject] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GladiatorProject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GladiatorProject] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GladiatorProject] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GladiatorProject] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GladiatorProject] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [GladiatorProject] SET  MULTI_USER 
GO
ALTER DATABASE [GladiatorProject] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GladiatorProject] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GladiatorProject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GladiatorProject] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GladiatorProject] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GladiatorProject] SET QUERY_STORE = OFF
GO
USE [GladiatorProject]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[AdminEmailId] [nvarchar](320) NOT NULL,
	[Password] [nvarchar](15) NOT NULL,
	[Title] [nvarchar](3) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
 CONSTRAINT [Admin_PK] PRIMARY KEY CLUSTERED 
(
	[AdminEmailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Airport]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Airport](
	[AirportId] [varchar](3) NOT NULL,
	[AirportName] [nvarchar](100) NOT NULL,
	[CityName] [nvarchar](20) NOT NULL,
	[StateName] [nvarchar](20) NOT NULL,
 CONSTRAINT [Airport_PK] PRIMARY KEY CLUSTERED 
(
	[AirportId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[BookingId] [varchar](6) NOT NULL,
	[UserEmailId] [nvarchar](320) NOT NULL,
	[DateBooking] [date] NOT NULL,
	[TransactionId] [nvarchar](12) NOT NULL,
	[TotalPrice] [numeric](12, 2) NOT NULL,
	[TotalPassenger] [int] NOT NULL,
	[BookStatus] [nvarchar](15) NOT NULL,
 CONSTRAINT [Booking_PK] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Flight]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Flight](
	[FlightId] [nvarchar](5) NOT NULL,
	[SourceId] [varchar](3) NOT NULL,
	[DestinationId] [varchar](3) NOT NULL,
	[DepartTime] [time](0) NOT NULL,
	[ArrivalTime] [time](0) NOT NULL,
	[Duration] [time](0) NOT NULL,
	[EconomyPrice] [numeric](8, 2) NOT NULL,
	[BusinessPrice] [numeric](8, 2) NOT NULL,
 CONSTRAINT [Flight_PK] PRIMARY KEY CLUSTERED 
(
	[FlightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FlightSchedule]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlightSchedule](
	[DateFlight] [date] NOT NULL,
	[FlightId] [nvarchar](5) NOT NULL,
	[AvailableSeats] [int] NOT NULL,
 CONSTRAINT [Schedule_PK] PRIMARY KEY CLUSTERED 
(
	[DateFlight] ASC,
	[FlightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seat]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seat](
	[SeatId] [int] IDENTITY(1,1) NOT NULL,
	[SeatNo] [nvarchar](3) NOT NULL,
	[class] [nvarchar](20) NOT NULL,
 CONSTRAINT [Seat_PK] PRIMARY KEY CLUSTERED 
(
	[SeatId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[SeatNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ticket]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ticket](
	[TicketId] [varchar](13) NOT NULL,
	[FlightId] [nvarchar](5) NOT NULL,
	[Title] [nvarchar](6) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[AgeGroup] [nvarchar](10) NOT NULL,
	[SourceId] [varchar](3) NOT NULL,
	[DestinationId] [varchar](3) NOT NULL,
	[DepartTime] [time](0) NOT NULL,
	[ArrivalTime] [time](0) NOT NULL,
	[Duration] [time](0) NOT NULL,
	[SeatNo] [nvarchar](3) NULL,
	[DateTravel] [date] NOT NULL,
	[Class] [nvarchar](15) NOT NULL,
	[Price] [numeric](10, 2) NOT NULL,
	[BookingId] [varchar](6) NOT NULL,
	[DateCancellation] [date] NULL,
 CONSTRAINT [Ticket_PK] PRIMARY KEY CLUSTERED 
(
	[TicketId] ASC,
	[FlightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTable]    Script Date: 04-10-2020 21:54:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTable](
	[UserEmailId] [nvarchar](320) NOT NULL,
	[Password] [nvarchar](15) NOT NULL,
	[Title] [nvarchar](3) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[DateOfBirth] [date] NOT NULL,
	[Age] [int] NOT NULL,
	[MobileNumber] [varchar](10) NOT NULL,
 CONSTRAINT [User_PK] PRIMARY KEY CLUSTERED 
(
	[UserEmailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [Booking_User_FK] FOREIGN KEY([UserEmailId])
REFERENCES [dbo].[UserTable] ([UserEmailId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [Booking_User_FK]
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD  CONSTRAINT [Flight_Destination_FK] FOREIGN KEY([DestinationId])
REFERENCES [dbo].[Airport] ([AirportId])
GO
ALTER TABLE [dbo].[Flight] CHECK CONSTRAINT [Flight_Destination_FK]
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD  CONSTRAINT [Flight_Source_FK] FOREIGN KEY([SourceId])
REFERENCES [dbo].[Airport] ([AirportId])
GO
ALTER TABLE [dbo].[Flight] CHECK CONSTRAINT [Flight_Source_FK]
GO
ALTER TABLE [dbo].[FlightSchedule]  WITH CHECK ADD  CONSTRAINT [Schedule_Flight_FK] FOREIGN KEY([FlightId])
REFERENCES [dbo].[Flight] ([FlightId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FlightSchedule] CHECK CONSTRAINT [Schedule_Flight_FK]
GO
ALTER TABLE [dbo].[Ticket]  WITH CHECK ADD  CONSTRAINT [Ticket_Booking_FK] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Booking] ([BookingId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Ticket] CHECK CONSTRAINT [Ticket_Booking_FK]
GO
ALTER TABLE [dbo].[Admin]  WITH CHECK ADD  CONSTRAINT [Admin_Email_C] CHECK  (([AdminEmailId] like '%_@__%.__%'))
GO
ALTER TABLE [dbo].[Admin] CHECK CONSTRAINT [Admin_Email_C]
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD  CONSTRAINT [B_Price_Pos] CHECK  (([BusinessPrice]>(-1)))
GO
ALTER TABLE [dbo].[Flight] CHECK CONSTRAINT [B_Price_Pos]
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD  CONSTRAINT [Ec_Price_Pos] CHECK  (([EconomyPrice]>(-1)))
GO
ALTER TABLE [dbo].[Flight] CHECK CONSTRAINT [Ec_Price_Pos]
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD  CONSTRAINT [S_D_Unequal] CHECK  (([SourceId]<>[DestinationId]))
GO
ALTER TABLE [dbo].[Flight] CHECK CONSTRAINT [S_D_Unequal]
GO
ALTER TABLE [dbo].[FlightSchedule]  WITH CHECK ADD  CONSTRAINT [Seats_Pos] CHECK  (([AvailableSeats]>(-1)))
GO
ALTER TABLE [dbo].[FlightSchedule] CHECK CONSTRAINT [Seats_Pos]
GO
ALTER TABLE [dbo].[UserTable]  WITH CHECK ADD  CONSTRAINT [Age_Ck] CHECK  (([Age]>=(18)))
GO
ALTER TABLE [dbo].[UserTable] CHECK CONSTRAINT [Age_Ck]
GO
ALTER TABLE [dbo].[UserTable]  WITH CHECK ADD  CONSTRAINT [phone_Ck] CHECK  (([MobileNumber] like '[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[UserTable] CHECK CONSTRAINT [phone_Ck]
GO
ALTER TABLE [dbo].[UserTable]  WITH CHECK ADD  CONSTRAINT [User_Email_C] CHECK  (([UserEmailId] like '%_@__%.__%'))
GO
ALTER TABLE [dbo].[UserTable] CHECK CONSTRAINT [User_Email_C]
GO
USE [master]
GO
ALTER DATABASE [GladiatorProject] SET  READ_WRITE 
GO
