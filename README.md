# My Fields — Trello Power-Up

Custom fields (Priority, Estimate, + your own) on Trello cards. Free, no limits.

## Deploy
1. Create a public GitHub repo, upload all files in this folder to its root.
2. Repo Settings -> Pages -> Deploy from branch `main` / root.
3. Your connector URL: https://<username>.github.io/<repo>/index.html

## Register in Trello
1. Open https://trello.com/power-ups/admin -> New (pick your workspace).
2. Name: My Fields. Iframe connector URL: the URL above. Fill the other required fields (email, author).
3. Capabilities tab: enable `board-buttons`, `card-back-section`, `card-badges`, `on-enable`. Save.
4. On your board: Power-Ups -> Add Power-Ups -> Custom tab -> Add "My Fields".
