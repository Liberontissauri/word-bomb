import React from 'react'

function ColoredTextSegment(props) {
    function checkSimilarityBetweenStrings(a, b) {
        let similarity = 0;
        a.split("").forEach((element, index) => {
            if(b.split("")[index] === element) {
                similarity += 1;
            }
        });
        return similarity;
    }
    function findAllSegments() {
        const text = props.text
        const segment = props.segment
        const occurrences = []

        let string_sequence = ""
        text.split("").forEach((element, index) => {
            if(checkSimilarityBetweenStrings(string_sequence + element, segment) > 0) {
                string_sequence += element
                if(string_sequence == segment) {
                    occurrences.push(index - segment.length + 1)
                    string_sequence = ""
                }
            }
        });
        return occurrences
    }
    function computeColoredText() {
        const text = props.text
        const segment = props.segment
        const occurrences = findAllSegments()
        const colored_text = []
        for (let index = 0; index < text.split("").length; index++) {
            if(occurrences.includes(index)) {
                for (let j = 0; j < segment.length; j++) {
                    const letter = text.split("")[index];
                    colored_text.push(<span key={index} className={`${props.textClassName} ${props.highlightedClassName}`}>{letter}</span>)
                    index += 1
                }
                index -= 1
                continue
            }
            const letter = text.split("")[index];
            colored_text.push(<span key={index} className={props.textClassName}>{letter}</span>)
        }
        return colored_text
    }
    return (
    <div className={props.divClassName}><p>{computeColoredText()}</p></div>
    )
}

export default ColoredTextSegment