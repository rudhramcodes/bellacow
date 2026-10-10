# bellacow.com deployment

React/Vite builds on GitHub Actions using Node 24. Hostinger Premium serves the contents of `dist`; no Node server is required on Hostinger.

## 1. Add the site and domain

In hPanel, Websites → Add website → choose a custom PHP/HTML or empty website and select `bellacow.com`. If it already exists, open its dashboard. Avoid replacing an existing site without a backup.

Use Hostinger's Connect domain / Check guide flow. If the domain is in the same account and uses Hostinger DNS, connection is usually automatic. Otherwise use the exact DNS records supplied by hPanel. Preserve existing email MX/TXT records. Check both `bellacow.com` and `www.bellacow.com`. In SSL, wait for the certificate to become active and enable Force HTTPS. Set a www → non-www redirect in hPanel if you want `https://bellacow.com` as the canonical address.

## 2. Enable SSH

Website dashboard → search SSH Access → Enable. Record the host/IP, port and username shown there. Use the displayed port, not an assumed default.

Generate a dedicated deployment key on your computer (outside this repository):

```bash
ssh-keygen -t ed25519 -C "bellacow-github-deploy" -f ~/.ssh/bellacow_deploy
```

Use an empty passphrase for this dedicated automation key. Do not overwrite an existing key. Add the contents of `~/.ssh/bellacow_deploy.pub` to Hostinger's SSH keys section. Keep the private key out of Git and chat.

Connect using the host, username and port displayed in hPanel:

```bash
ssh -i ~/.ssh/bellacow_deploy -p PORT USER@HOST
```

Verify the server fingerprint with Hostinger through a trusted channel before accepting the first connection. After connecting:

```bash
cd ~/domains/bellacow.com/public_html
pwd
```

Copy the absolute path printed by `pwd`. Back up existing files before the first deployment, and remove only an identified default Hostinger welcome page if it overrides index.html.

After a verified SSH connection, your computer's `~/.ssh/known_hosts` contains the trusted host entry. Copy the matching entry for HOST and PORT into the known-hosts secret below. Do not disable host verification or blindly trust ssh-keyscan output.

## 3. Add GitHub repository secrets

Open https://github.com/rudhramcodes/bellacow/settings/secrets/actions → New repository secret.

| Secret | Value |
| --- | --- |
| HOSTINGER_HOST | Host/IP from SSH Access |
| HOSTINGER_PORT | SSH port from hPanel |
| HOSTINGER_USER | SSH username |
| HOSTINGER_PATH | Absolute path printed by pwd, normally /home/USERNAME/domains/bellacow.com/public_html |
| HOSTINGER_SSH_KEY | Entire private key file ~/.ssh/bellacow_deploy, including BEGIN/END lines |
| HOSTINGER_KNOWN_HOSTS | Verified matching server entry from ~/.ssh/known_hosts |

The workflow deliberately accepts only this domain's usual `/home/USER/domains/bellacow.com/public_html` path. If your actual path differs, update the validation to match the verified path before deploying.

## 4. Activate and use

Commit `.github/workflows/hostinger.yml` and this guide, then push to `main`. Review and commit intended website/image changes separately; uncommitted local files are not deployed.

GitHub → Actions → Build and deploy to Hostinger shows progress. Pushes to main deploy automatically after a successful build. Pull requests targeting main build only. The workflow can also be started manually from main using Run workflow.

The workflow uploads `dist` contents directly into public_html, with index.html last. It does not upload source code, node_modules or secrets. Build failure stops deployment. Upload failure can leave some new static files in place; this is not an atomic whole-site deployment. Previous hashed assets are retained for existing visitors; remove stale assets periodically after a backup. Files removed from Git are not automatically deleted on the server.

Check the live page, images, mobile view, HTTPS and www redirect after the first successful deployment. If old content appears, purge Hostinger's website cache and refresh the browser. For rollback, revert the problematic commit on main and push; the previous code is rebuilt and redeployed (this does not remove newly uploaded files).

## Manual first upload (optional)

```bash
npm ci
npm run build
```

Upload the **contents** of dist into public_html using File Manager, not the dist directory itself. Use the pipeline for later changes.

## Troubleshooting

- Permission denied (publickey): confirm username and that Hostinger has the matching public key.
- Host key verification failed: confirm HOST/PORT and the trusted known_hosts entry. Verify a changed fingerprint with Hostinger before updating it.
- Missing required setting: add all six GitHub secrets with exact names.
- Wrong page: check the deployment path, DNS, default index.php/welcome page and hosting cache.
- Build fails: inspect the Actions build log; reproduce with Node 24 and npm ci locally.
- A successful build does not verify runtime image URLs. Check image loading in the browser before launch.

References: https://www.hostinger.com/support/1583645-how-to-enable-ssh-access-in-hostinger/ and https://www.hostinger.com/support/which-file-transfer-and-server-access-options-are-supported-at-hostinger/
