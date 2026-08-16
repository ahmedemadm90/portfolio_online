import json, subprocess

with open('simple_repos.json', 'r', encoding='utf-8') as f:
    repos = json.load(f)

print(f"Total repositories found: {len(repos)}")
for r in repos:
    name = r['name']
    is_priv = r['isPrivate']
    if is_priv:
        cmd = f"gh repo edit ahmedemadm90/{name} --visibility public"
        print(f"Converting {name} to public...")
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"Successfully made {name} public.")
        else:
            print(f"Failed for {name}: {res.stderr.strip()}")
