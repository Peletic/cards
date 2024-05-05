'use client'
import {Card} from "@/app/components/Card";
import {Key, useEffect, useState} from "react";

export default function Home() {
    const [e, setE] = useState(["Typography", "Design Workflow", "Multimedia Files", "Web Analytics", "SEO", "XML", "XHTML", "Accessibility", "IP", "Patent", "Trademark", "E-Commerce", "Bootstrap", "DNT", "HTML5"])

    const terms: {[index: string]: { displayTitle : string, displayText : string, flippedTitle : string, flippedText : string }} = {
        "Typography": {
            displayTitle: "Typography",
            displayText: "Unit #1",
            flippedTitle: "Typography",
            flippedText: "The style and appearance of printed matter"
        },
        "Design Workflow": {
            displayTitle: "Design Workflow",
            displayText: "Unit #1",
            flippedTitle: "Design Workflow",
            flippedText: "The mapping of sequential tasks to take an item from initiated to processed"
        },
        "Multimedia Files": {
            displayTitle: "Multimedia Files",
            displayText: "Unit #2",
            flippedTitle: "Multimedia Files",
            flippedText: "A file that contains one or more types of data"
        },
        "Web Analytics": {
            displayTitle: "Web Analytics",
            displayText: "Unit #3",
            flippedTitle: "Web Analytics",
            flippedText: "The collection, reporting, and analysis of website data"
        },
        "SEO": {
            displayTitle: "SEO",
            displayText: "Unit #3",
            flippedTitle: "SEO",
            flippedText: "Search Engine Optimization"
        },
        "XML": {
            displayTitle: "XML",
            displayText: "Unit #4",
            flippedTitle: "XML",
            flippedText: "Extensible Markup Language"
        },
        "XHTML": {
            displayTitle: "XHTML",
            displayText: "Unit #4",
            flippedTitle: "XHTML",
            flippedText: "Extensible HyperText Markup Language"
        },
        "Accessibility": {
            displayTitle: "Accessibility",
            displayText: "Unit #6",
            flippedTitle: "Accessibility",
            flippedText: "The design of products, devices, services, or environments for people with disabilities"
        },
        "IP": {
            displayTitle: "IP",
            displayText: "Unit #6",
            flippedTitle: "IP",
            flippedText: "Intellectual Property"
        },
        "Patent": {
            displayTitle: "Patent",
            displayText: "Unit #6",
            flippedTitle: "Patent",
            flippedText: "A government authority or license conferring a right or title for a set period"
        },
        "Trademark": {
            displayTitle: "Trademark",
            displayText: "Unit #6",
            flippedTitle: "Trademark",
            flippedText: "A symbol, word, or words legally registered or established by use as representing a company or product"
        },
        "E-Commerce": {
            displayTitle: "E-Commerce",
            displayText: "Unit #6",
            flippedTitle: "E-Commerce",
            flippedText: "Commercial transactions conducted electronically on the Internet"
        },
        "Bootstrap": {
            displayTitle: "Bootstrap",
            displayText: "Unit #7",
            flippedTitle: "Bootstrap",
            flippedText: "A free and open-source front-end framework for designing websites and web applications"
        },
        "DNT": {
            displayTitle: "DNT",
            displayText: "Unit #5",
            flippedTitle: "DNT",
            flippedText: "Do Not Track"
        },
        "HTML5": {
            displayTitle: "HTML5",
            displayText: "Unit #4",
            flippedTitle: "HTML5",
            flippedText: "The fifth and current major version of the HTML standard"
        }
    }
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
                    made with nextjs and a handful of divination rods
                </p>

                <div className="grid mt-8 w-[66vw] gap-6 p-2" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                    {
                        e.map((i: string, n: number) => {
                            return (
                                <Card key={n} displayTitle={`${terms[i].displayTitle}`} displayText={`${terms[i].displayText}`}
                                      flippedTitle={`${terms[i].flippedTitle}`} flippedText={`${terms[i].flippedText}`} num={n}
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
