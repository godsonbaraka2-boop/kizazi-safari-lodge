import { useState } from "react";
export default function PiAdButton({ onReward }){
  const [done,setDone]=useState(false);
  const [loading,setLoading]=useState(false);
  const show=async()=>{
    if(!window.Pi || !window.Pi.Ads){
      alert("Fungua kwenye Pi Browser");
      return;
    }
    setLoading(true);
    try{
      const r = await window.Pi.Ads.isAdReady("rewarded");
      if(!r){
        alert("Hakuna Ad kwa sasa");
        setLoading(false);
        return;
      }
      const res = await window.Pi.Ads.show("rewarded");
      if(res.result==="AD_REWARDED"){
        setDone(true);
        alert("Hongera! Umepata punguzo");
        if(onReward) onReward();
      }
    }catch(e){ console.log(e); alert(e.message); }
    setLoading(false);
  };
  return(
    <div style={{textAlign:"center", margin:20}}>
      <button onClick={show} disabled={loading} style={{background:"#6a1b9a",color:"white",padding:"12px 24px",borderRadius:12,border:"none",fontWeight:"bold"}}>
        {loading ? "Inapakia..." : "🎬 Tazama Ad Pata Punguzo Pi"}
      </button>
      {done && <p style={{color:"green"}}>Asante! Punguzo limetumika</p>}
    </div>
  );
}
