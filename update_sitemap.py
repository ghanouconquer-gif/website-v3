import re

sitemap_path = r"c:\Users\pc\Desktop\UNBACKED\website\WEBSITE-v3\public\sitemap.xml"

with open(sitemap_path, "r", encoding="utf-8") as f:
    content = f.read()

# Update all existing lastmod to today
content = re.sub(r'<lastmod>\d{4}-\d{2}-\d{2}</lastmod>', '<lastmod>2026-03-19</lastmod>', content)

# Missing URLs to add
missing_urls = [
    "https://unbacked.agency/blog/hvac-business-owner-salary-2026/",
    "https://unbacked.agency/blog/how-to-start-hvac-business-no-money/",
    "https://unbacked.agency/blog/residential-to-commercial-hvac-2026/",
    "https://unbacked.agency/blog/residential-vs-commercial-hvac-2026/"
]

new_entries = ""
for url in missing_urls:
    if url not in content:
        new_entries += f"""  <url>
    <loc>{url}</loc>
    <lastmod>2026-03-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
"""

if new_entries:
    # Insert before </urlset>
    content = content.replace("</urlset>", new_entries + "</urlset>")

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Sitemap updated successfully!")
