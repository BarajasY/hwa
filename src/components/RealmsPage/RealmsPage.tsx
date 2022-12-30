import React, { useEffect, useState } from 'react';
import './RealmsPage.css';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataInterface } from '../../types';

const RealmsPage = () => {
  const [Realms, setRealms] = useState<DataInterface[]>([])

  const IgnitionRealms = Realms.filter(d => d.data.seen === "Ignition Movie")
  const CardRealms = Realms.filter(d => d.data.seen === "Card Game")
  const SilenceRealms = Realms.filter(d => d.data.seen === "Speed of Silence Movie")
  const BPointRealms = Realms.filter(d => d.data.seen === "Breaking Point Movie")
  const URaceRealms = Realms.filter(d => d.data.seen === "The Ultimate Race Movie")

  const getRealms = () => {
    const realmsColl = collection(db, 'realms');
    getDocs(realmsColl).then(res => {
      const realmsData = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
      setRealms(realmsData)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getRealms()
  }, [])

  return (
    <div className="rp_container">
      <div className="rp_content">
        <div className="title_container">
          <h1>Card Game</h1>
        </div>
        <section>
         {CardRealms.map(a => (
           <div className="realms_wrapper">
            <img src={a.data.img} alt={a.data.name} />
            <img src={a.data.img} alt={a.data.name} id="blurRealm"/>
            <h1>{a.data.name}</h1>
          </div>
         ))}
         </section>
        </div>
        <div className="rp_content">
        <div className="title_container">
          <h1>Ignition</h1>
        </div>
        <section>
         {IgnitionRealms.map(a => (
           <div className="realms_wrapper">
            <img src={a.data.img} alt={a.data.name} />
            <img src={a.data.img} alt={a.data.name} id="blurRealm"/>
            <h1>{a.data.name}</h1>
          </div>
         ))}
         </section>
        </div>
        <div className="rp_content">
        <div className="title_container">
          <h1>Speed of Silence</h1>
        </div>
        <section>
         {SilenceRealms.map(a => (
           <div className="realms_wrapper">
            <img src={a.data.img} alt={a.data.name} />
            <img src={a.data.img} alt={a.data.name} id="blurRealm"/>
            <h1>{a.data.name}</h1>
          </div>
         ))}
         </section>
        </div>
        <div className="rp_content">
        <div className="title_container">
          <h1>Breaking Point</h1>
        </div>
        <section>
         {BPointRealms.map(a => (
           <div className="realms_wrapper">
            <img src={a.data.img} alt={a.data.name} />
            <img src={a.data.img} alt={a.data.name} id="blurRealm"/>
            <h1>{a.data.name}</h1>
          </div>
         ))}
         </section>
        </div>
        <div className="rp_content">
        <div className="title_container">
          <h1>Ultimate Race</h1>
        </div>
        <section>
         {URaceRealms.map(a => (
           <div className="realms_wrapper">
            <img src={a.data.img} alt={a.data.name} />
            <img src={a.data.img} alt={a.data.name} id="blurRealm"/>
            <h1>{a.data.name}</h1>
          </div>
         ))}
         </section>
        </div>
    </div>
  )
}

export default RealmsPage