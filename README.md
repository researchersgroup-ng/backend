# Science Faculty Scheduling System – Backend

## Base URL
http://localhost:5000/api

## Authentication
All protected routes require:
Authorization: Bearer <JWT>

## Roles
- admin
- lecturer
- student

## Auth Endpoints
POST /auth/admin/login  
POST /auth/lecturer/register  
POST /auth/lecturer/login  
POST /auth/student/register  
POST /auth/student/login  

## Admin APIs
GET /admin/lecturers/pending  
PATCH /admin/lecturers/:id/approve  
POST /admin/venues  
POST /admin/courses  

## Lecturer APIs
POST /lecturer/schedule  
GET /lecturer/schedules  

## Student APIs
GET /student/lectures  
GET /student/exams  

## Scheduling Rules
- No venue overlap
- Time conflicts rejected
- Students inherit schedules via department & level

## Notes for Frontend Team
- Backend is complete
- No direct student scheduling
- Use department + level from JWT
