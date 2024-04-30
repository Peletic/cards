'use client'

import {useState} from 'react'

export function Card(props: { displayTitle: string, displayText: string, flippedTitle: string, flippedText: string, handleClick: () => void }) {
    const [flipped, setFlipped] = useState(false)
    return (
        <div className="rounded p-4 bg-slate-700 flex flex-col">
            <button className={"text-gray-600/80 hover:text-red-300/80"} onClick={() => props.handleClick()}>Delete</button>
            <div className="card-inner" onClick={() => setFlipped(!flipped)}>
                {!flipped ?
                    <div>
                        <h1 className={"my-2 text-xl text-center"}>{props.displayTitle}</h1>
                        <p className={"my-2"}>{props.displayText}</p>
                    </div> :
                    <div className="card-back">
                        <h1 className={"my-2 text-xl text-center"}>{props.flippedTitle}</h1>
                        <p className={"my-2"}>{props.flippedText}</p>
                    </div>
                }
            </div>
        </div>
    )
}