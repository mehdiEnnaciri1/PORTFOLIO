# Configurer le formulaire de contact (EmailJS) sur GitHub Pages

Pour que le formulaire de contact envoie bien les emails sur https://mehdiennaciri1.github.io/PORTFOLIO/, il faut configurer EmailJS et les secrets GitHub.

## 1. Créer un compte EmailJS

1. Va sur **https://www.emailjs.com/** et crée un compte (gratuit).
2. **Email Service** : dans le dashboard, ajoute un service (ex. Gmail). Connecte ton compte Gmail pour qu’EmailJS puisse envoyer les emails.
3. **Email Template** : crée un template avec les variables :
   - `{{user_name}}` (nom)
   - `{{user_email}}` (email)
   - `{{message}}` (message)
4. Récupère les 3 valeurs :
   - **Service ID** (Email Services)
   - **Template ID** (Email Templates)
   - **Public Key** (Account → API Keys)

## 2. Ajouter les secrets dans GitHub

1. Ouvre ton dépôt **PORTFOLIO** sur GitHub.
2. Va dans **Settings** → **Secrets and variables** → **Actions**.
3. Clique sur **New repository secret** et ajoute **3 secrets** :

| Nom du secret            | Valeur à coller      |
|--------------------------|----------------------|
| `EMAILJS_SERVICE_ID`     | ton Service ID       |
| `EMAILJS_TEMPLATE_ID`    | ton Template ID     |
| `EMAILJS_PUBLIC_KEY`     | ta Public Key        |

4. Enregistre chaque secret.

## 3. Redéployer

Après avoir ajouté les 3 secrets :

- Fais un **nouveau push** sur `master`, ou
- Va dans **Actions** → dernier workflow → **Re-run all jobs**.

Au prochain build, les clés seront prises en compte et le formulaire de contact pourra envoyer les emails vers `mahdiennaciri9@gmail.com`.

---

**En local** : copie `env.local.example` en `.env.local`, remplis les 3 variables avec les mêmes valeurs, puis relance `npm run dev`.
