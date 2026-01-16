This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## API Endpoints

### Request Logger API

**Endpoint:** `/api/request-logger`

**Description:** This API endpoint receives GET and POST requests and logs detailed information about each request to the server console, including request method, headers, and body.

### Supported Methods

#### GET Request
- **URL:** `http://localhost:3000/api/request-logger`
- **Method:** `GET`
- **Description:** Logs GET request information
- **Response:** JSON with success message

**Example Response:**
```json
{
  "message": "GET request received and logged",
  "status": 200
}
```

#### POST Request
- **URL:** `http://localhost:3000/api/request-logger`
- **Method:** `POST`
- **Description:** Logs POST request information including request body
- **Content-Type:** `application/json`
- **Request Body:** Any valid JSON object
- **Response:** JSON with success message

**Example Request:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Test", "value": 123}' http://localhost:3000/api/request-logger
```

**Example Response:**
```json
{
  "message": "POST request received and logged",
  "status": 200
}
```

### Log Output Format

When a request is received, the server logs the following information to the console:

```
=== [METHOD] Request Received ===
Request Method: [METHOD]
Request Headers: { [headers_object] }
Request Body: { [body_object] } or null
============================
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
