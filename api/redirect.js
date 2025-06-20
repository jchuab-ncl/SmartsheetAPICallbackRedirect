export default function handler(req, res) {
  const { code, state } = req.query;
  const redirectUrl = `smartsheetapp://oauth/callback?code=${code}&state=${state}`;
  return res.redirect(302, redirectUrl);
}