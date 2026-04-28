import fs from 'fs';
import { globSync } from 'glob';

const clarityScript = `  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ot6yx0k1dh");
  </script>\n`;

const files = globSync('blog/*/index.html');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    if (!content.includes('ot6yx0k1dh')) {
        content = content.replace('</head>', clarityScript + '</head>');
        fs.writeFileSync(file, content);
        console.log('Added Clarity to', file);
    }
});
