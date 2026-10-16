# Deploying to Crazy Domains hosting

## 1. Prerequisites
1.1  A Crazy Domains web hosting plan (cPanel) linked to **gartrelldesign.com**.
1.2  The domain's nameservers point to that hosting plan. Check this in the Crazy Domains Member Area under Domains → Manage → DNS / Nameservers.

## 2. Upload with cPanel File Manager (simplest)
2.1  Download this repository as a ZIP from GitHub (Code → Download ZIP) and unzip it on your computer.
2.2  Open the `site/` folder, select **everything inside it** (including the hidden `.htaccess` file) and compress it into `site.zip`.
2.3  Log in to the Member Area → Hosting → cPanel → **File Manager** → open `public_html`.
2.4  Back up or remove any placeholder `index.html` that is already there.
2.5  Choose **Upload**, select `site.zip`, then right-click the uploaded file and choose **Extract**. `index.html` must sit directly inside `public_html`, not inside a subfolder.
2.6  Delete `site.zip` once the files are extracted.

## 3. Upload with FTP (alternative)
3.1  In cPanel → **FTP Accounts**, note the server address, username and password.
3.2  Connect with an FTP client such as FileZilla (use FTPS where offered).
3.3  Upload the contents of `site/` into `/public_html/`. Turn on "show hidden files" so that `.htaccess` is included.

## 4. Enable HTTPS
4.1  In cPanel, open **SSL/TLS Status** (AutoSSL or Let's Encrypt) and issue a certificate for `gartrelldesign.com` and `www.gartrelldesign.com`.
4.2  `.htaccess` redirects every visitor to `https://gartrelldesign.com`. If the site shows a redirect loop **before** the certificate is active, comment out the two HTTPS lines in `.htaccess` temporarily.

## 5. Verify
5.1  Visit https://gartrelldesign.com and every page in the navigation.
5.2  Visit https://gartrelldesign.com/does-not-exist to confirm the custom 404 page.
5.3  Optionally submit `https://gartrelldesign.com/sitemap.xml` in Google Search Console.

## 6. Editing content later
- Pages are plain HTML. Edit them in any text editor and re-upload only the files you changed.
- Coined terms for the **WWWWW** lexicon go in `site/lexicon/index.html`, under the "Coined" heading. Copy an existing `<dl class="entry">` block and set `data-origin="coined"`.
- Award and publication rows go in `site/press/index.html`.
- When you add a page, add it to the navigation on every page and to `site/sitemap.xml`.
