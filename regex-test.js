#!/usr/bin/env node
const regex = /<pre[\s\S]*?<\/pre>/gm;
const str = `111
<pre>aaaa
bbb
ccc
</pre>
ddd
<pre>eee
fff
ggg
</pre>
hhh
`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
