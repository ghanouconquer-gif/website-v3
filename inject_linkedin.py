import os
import re

base_dir = r"c:\Users\pc\Desktop\UNBACKED\website\WEBSITE-v3"

linkedin_json = ',\n          "sameAs": ["https://www.linkedin.com/in/abd-el-ghani-mellal-81b435321/"]'

for root, dirs, files in os.walk(base_dir):
    if 'node_modules' in root or 'dist' in root or '.git' in root: continue
    for file in files:
        if file.endswith('.html') or file.endswith('.json'):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace exact match of "name": "Abdelghani Mellal" with the appended sameAs array
                # Using regex to account for potential spacing differences
                new_content = re.sub(r'("name":\s*"Abdelghani Mellal")', r'\1' + linkedin_json, content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {file}")
            except Exception as e:
                pass
