CREATE TABLE `simulation_results` (
	`id` int AUTO_INCREMENT NOT NULL,
	`simulationId` int NOT NULL,
	`userId` int NOT NULL,
	`p80` varchar(64),
	`energyConsumption` varchar(64),
	`efficiency` varchar(64),
	`economicAnalysis` text,
	`exportedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `simulation_results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `simulations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`complexity` enum('low','medium','high') NOT NULL,
	`status` enum('pending','running','completed','failed') NOT NULL DEFAULT 'pending',
	`inputData` text,
	`resultData` text,
	`executionTimeMs` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `simulations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subscription_plans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(64) NOT NULL,
	`slug` varchar(64) NOT NULL,
	`description` text,
	`monthlyPrice` int NOT NULL,
	`simulationsPerMonth` int NOT NULL,
	`complexityLevel` varchar(64) NOT NULL,
	`support` varchar(64) NOT NULL,
	`features` text,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscription_plans_id` PRIMARY KEY(`id`),
	CONSTRAINT `subscription_plans_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `user_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`planId` int NOT NULL,
	`status` enum('active','cancelled','expired','pending') NOT NULL DEFAULT 'active',
	`startDate` timestamp NOT NULL DEFAULT (now()),
	`endDate` timestamp,
	`renewalDate` timestamp,
	`simulationsUsedThisMonth` int NOT NULL DEFAULT 0,
	`lastResetDate` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_subscriptions_id` PRIMARY KEY(`id`)
);
