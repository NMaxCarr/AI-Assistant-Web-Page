**This project was cloned from Vercel [subscription starter](https://vercel.com/templates/next.js/subscription-starter) project.**

# AI-Assistant Web Page
Showcase and sales website for [AI-Assistant](https://github.com/samuelint/ai-assistant) product
## Developpement

`pnpm install`

For local development with Supabase, install [Docker](https://www.docker.com/get-started/) first.

Install and start Supabase:
`pnpm supabase:start`

To add products and pricing, create a [Stripe](https://stripe.com/) account first.

For the following steps, make sure you have the "Test Mode" toggle switched on.

##### Create a Webhook
- Click the "Add Endpoint" button on the test Endpoints page.
- Enter your production deployment URL followed by /api/webhooks for the endpoint URL. (e.g. https://your-deployment-url.vercel.app/api/webhooks)
- Click Select events under the Select events to listen to heading.
- Click the wanted events in the Select events to send section.
- Copy Signing secret as we'll need that in the next step (e.g whsec_xxx) (/!\ be careful not to copy the webook id we_xxxx).
- Copy NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET env var in the .env.local file.

##### Create products
Create product and pricing information
Your application's webhook listens for product updates on Stripe and automatically propagates them to your Supabase database. So with your webhook listener running, you can now create your product and pricing information in the Stripe Dashboard.

Stripe Checkout currently supports pricing that bills a predefined amount at a specific interval. More complex plans (e.g., different pricing tiers or seats) are not yet supported.

For example, you can create business models with different pricing tiers, e.g.:

Product 1: Hobby
Price 1: 10 USD per month
Price 2: 100 USD per year
Product 2: Freelancer
Price 1: 20 USD per month
Price 2: 200 USD per year
Optionally, to speed up the setup, we have added a fixtures file to bootstrap test product and pricing data in your Stripe account. The Stripe CLI fixtures command executes a series of API requests defined in this JSON file. Simply run stripe fixtures fixtures/stripe-fixtures.json.

Important: Make sure that you've configured your Stripe webhook correctly and redeployed with all needed environment variables.

Configure the Stripe customer portal
Set your custom branding in the settings
Configure the Customer Portal settings
Toggle on "Allow customers to update their payment methods"
Toggle on "Allow customers to update subscriptions"
Toggle on "Allow customers to cancel subscriptions"
Add the products and prices that you want
Set up the required business information and links
