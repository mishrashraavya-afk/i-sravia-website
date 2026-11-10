"""Usage: python set-domain.py www.yourdomain.com
Replaces the YOUR-DOMAIN placeholder in every page, the sitemap and robots.txt."""
import sys, pathlib
if len(sys.argv) != 2: sys.exit(__doc__)
d = sys.argv[1].replace("https://", "").replace("http://", "").strip("/")
for p in pathlib.Path(__file__).parent.glob("*"):
    if p.suffix in {".html", ".xml", ".txt"}:
        t = p.read_text(encoding="utf-8")
        if "YOUR-DOMAIN" in t:
            p.write_text(t.replace("YOUR-DOMAIN", d), encoding="utf-8"); print("updated", p.name)
