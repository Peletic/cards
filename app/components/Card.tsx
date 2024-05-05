'use client'

import {useState} from 'react'
//onClick={() => setFlipped(!flipped)}
//!flipped ?
export function Card(props: {
    displayTitle: string,
    displayText: string,
    flippedTitle: string,
    flippedText: string,
    num: number,
    handleClick: () => void
}) {
    const [flipped, setFlipped] = useState(false)
    return (
        <div className="rounded p-4 bg-slate-700 flex flex-col group perspective max-w-[300px]">
            <div className={"flex flex-row w-full"}>
                <button className={"text-gray-500 hover:text-red-300/80 text-left"} onClick={() => props.handleClick()}>Delete</button>
                <a className={"text-gray-400 ml-auto"}>#{props.num + 1}</a>
            </div>
            <div className="group-hover:rotate-y-180 duration-1000 preserve-3d relative w-full h-full grid grid-cols-1 grid-rows-1">

                <div className="rotate-y-180 duration-1000 backface-hidden overflow-hidden relative">
                    <h1 className={"my-2 text-xl text-right font-bold ml-[-5px]"}>{props.flippedTitle}</h1>
                    <p className={"my-2 text-right ml-[-5px]"}>{props.flippedText}</p>
                </div>
                <div className={"backface-hidden absolute"}>
                    <h1 className={"my-2 text-xl text-left font-bold"}>{props.displayTitle}</h1>
                    <p className={"my-2 text-left"}>{props.displayText}</p>
                </div>

            </div>
        </div>
    )
}