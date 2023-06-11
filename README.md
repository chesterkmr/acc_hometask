# How to start

Open terminal and hit `docker compose up`


Default backend url: `http://localhost:8080`


Default frontend url `http://localhost:4000`

## Endpoints

#### Public endpoints

`/hello` - Returns `Hello World`

#### Private endpoints (Bearer authorization)

`/signin` - Exchange of credentials for `accessToken`
`/signout` - Killing session of current user
`/user` - Returns `User` model

## Front-end

Single screen aplication which consists of:

- Filters - Allowing filter users by email domain,defaults to `example.com`
- Users list - Simple list to display users with `names` and `emails`
- User Creation Wizard - 2 step wizard for user creation.(1 step is form with single `name` input and 2nd step for credentials with inputs `email` & `password`)

## Comments

Test task mentioned `tokens` but didn't mention how utilize them so i implemented following endpoints
