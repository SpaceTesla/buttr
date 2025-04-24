import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// In a production environment, you'd want to store these in a database
const DISCOUNT_CODES = new Map();

export async function POST(request: NextRequest) {
  try {
    const { imageData } = await request.json();

    if (!imageData) {
      return NextResponse.json(
        { error: 'No drawing data provided' },
        { status: 400 },
      );
    }

    // Generate a unique discount code
    const discountCode = generateDiscountCode();

    // Save discount code with expiration date (30 days from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    DISCOUNT_CODES.set(discountCode, {
      used: false,
      discountPercent: 10,
      expirationDate,
      createdAt: new Date(),
    }); // We're not saving user drawings anymore
    // Just generate and return the discount code without storing images

    // Return the discount code to the user
    return NextResponse.json({
      success: true,
      discountCode,
      expirationDate,
    });
  } catch (error) {
    console.error('Error processing drawing submission:', error);
    return NextResponse.json(
      { error: 'Failed to process drawing' },
      { status: 500 },
    );
  }
}

// Generate a unique, readable discount code
function generateDiscountCode() {
  // Format: DRAW-XXXX-XXXX (where X is alphanumeric)
  const uuid = uuidv4().replace(/-/g, '').toUpperCase().substring(0, 8);
  return `DRAW-${uuid.substring(0, 4)}-${uuid.substring(4, 8)}`;
}

// Function removed - we're no longer saving user drawings
