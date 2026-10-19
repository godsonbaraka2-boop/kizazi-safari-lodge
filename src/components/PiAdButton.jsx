import { useState } from "react";
export default function PiAdButton(){
const [done,setDone]=useState(false);
const show=async()=>{
try{
if(!window.Pi||!window.Pi.Ads){alert("Fungua Pi Browser");return;}
const r=await window.Pi.Ads.isAdReady("interstitial");
if(!r.ready){alert("Hakuna ad sasa");return;}
const res=await window.Pi.Ads.showAd("interstitial");
if(res.result==="AD_REWARDED"||res.result==="AD_CLOSED"){setDone(true);}
}catch(e){console.log(e);}
};
return(<div style={{textAlign:"center",margin:"20px",padding:"15px",border:"1px dashed #c8a951",borderRadius:"10px"}}>
<button onClick={show} style={{background:"#1a3a2a",color:"#c8a951",padding:"12px 20px",borderRadius:"8px",border:"none",fontWeight:"bold"}}>🎬 Tazama Tangazo - Pata Discount</button>
{done&&<p style={{color:"green"}}>Asante! Discount imetunzwa</p>}
</div>);
}
