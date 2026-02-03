##  Medisetu Backend Assignment
This is a full-stack backend implementation for the Medisetu medical application, built with Node.js, Express, and MongoDB. It handles doctor-patient workflows, including automated onboarding, appointment management with conflict detection, and medical history tracking.

## Setup & Installation
Follow these steps to run the project on your local machine:

Clone the repository (or extract the ZIP file).

## Install dependencies:

## Bash
npm install
Configure Environment Variables: Create a .env file in the root directory (see the section below).

Start the Server:

## Bash
node server.js
The server will start on http://localhost:3000 by default.

## Environment Variables
The application requires the following variables in your .env file to function:

PORT: The port number for the local server (e.g., 3000).

MONGO_URI: Your MongoDB connection string (e.g., mongodb://localhost:27017/medisetu).

## How to Test
I have provided a test.http file in the root directory. Use the REST Client extension in VS Code to test the following modules:

Module 1: Doctor/Patient Login (returns the required dummy token).

Module 2: Appointment Booking (includes the mandatory 409 Conflict rule for double-bookings).

Module 3: Search & Filter (Filter appointments by name, phone, or status).

Module 4-5: Appointment status updates and Patient Profile fetching.

Module 6-7: Saving and fetching Patient Notes with Vitals (BP, Pulse, Temperature).

## Design Decisions & Assumptions
Mandatory Slot Conflict Rule: The system strictly prevents a doctor from having two appointments at the same date and time. It returns a 409 Conflict status to prevent data overlap.

Auto-Onboarding: For ease of use, if a Doctor or Patient logs in with credentials that don't exist yet, the system automatically creates a profile for them.

NoSQL Schema: Used MongoDB to handle medical records. This allows for flexible "Vitals" objects (BP, Temperature) to be stored directly within Patient Notes.

Dummy Authentication: As per the task requirements, a static JWT-style token is returned upon login to simulate an authenticated environment.