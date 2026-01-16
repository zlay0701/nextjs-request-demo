import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('=== GET Request Received ===');
  console.log('Request Method:', request.method);
  console.log('Request Headers:', Object.fromEntries(request.headers));
  console.log('============================\n');
  
  return NextResponse.json({
    message: 'GET request received and logged',
    status: 200
  });
}

export async function POST(request: NextRequest) {
  console.log('=== POST Request Received ===');
  console.log('Request Method:', request.method);
  console.log('Request Headers:', Object.fromEntries(request.headers));
  
  try {
    const body = await request.json();
    console.log('Request Body:', body);
  } catch (error) {
    console.log('Request Body:', null);
    console.log('Error parsing body:', error);
  }
  
  console.log('============================\n');
  
  return NextResponse.json({
    message: 'POST request received and logged',
    status: 200
  });
}