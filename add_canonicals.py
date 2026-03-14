import os
import glob
import re

def process_file(filepath):
    # Determine the relative path to construct the URL
    rel_path = os.path.relpath(filepath, start=".")
    # convert windows seps
    rel_path = rel_path.replace(os.sep, "/")
    
    # Base url
    base_url = "https://unbacked.agency/"
    
    if rel_path == "index.html":
        canonical_url = base_url
    else:
        # e.g. about/index.html -> about/
        dir_path = os.path.dirname(rel_path)
        canonical_url = f"{base_url}{dir_path}/"
        
    canonical_tag = f'<link rel="canonical" href="{canonical_url}" />'

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has canonical tag
    if '<link rel="canonical"' in content:
        # replace existing
        content = re.sub(r'<link rel="canonical" href="[^"]*" />', canonical_tag, content)
        print(f"Replaced canonical in {filepath}")
    else:
        # Inject right after </title> or <title>...</title>
        # Let's find </title>
        if '</title>' in content:
            content = content.replace('</title>', f'</title>\n  {canonical_tag}', 1)
            print(f"Added canonical to {filepath}")
        else:
            print(f"WARNING: No <title> tag found in {filepath}")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Target files
files_to_update = [
    "index.html",
    "what-we-do/index.html",
    "case-studies/index.html",
    "about/index.html",
    "contact/index.html",
    "ai-voice-agent/index.html",
    "geo-for-home-services/index.html",
    "ai-visibility-audit/index.html",
    "research/ai-visibility-tampa-hvac/index.html",
    "blog/index.html",
    "blog/hvac-market-2026/index.html",
    "blog/best-hvac-marketing-agencies-2026/index.html",
    "blog/angi-vs-thumbtack-for-hvac-2026/index.html"
]

for file in files_to_update:
    if os.path.exists(file):
        process_file(file)
    else:
        print(f"File not found: {file}")
