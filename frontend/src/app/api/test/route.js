import { NextResponse } from "next/server";
export async function GET() {
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Smith', firstName: 'John', age: 28 },
    { id: 10, lastName: 'Johnson', firstName: 'Emily', age: 29 },
    { id: 11, lastName: 'Williams', firstName: 'Emma', age: 34 },
    { id: 12, lastName: 'Brown', firstName: 'Michael', age: 52 },
    { id: 13, lastName: 'Jones', firstName: 'Sophia', age: 21 },
    { id: 14, lastName: 'Miller', firstName: 'Oliver', age: 47 },
    { id: 15, lastName: 'Davis', firstName: 'Isabella', age: 39 },
    { id: 16, lastName: 'Garcia', firstName: 'Daniel', age: 31 },
    { id: 17, lastName: 'Rodriguez', firstName: 'Mia', age: 25 },
    { id: 18, lastName: 'Martinez', firstName: 'Lucas', age: 18 },
    { id: 19, lastName: 'Hernandez', firstName: 'Liam', age: 22 },
    { id: 20, lastName: 'Lopez', firstName: 'Ava', age: 27 },
    { id: 21, lastName: 'Gonzalez', firstName: 'Ethan', age: 33 },
    { id: 22, lastName: 'Wilson', firstName: 'Luna', age: 30 },
    { id: 23, lastName: 'Anderson', firstName: 'Harper', age: 26 },
    { id: 24, lastName: 'Taylor', firstName: 'William', age: 48 },
    { id: 25, lastName: 'Thomas', firstName: 'Evelyn', age: 37 },
    { id: 26, lastName: 'Moore', firstName: 'James', age: 41 },
    { id: 27, lastName: 'Jackson', firstName: 'Avery', age: 19 },
    { id: 28, lastName: 'Martin', firstName: 'Sofia', age: 23 },
    { id: 29, lastName: 'Lee', firstName: 'Ella', age: 32 },
    { id: 30, lastName: 'Perez', firstName: 'Logan', age: 20 },
    { id: 31, lastName: 'White', firstName: 'Chloe', age: 38 },
    { id: 32, lastName: 'Harris', firstName: 'Jackson', age: 43 },
    { id: 33, lastName: 'Nelson', firstName: 'Grace', age: 24 },
    { id: 34, lastName: 'Davis', firstName: 'Liam', age: 29 },
    { id: 35, lastName: 'Miller', firstName: 'Victoria', age: 45 },
    { id: 36, lastName: 'Wilson', firstName: 'Henry', age: 50 },
    { id: 37, lastName: 'Moore', firstName: 'Aria', age: 28 },
    { id: 38, lastName: 'Garcia', firstName: 'David', age: 39 },
    { id: 39, lastName: 'Martinez', firstName: 'Abigail', age: 26 },
    { id: 40, lastName: 'Clark', firstName: 'Emma', age: 34 },
    { id: 41, lastName: 'Hall', firstName: 'Sebastian', age: 31 },
    { id: 42, lastName: 'Lewis', firstName: 'Eleanor', age: 36 },
    { id: 43, lastName: 'Young', firstName: 'Noah', age: 27 },
    { id: 44, lastName: 'Walker', firstName: 'Mila', age: 22 },
    { id: 45, lastName: 'King', firstName: 'Landon', age: 19 },
    { id: 46, lastName: 'Scott', firstName: 'Avery', age: 25 },
    { id: 47, lastName: 'Green', firstName: 'Elijah', age: 40 },
    { id: 48, lastName: 'Adams', firstName: 'Grace', age: 23 },
    { id: 49, lastName: 'Baker', firstName: 'Benjamin', age: 42 },
    { id: 50, lastName: 'Mitchell', firstName: 'Scarlett', age: 30 },
  ];

  return NextResponse.json({ rows });
}