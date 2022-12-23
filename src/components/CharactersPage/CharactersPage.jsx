import React, { useEffect, useState } from 'react';
import './CharactersPage.css';
import { db} from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const CharactersPage = () => {
    const [Characters, setCharacters] = useState([])
    const [TekuActive, setTekuActive] = useState(null)
    const [ManiacsActive, setManiacsActive] = useState(null)
    const [DronesActive, setDronesActive] = useState(null)
    const teku = Characters.filter(d => d.data.org === "Teku");
    const maniacs = Characters.filter(d => d.data.org === "Metal Maniacs");
    const drones = Characters.filter(d => d.data.org === "Racing Drones");
    const silencerz = Characters.filter(d => d.data.org === "Silencerz")

    const getCharacters = () => {
        const charactersCollRef = collection(db, 'characters') // Stablishing collection of characters table.
        getDocs(charactersCollRef).then(response => {
            const data = response.docs.map(doc => ({data: doc.data(), id:doc.id}))
            setCharacters(data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCharacters()
    }, [])

  return (
    <div className="container">
        <div className="content">
            <div className="teku_content">
                <div className="teku_header">
                    <h1>TEKU</h1>
                </div>
                <section>
                    {teku.map((d, i) => (
                        <div className="card" id="tk" key={i} onClick={(i) => setTekuActive(teku.indexOf(d))}>
                            <img src={d.data.img} alt={d.data.name} />
                            <h1>{d.data.alias}</h1>
                            <h1>About</h1>
                            <p>{d.data.name}</p>
                        </div>
                    ))}
                </section>
                {TekuActive === null ? <></> 
                :
                <div className="teku_about">
                    <h1>{teku[TekuActive].data.description}</h1>
                </div>
                }
            </div>
            <div className="mm_content">
                <div className="mm_header">
                    <h1>METAL MANIACS</h1>
                </div>
                    <section>
                        {maniacs.map((b, i) => (
                            <div className="card" id="mm" key={i} onClick={() => setManiacsActive(maniacs.indexOf(b))}>
                                    <img src={b.data.img} alt={b.data.name} />
                                    <h1>{b.data.alias}</h1>
                                    <h1>About</h1>
                                    <p>{b.data.name}</p>
                                </div>
                            ))}
                    </section>
                    <section>
                    {ManiacsActive === null ? <></> 
                    :
                    <div className="mm_about">
                        <h1>{maniacs[ManiacsActive].data.description}</h1>
                    </div>
                    }
                    </section>
            </div>
            <div className="rd_content">
                <div className="rd_header">
                    <h1>RACING DRONES</h1>
                </div>
                <div className="rd_cards">
                    {drones.map((c, i) => (
                        <div className="card" id="rd" key={i} onClick={() => setDronesActive(drones.indexOf(c))}>
                            <img src={c.data.img} alt={c.data.name} />
                            <h1>{c.data.alias}</h1>
                            <h1>About</h1>
                            <p>{c.data.name}</p>
                        </div>
                    ))}
                    </div>
                    <section>
                    {DronesActive === null ? <></> 
                    :
                    <div className="rd_about">
                        <h1>{drones[DronesActive].data.description}</h1>
                    </div>
                    }
                    </section>
            </div>
        </div>
    </div>
  )
}

export default CharactersPage