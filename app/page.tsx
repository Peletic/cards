'use client'
import {Card} from "@/app/components/Card";
import {Key, useEffect, useState} from "react";

export default function Home() {
    const [e, setE] = useState([1, 2, 3, 4, 5])
    useEffect(() => {
        console.log(e);
    }, [e, setE]);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-blue-500">Cards</span> for class
                </h1>
                <p className="text-center text-gray-500 mt-4">
                    flip(?) cards developed with a handful of divination rods
                </p>

                <div className="grid">
                    {
                        e.map((i: number, n: number) => {
                            return (
                                <Card key={n} displayTitle={`${i} Display Title`} displayText={"Display Text"}
                                      flippedTitle={`${i} Flipped Title`} flippedText={"Flipped Text"}
                                handleClick={() => {
                                    let q = e;
                                    q.splice(n, 1);
                                    console.log(q);
                                    setE([...q]);
                                }}/>
                            )
                        })
                    }
                </div>

            </div>

        </main>
    );

}
