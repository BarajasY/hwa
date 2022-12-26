import React, { useEffect, useState } from 'react';
import './CharactersPage.css';
import { db} from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataInterface } from '../../types';
import { motion } from 'framer-motion';

const CharactersPage = () => {
    const [Characters, setCharacters] = useState<DataInterface[]>([])
    const [TekuActive, setTekuActive] = useState<number>(10)
    const [ManiacsActive, setManiacsActive] = useState<number>(10)
    const [DronesActive, setDronesActive] = useState<number>(10)
    const [NotableActive, setNotableActive] = useState<number>(10)
    const teku = Characters.filter(d => d.data.org === "Teku");
    const maniacs = Characters.filter(d => d.data.org === "Metal Maniacs");
    const drones = Characters.filter(d => d.data.org === "Racing Drones");
    const notable = Characters.filter(d => d.data.org !== "Metal Maniacs" && d.data.org !== "Teku" && d.data.org !== "Racing Drones")

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
            <div className="cards_content">
                <div className="cards_header" id="tk_h">
                    <h1>TEKU</h1>
                </div>
                <motion.div className="cards_wrapper" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                    {teku.map((d, i) => (
                        <div className="card" id="tk_c" key={i} onClick={(i) => setTekuActive(teku.indexOf(d))}>
                            <img src={d.data.img} alt={d.data.name} />
                            <h1>{d.data.alias}</h1>
                            <h1>About</h1>
                            <p>{d.data.name}</p>
                        </div>
                    ))}
                </motion.div>
                {TekuActive === 10 ? 
                <motion.div className="cards_about" id="tk_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                    <h1>&nbsp;</h1>
                </motion.div> 
                :
                <motion.div className="cards_about" id="tk_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                    <h1>{teku[TekuActive].data.description}</h1>
                </motion.div>
                }
            </div>
            <div className="cards_content">
                <div className="cards_header" id="mm_h" >
                    <h1>METAL MANIACS</h1>
                </div>
                <motion.div className="cards_wrapper" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        {maniacs.map((b, i) => (
                            <div className="card" id="mm_c" key={i} onClick={() => setManiacsActive(maniacs.indexOf(b))}>
                                    <img src={b.data.img} alt={b.data.name} />
                                    <h1>{b.data.alias}</h1>
                                    <h1>About</h1>
                                    <p>{b.data.name}</p>
                                </div>
                            ))}
                            </motion.div>
                    {ManiacsActive === 10 ? 
                    <motion.div className="cards_about" id="mm_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>&nbsp;</h1>
                    </motion.div> 
                    :
                    <motion.div className="cards_about" id="mm_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>{maniacs[ManiacsActive].data.description}</h1>
                    </motion.div>
                    }
            </div>
            <div className="cards_content">
                <div className="cards_header" id="rd_h">
                    <h1>RACING DRONES</h1>
                </div>
                <motion.div className="cards_wrapper" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                    {drones.map((c, i) => (
                        <div className="card" id="rd_c" key={i} onClick={() => setDronesActive(drones.indexOf(c))}>
                            <img src={c.data.img} alt={c.data.name} />
                            <h1>{c.data.alias}</h1>
                            <h1>About</h1>
                            <p>{c.data.name}</p>
                        </div>
                    ))}
                    </motion.div>
                    {DronesActive === 10 ? 
                    <motion.div className="cards_about" id="rd_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>&nbsp;</h1>
                    </motion.div>
                    :
                    <motion.div className="cards_about" id="rd_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>{drones[DronesActive].data.description}</h1>
                    </motion.div>
                    }
            </div>
            <div className="cards_content">
                <div className="cards_header" id="no_h">
                    <h1>NOTABLE</h1>
                </div>
                <motion.div className="cards_wrapper" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                    {notable.map((a, i) => (
                        <div className="card" id="no_c" key={i} onClick={() => setNotableActive(notable.indexOf(a))}>
                            <img src={a.data.img} alt={a.data.name} />
                            <h1>{a.data.alias}</h1>
                            <h1>About</h1>
                            <p>{a.data.name}</p>
                        </div>
                    ))}
                    </motion.div>
                    {NotableActive === 10 ? 
                    <motion.div className="cards_about" id="no_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>&nbsp;</h1>
                    </motion.div>
                    :
                    <motion.div className="cards_about" id="no_a" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}}>
                        <h1>{notable[NotableActive].data.description}</h1>
                    </motion.div>
                    }
            </div>
        </div>
    </div>
  )
}

export default CharactersPage