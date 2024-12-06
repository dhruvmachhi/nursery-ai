// utils/cleanString.js

export function cleanString(input: string): string {
  return input
    .toLowerCase()  // Convert to lowercase
    .replace(/[.,]/g, '');  // Remove commas and periods
}

  