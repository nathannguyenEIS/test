
# CurrentUserLink — SPFx repo (cloud-built .sppkg)

This repository is preconfigured to build a **SharePoint Framework (SPFx)** solution in **GitHub Actions** without any local development environment. The workflow will **scaffold** an SPFx project on the runner, overlay the web part source from this repo, then **package** and publish a downloadable **.sppkg** artifact.

## What you get
- A modern web part that renders a link:
  `https://in4-aro-shs-app-prd-web-02.azurewebsites.net/Pages/default.aspx?user=<display name>&email=<email>`
- It reads the current user's **display name** and **email** from the SharePoint page context and opens in the **same tab**.

## Quick start
1. Create a new GitHub repository and upload the contents of this zip.
2. Go to **Actions** → run the workflow **Build SPFx and produce .sppkg**.
3. Download the artifact named **sppkg**. It contains your deployable `.sppkg`.
4. Upload the `.sppkg` to your **SharePoint App Catalog** → **Deploy** → add the app to your site → place the **Current User Link** web part on a page.

## Notes
- The workflow scaffolds **SharePoint Online (SPO)**, **React** web part using the SharePoint generator, then overlays `src/webparts/currentUserLink` from this repo.
- If you need to change the base URL or add parameters, edit `src/webparts/currentUserLink/components/CurrentUserLink.tsx` and commit.

