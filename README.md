# Habit Tracker with Gamification

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
5. [Code Snippets](#code-snippets)
6. [Roadmap](#roadmap)
7. [Contributing](#contributing)

---

## Project Overview

This is a **Habit Tracker with Gamification** built using **Next.js** and **TypeScript**. The app helps users build and track habits while engaging them with gamified elements like streaks, points, badges, and leaderboards. It includes both free and paid features to monetize the platform.

---

## Tech Stack

- **Frontend**: Next.js (React framework) with TypeScript.
- **Backend**: Next.js API routes.
- **Database**: PostgreSQL (via Supabase) or MongoDB.
- **Authentication**: NextAuth.js or Clerk.
- **Payment Integration**: Stripe for subscriptions.
- **Hosting**: Vercel.
- **Styling**: Tailwind CSS or Chakra UI.
- **Gamification**: Custom logic for streaks, points, and badges.

---

## Features

### Free Features

- Create and track up to 3 habits.
- Mark habits as completed.
- Earn points for completed habits.
- View a basic streak counter.
- Access a simple leaderboard.

### Paid Features

- Track unlimited habits.
- Unlock advanced analytics (e.g., success rates, trends).
- Set custom reminders (email or push notifications).
- Earn badges and achievements.
- Compete on a global leaderboard.
- Customize the app’s appearance with premium themes.

---

## Setup Instructions

### Step 1: Set Up Next.js

1. Create a new Next.js project:
   ```bash
   npx create-next-app@latest habit-tracker --typescript
   ```
2. Navigate to the project folder:
   ```bash
   cd habit-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Step 2: Add Tailwind CSS

1. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Configure `tailwind.config.js`:
   ```js
   module.exports = {
   	content: [
   		"./pages/**/*.{js,ts,jsx,tsx}",
   		"./components/**/*.{js,ts,jsx,tsx}",
   	],
   	theme: {
   		extend: {},
   	},
   	plugins: [],
   };
   ```
3. Add Tailwind to `styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 3: Set Up Authentication

1. Install NextAuth.js:
   ```bash
   npm install next-auth
   ```
2. Create an authentication provider in `pages/api/auth/[...nextauth].ts`:

   ```ts
   import NextAuth from "next-auth";
   import Providers from "next-auth/providers";

   export default NextAuth({
   	providers: [
   		Providers.GitHub({
   			clientId: process.env.GITHUB_CLIENT_ID,
   			clientSecret: process.env.GITHUB_CLIENT_SECRET,
   		}),
   	],
   });
   ```

### Step 4: Set Up Database

Use Supabase (PostgreSQL) or MongoDB Atlas.

Create a `habits` table with fields:

- `id` (primary key)
- `userId` (foreign key)
- `name` (string)
- `frequency` (string)
- `completedDates` (array of dates)

---

## Code Snippets

### Habit Creation Form

```tsx
import { useForm } from "react-hook-form";

const HabitForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data); // Save habit to database
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<input
				{...register("name")}
				placeholder="Habit name"
				className="p-2 border rounded"
			/>
			<select {...register("frequency")} className="p-2 border rounded">
				<option value="daily">Daily</option>
				<option value="weekly">Weekly</option>
			</select>
			<button type="submit" className="p-2 bg-blue-500 text-white rounded">
				Add Habit
			</button>
		</form>
	);
};
```

### Streak Counter

```tsx
const StreakCounter = ({ streak }) => {
	return (
		<div className="text-center">
			<h3 className="text-xl font-bold">Current Streak: {streak} 🔥</h3>
		</div>
	);
};
```

---

## Roadmap

### MVP (Month 1):

- Build core features (habit creation, tracking, streaks).
- Add basic gamification (points, leaderboard).
- Deploy on Vercel.

### Version 1 (Month 2):

- Add premium features (unlimited habits, advanced analytics).
- Integrate Stripe for payments.

### Version 2 (Month 3):

- Add badges and achievements.
- Implement custom reminders.

---

## Contributing

Feel free to contribute to this project! Here’s how:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

### **How to Use This README**

1. Create a `README.md` file in the root of your project.
2. Copy and paste the above content into the file.
3. Update the file as we progress with the project.

Let me know what you’d like to tackle next, and I’ll update the README accordingly! 🚀

---

# Eclipso

**Align Your Habits, Unlock Your Potential.**

Eclipso is a cosmic-themed habit tracker that gamifies your daily routines, helping you stay consistent and reach your goals in an engaging way.

## Features

- 🚀 **Track Habits** – Stay on top of your daily routines.
- 🌌 **Gamification** – Earn streaks and rewards for consistency.
- 🎨 **Cosmic Theme** – Aesthetic, space-inspired interface.
- 🔍 **Search & Filter** – Easily find and manage your tasks.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Icons:** react-icons (FaPerson, CiGrid41, CiBoxList)
- **Fonts:**
  - Flazie
  - Absans
  - Baunk
  - MilkyWalky
  - Zighead
  - Cotta
  - Berlys
  - CosmicVibrant

## Color Palette

- **Background:** `#262627` (Dark Gray)
- **Text:** `#FFFFFF` (White), `#F5A9B8` (Soft Pink)
- **Cards:** `#505050` (Muted Gray)
- **Buttons & Borders:** `#303030` (Deep Gray)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jane-does-coding/eclipso.git
   ```
2. Navigate to the project directory:
   ```sh
   cd eclipso
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Future Enhancements

- 🌠 Dark & Light Mode
- 🏆 Achievement System
- 📅 Calendar View

---

Made with 💫 by [Jane Doe](https://github.com/jane-does-coding).
