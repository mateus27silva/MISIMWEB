# MISIM Platform - Project TODO

## Phase 1: Core Infrastructure & Authentication
- [x] Initialize full-stack web project with user authentication and database support
- [x] Set up database schema for users, subscriptions, and simulation tracking
- [x] Implement user authentication flow (login/signup with Manus OAuth)
- [x] Create protected routes and session management

## Phase 2: Marketing & Landing Page
- [x] Design and implement attractive hero section
- [x] Create subscription plans comparison cards (Inicial, Profissional, Empresarial)
- [x] Implement FAQ section with accordion component
- [x] Add call-to-action buttons and conversion optimization
- [x] Ensure responsive design for mobile, tablet, desktop

## Phase 3: Subscription Management
- [x] Create subscription database schema (plans, user subscriptions, simulation limits)
- [ ] Implement plan selection and checkout flow
- [ ] Set up subscription status tracking
- [ ] Create plan feature comparison logic

## Phase 4: User Dashboard & Post-Login Experience
- [x] Create authenticated dashboard layout
- [ ] Implement simulation counter and usage tracking
- [ ] Add user profile/account management page
- [ ] Display current subscription plan and upgrade options

## Phase 5: Simulation Integration
- [x] Integrate simulacao-moagem application into dashboard
- [ ] Implement simulation execution with plan limits enforcement
- [ ] Create simulation history/results tracking
- [ ] Add export functionality for simulation results

## Phase 6: Advanced Features
- [ ] Implement mineral data integration from webmineral.com
- [ ] Add search/dropdown for mineral components
- [ ] Create sensitivity analysis features
- [ ] Implement simulation result visualization and reports

## Phase 7: Deployment & Optimization
- [ ] Final testing and bug fixes
- [ ] Performance optimization
- [ ] Deploy to permanent hosting
- [ ] Set up monitoring and analytics

## Database Schema Tasks
- [ ] Create users table (already exists)
- [ ] Create subscriptions table
- [ ] Create subscription_plans table
- [ ] Create simulations table
- [ ] Create simulation_results table
- [ ] Add relationships and indexes

## UI Components to Build
- [ ] Navigation header with logo and auth status
- [ ] Hero section with CTA
- [ ] Pricing cards with comparison table
- [ ] FAQ accordion
- [ ] Login/signup forms
- [ ] Dashboard layout with sidebar
- [ ] Simulation interface wrapper
- [ ] User profile modal
- [ ] Subscription upgrade modal

## API Procedures (tRPC)
- [ ] auth.me (get current user)
- [ ] auth.logout (logout user)
- [ ] subscriptions.getCurrentPlan (get user's current subscription)
- [ ] subscriptions.listPlans (get all available plans)
- [ ] subscriptions.upgrade (upgrade subscription)
- [ ] simulations.create (create new simulation)
- [ ] simulations.list (list user's simulations)
- [ ] simulations.getResult (get simulation results)
- [ ] simulations.checkLimit (check if user can run simulation)

## Design & Styling
- [ ] Choose color palette and typography
- [ ] Set up Tailwind configuration
- [ ] Create consistent spacing and sizing system
- [ ] Implement dark/light theme support
- [ ] Add animations and micro-interactions

## Testing & QA
- [ ] Test authentication flow
- [ ] Test subscription plan selection
- [ ] Test simulation execution with limits
- [ ] Test responsive design on all devices
- [ ] Test cross-browser compatibility

