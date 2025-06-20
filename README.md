# 📡 Smartsheet OAuth Redirect Proxy

This lightweight serverless function acts as a secure bridge between Smartsheet's OAuth 2.0 flow and a custom URL scheme used by mobile apps.

## 🔄 Use Case

Smartsheet requires `https://` redirect URIs, while mobile apps typically use custom schemes like:

This project provides a public, HTTPS-accessible redirect endpoint that forwards the Smartsheet `code` and `state` parameters back into your mobile app.

---

## ✅ How It Works

1. Smartsheet completes OAuth login and redirects to:
2. This Vercel-hosted endpoint immediately redirects to:
3. Your iOS app receives the URL and finishes the OAuth flow.

---

## 🚀 Deploy with Vercel

1. Clone or fork this repo.
2. Push it to GitHub.
3. Connect the repo to [https://vercel.com](https://vercel.com).
4. Vercel will deploy it and give you a live URL like:
5. Set this URL as your OAuth redirect URI in the Smartsheet Developer Portal.

---

## 📁 Files

- `/api/redirect.js`: Redirect logic
- `vercel.json`: Rewrites `/callback` to `/api/redirect`

---

## 📱 iOS App Setup

- Register a URL scheme like `smartsheetapp` in your `Info.plist`.
- Handle incoming URLs in `AppDelegate.application(_:open:)`.
- Match the `state` param to protect against CSRF.

---

## 🔐 Security Notes

- Never include your `client_secret` in this redirect logic — it is only a forwarder.
- Always verify `state` on return to mitigate CSRF attacks.
