import {createElement} from 'react';
import fs from 'node:fs';
import path from 'node:path';
export function LegalPage({file,title}:{file:string,title:string}) {
 const raw=fs.readFileSync(path.join(process.cwd(),'Assets','Documents',file),'utf8').replace(/^.*?\r?\n/,'');
 return <article className="page legalpage"><p className="eyebrow">CAPZ HQ</p><h1>{title}</h1><div className="legaltext">{raw.split(/\r?\n/).map((line,i)=>{
  if(!line.trim())return <div className="spacer" key={i}/>;
  const h=line.match(/^(#{1,6})\s+(.*)$/);
  if(h)return createElement('h'+Math.min(h[1].length+1,6),{key:i},h[2]);
  if(/^[-*]\s/.test(line))return <li key={i} dangerouslySetInnerHTML={{__html:fmt(line.replace(/^[-*]\s/,''))}}/>;
  if(/^\d+[.)]\s/.test(line))return <li key={i} dangerouslySetInnerHTML={{__html:fmt(line.replace(/^\d+[.)]\s/,''))}}/>;
  return <p key={i} dangerouslySetInnerHTML={{__html:fmt(line)}}/>;
 })}</div></article>;
}
function fmt(s:string){return s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2">$1</a>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>')}
