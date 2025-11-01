import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Subscription plans available in MISIM
 */
export const subscriptionPlans = mysqlTable("subscription_plans", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 64 }).notNull(), // "Inicial", "Profissional", "Empresarial"
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  description: text("description"),
  monthlyPrice: int("monthlyPrice").notNull(), // Price in cents (USD)
  simulationsPerMonth: int("simulationsPerMonth").notNull(), // -1 for unlimited
  complexityLevel: varchar("complexityLevel", { length: 64 }).notNull(), // "low", "medium", "unlimited"
  support: varchar("support", { length: 64 }).notNull(), // "email", "priority", "24/7"
  features: text("features"), // JSON array of features
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type InsertSubscriptionPlan = typeof subscriptionPlans.$inferInsert;

/**
 * User subscriptions
 */
export const userSubscriptions = mysqlTable("user_subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  planId: int("planId").notNull(),
  status: mysqlEnum("status", ["active", "cancelled", "expired", "pending"]).default("active").notNull(),
  startDate: timestamp("startDate").defaultNow().notNull(),
  endDate: timestamp("endDate"),
  renewalDate: timestamp("renewalDate"),
  simulationsUsedThisMonth: int("simulationsUsedThisMonth").default(0).notNull(),
  lastResetDate: timestamp("lastResetDate").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserSubscription = typeof userSubscriptions.$inferSelect;
export type InsertUserSubscription = typeof userSubscriptions.$inferInsert;

/**
 * Simulations executed by users
 */
export const simulations = mysqlTable("simulations", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  complexity: mysqlEnum("complexity", ["low", "medium", "high"]).notNull(),
  status: mysqlEnum("status", ["pending", "running", "completed", "failed"]).default("pending").notNull(),
  inputData: text("inputData"), // JSON string
  resultData: text("resultData"), // JSON string
  executionTimeMs: int("executionTimeMs"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Simulation = typeof simulations.$inferSelect;
export type InsertSimulation = typeof simulations.$inferInsert;

/**
 * Simulation results and history
 */
export const simulationResults = mysqlTable("simulation_results", {
  id: int("id").autoincrement().primaryKey(),
  simulationId: int("simulationId").notNull(),
  userId: int("userId").notNull(),
  p80: varchar("p80", { length: 64 }), // Product size P80
  energyConsumption: varchar("energyConsumption", { length: 64 }),
  efficiency: varchar("efficiency", { length: 64 }),
  economicAnalysis: text("economicAnalysis"), // JSON string
  exportedAt: timestamp("exportedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type SimulationResult = typeof simulationResults.$inferSelect;
export type InsertSimulationResult = typeof simulationResults.$inferInsert;