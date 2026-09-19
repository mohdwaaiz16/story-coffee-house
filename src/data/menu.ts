import type { MenuItem, MenuCategory } from '../types';

export const categories: MenuCategory[] = [
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'eggs', name: 'Eggs' },
  { id: 'grills-roasts', name: 'Grills & Roasts' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'starters', name: 'Starters' },
  { id: 'rice-bowls', name: 'Rice Bowls' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'salads', name: 'Salads' },
  { id: 'pancakes', name: 'Pancakes & French Toast' },
  { id: 'hot-beverages', name: 'Hot Beverages' },
  { id: 'cold-beverages', name: 'Cold Beverages' }
];

export const menuItems: MenuItem[] = [
  // Breakfast
  { id: '1', name: 'Classic English Breakfast Veg', price: 420, isVeg: true, category: 'breakfast', isPopular: true },
  { id: '2', name: 'Classic French Breakfast Non-Veg', price: 450, isVeg: false, category: 'breakfast' },
  { id: '3', name: 'Shakshuka', price: 350, isVeg: true, category: 'breakfast' },
  { id: '4', name: 'Dadar Station Bhurji Pao', price: 280, isVeg: true, category: 'breakfast' },
  { id: '5', name: 'Irani Kheema Pao', price: 380, isVeg: false, category: 'breakfast' },
  
  // Eggs
  { id: '6', name: 'Fluffy Scrambled Eggs', price: 145, isVeg: false, category: 'eggs' },
  { id: '7', name: 'Cheesy Shroom Omelette', price: 180, isVeg: false, category: 'eggs' },
  { id: '8', name: 'Chicken Stuffed Omelette', price: 215, isVeg: false, category: 'eggs' },

  // Pasta
  { id: '9', name: 'Chicken Alfredo Pasta', price: 460, isVeg: false, category: 'pasta', description: 'Served with garlic bread' },
  { id: '10', name: 'Veg Alfredo Pasta', price: 380, isVeg: true, category: 'pasta' },
  { id: '11', name: 'Pink Sauce Pasta', price: 400, isVeg: true, category: 'pasta' },
  { id: '12', name: 'Shrimp Arrabbiata', price: 480, isVeg: false, category: 'pasta' },
  
  // Burgers
  { id: '13', name: 'Classic Chicken Burger', price: 300, isVeg: false, category: 'burgers' },
  { id: '14', name: 'Gochu Korean Chicken Burger', price: 370, isVeg: false, category: 'burgers' },
  { id: '15', name: 'Louisiana Fried Chicken Burger', price: 500, isVeg: false, category: 'burgers' },
  { id: '16', name: 'Story Coffee Special Burger', price: 500, isVeg: false, category: 'burgers', isPopular: true },
  { id: '17', name: 'Gochu Korean Paneer Burger', price: 350, isVeg: true, category: 'burgers' },

  // Rice Bowls
  { id: '18', name: 'Lemon Butter Garlic Prawns Rice Bowl', price: 500, isVeg: false, category: 'rice-bowls' },
  { id: '19', name: 'Peri Peri Chicken Rice Bowl', price: 420, isVeg: false, category: 'rice-bowls' },
  { id: '20', name: 'Peri Peri Paneer Rice Bowl', price: 420, isVeg: true, category: 'rice-bowls' },
  { id: '21', name: 'Pesto Fish Rice Bowl', price: 450, isVeg: false, category: 'rice-bowls' },

  // Sandwiches
  { id: '22', name: 'Chicken Club', price: 420, isVeg: false, category: 'sandwiches' },
  { id: '23', name: 'Korean Spiced Paneer Sandwich', price: 370, isVeg: true, category: 'sandwiches' },
  { id: '24', name: 'New York Cheese Press', price: 350, isVeg: true, category: 'sandwiches' },

  // Hot Beverages
  { id: '25', name: 'Latte', price: 170, isVeg: true, category: 'hot-beverages', isPopular: true },
  { id: '26', name: 'Hot Chocolate', price: 220, isVeg: true, category: 'hot-beverages' },
  { id: '27', name: 'Filter Coffee', price: 120, isVeg: true, category: 'hot-beverages' },
  { id: '28', name: 'Espresso', price: 150, isVeg: true, category: 'hot-beverages' }
];
