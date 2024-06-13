# Render Workshop



## Getting Started

To get started with the project in your local development environment, follow
these steps:

1. Create a codespace by selecting Code > Codespaces > Create codespace on main

2. Once you've loaded the codespace, in `newrelic.js` create an app name and add your New Relic license key.

3. Once you've updated `newrelic.js`, run the following command to start the application:

```bash
npm run dev
```

You are now ready to go!

## Scenario 1

**Task: Find out what's taking Herbert so long**
Users have begun to complain about some issues when trying to visit Herbert’s character page. Using New Relic Browser I want you to find the root cause of the issue with Herbert (besides being a creepy old man).

Find the metric that best represents the issue with Herbert’s character page.

## Scenario 2

**Task: Quagmire's Photo Album Gone Wrong**
Giggity giggity...wait, what's this? Quagmire's character page seems to have taken a wrong turn down a dark alley. The images are loading slower than Peter Griffin at an all-you-can-eat buffet, and when they finally do appear, they're not even pictures of our favorite lascivious neighbor!

What metric best represents the issue with Quagmire’s page?

## Scenario 3

**Task: Adam West is Missing!!!**
The Mayor of Quahog, the one and only Adam West, has mysteriously vanished from the Family Guy website! His character page has gone the way of the dodo bird, leaving fans with nothing but a desolate 404 error. This travesty cannot stand!

Discover the source of the error so that we can bring Adam West back.

## Bonus Task

**Setup Session Replay** 
Open Summary Page:

In New Relic, open the summary page for your browser application.
Navigate to Application Settings:

Go to the Application Settings page in the inner vertical nav bar.
Enable Session Replay:

Click the radio button for Session Replay to enable the feature.
Save Settings:

Click the save button in the bottom right corner.
Restart Application:

Restart your application for the new settings to take effect.
Verify Sessions:

Navigate through your application. 
Close the page.
After a few minutes, you should start to see some sessions on the summary page.
