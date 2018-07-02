# web-ui

## Setting Up
Ensure that you have [Node.js](https://nodejs.org/en/) installed. We recommend the latest in the v8 series as that is the version that our CI/CD tool is using to build all of the deployed code.

1. Clone this repo
2. `cd` into the local directory and execute `npm install`
3. Run `npm start` to start a local server instance

## Live Previews

When you open a new pull request, it's built and made available at:
```
http://good-emporium-web-dev.s3-website.us-east-2.amazonaws.com/your-branch-name
```

When new code is merged to master, it becomes available at:
```
http://good-emporium-web-staging.s3-website.us-east-2.amazonaws.com
```
This is meant to be used for a final review before releasing the code to production.

## Release

To deploy to production, create a new [release](https://github.com/good-emporium/web-ui/releases/new).
1. Set the 'tag' and 'release title' to something like [`v1.0.0`](https://semver.org).
It should be higher than the [last version](https://github.com/good-emporium/web-ui/releases).
2. The target should be `master`.

**Note:** The `v` in the 'tag' is mandatory. Forgetting it would be unwise.
