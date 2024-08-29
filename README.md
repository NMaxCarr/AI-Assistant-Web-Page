**This project was cloned from Vercel [subscription starter](https://vercel.com/templates/next.js/subscription-starter) project.**

# AI-Assistant Web Page
Showcase and sales website for [AI-Assistant](https://github.com/samuelint/ai-assistant) product
## Developpement
This page is made using Next.js 14 and Tailwind.css.

`pnpm install`
`pnpm dev`

### Database management
Supabase is used has a database service for managing user, products and prices. For local development with Supabase, install [Docker](https://www.docker.com/get-started/) first.

To install and start Supabase:

`pnpm supabase:start`

### Sales with Stripe

To add products and pricing, create a [Stripe](https://stripe.com/) account first.

For the following steps, make sure you have the "Test Mode" toggle switched on.

#### Create a Webhook
- Click the "Add Endpoint" button on the test Endpoints page.
- Enter your production deployment URL followed by /api/webhooks for the endpoint URL. (e.g. https://your-deployment-url.vercel.app/api/webhooks)
- Click Select events under the Select events to listen to heading.
- Click the wanted events in the Select events to send section.
- Copy Signing secret as we'll need that in the next step (e.g whsec_xxx) (/!\ be careful not to copy the webook id we_xxxx).
- Copy NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET env var in the .env.local file.

#### Test Stripe webhook 
Use the Stripe CLI to login to your Stripe account:
`pnpm stripe:login`

This will print a URL to navigate to in your browser and provide access to your Stripe account.
Next, start local webhook forwarding:

`pnpm stripe:listen`

Running this Stripe command will print a webhook secret (such as, whsec_***) to the console. Set STRIPE_WEBHOOK_SECRET to this value in your .env.local file. 
If you haven't already, you should also set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY in your .env.local file using the test mode(!) keys from your Stripe dashboard.

#### Create product and pricing information
Your application's webhook listens for product updates on Stripe and automatically propagates them to your Supabase database. So with your webhook listener running, you can now create your product and pricing information in the Stripe Dashboard.

Stripe Checkout currently supports pricing that bills a predefined amount at a specific interval. More complex plans (e.g., different pricing tiers or seats) are not yet supported.

Optionally, to speed up the setup, we have added a fixtures file to bootstrap test product and pricing data in your Stripe account. The Stripe CLI fixtures command executes a series of API requests defined in this JSON file. Simply run `stripe fixtures fixtures/stripe-fixtures.json`.

Configure the Stripe customer portal
Set your custom branding in the settings
Configure the Customer Portal settings
Toggle on "Allow customers to update their payment methods"
Toggle on "Allow customers to update subscriptions"
Toggle on "Allow customers to cancel subscriptions"
Add the products and prices that you want
Set up the required business information and links
