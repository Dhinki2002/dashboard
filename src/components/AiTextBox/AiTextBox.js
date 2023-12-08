import axios from "axios";
import { useCallback, useState, useEffect, useRef } from "react";
import { Loader } from "rsuite";
import { ShortTagMenu } from "../ShortTagMenu/ShortTagMenu";
export const AiTextBox = ({ tag, afterAction, placeholder, onTextChanged, containerStyle }) => {
    const recognition = useRef(null)
    const [isListening, setIsListening] = useState(false);
    const [previousTextValue, setPreviousTextValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [aiGeneratedValue, setAiGeneratedValue] = useState("");
    const [afterActionValue, setAfterActionValue] = useState("");
    const [showContentType, setShowContentType] = useState("OR");
    const [isAiLoading, setIsAiLoading] = useState(false);
    useEffect(() => {
        if (showContentType === "AI") {
            onTextChanged?.(aiGeneratedValue)
        } else {
            onTextChanged?.(textValue)
        }
    }, [textValue, aiGeneratedValue, showContentType])
    useEffect(() => {
        const wsr = new window.webkitSpeechRecognition();
        wsr.lang = "en-US"
        wsr.continuous = true
        wsr.interimResults = false
        wsr.onstart = () => {
            setIsListening(true); // Set the state to indicate recognition is active
        };
        wsr.onresult = (event) => {
            const voiceInput = event.results[0][0].transcript; // Get the recognized transcript
            console.log(`Previous: ${previousTextValue} |||| Current: ${voiceInput}`)
            setTextValue((prev) => `${prev} ${voiceInput}`)
            // const updatedValues = [...inputValues];

            // if (updatedValues[voiceVal][voiceIndex] === undefined) {
            //     updatedValues[voiceVal][voiceIndex] = " " + voiceInput + ".";
            // } else {
            //     updatedValues[voiceVal][voiceIndex] += " " + voiceInput + "."; // Append the voice input to the value at this index
            // }
            // console.log(voiceInput)

            // setInputValues(updatedValues);

            // let id = `${voiceIndex}-${voiceVal}`;

            // const textArea = document.getElementById(id); // Replace 'yourTextAreaId' with the actual ID of your textarea
            // if (textArea === undefined) {
            //     textArea.value = voiceInput;
            // } else {
            //     textArea.value += " " + voiceInput + ".";
            // }
        };
        wsr.onend = () => {
            setIsListening(false);
            // Set the state back to indicate recognition has ended
        };
        recognition.current = wsr
    }, [])
    const onToggleRecognition = (shouldStop) => {
        if (isListening) {
            recognition.current.stop()
        } else if(!shouldStop) {
            recognition.current.start()
        }
    }
    const onGenerateClicked = async () => {
        try {
            if(textValue.length < 50) return
            setShowContentType("AI")
            setAiGeneratedValue("Loading...")
            const response = await axios.post(`http://localhost:8000/resume/enhance/${tag}`, {content: textValue})
            setAiGeneratedValue(response.data.content)
            if (!afterAction) return
            const afterActionResponse = await axios.post(`http://localhost:8000/resume/generate/${afterAction.tag}/`, {content: textValue})
            setAfterActionValue(afterActionResponse.data.content)
        } catch (error) {
            setShowContentType("OR")
            setAiGeneratedValue("")
            console.log(error)
        }
    }
    useEffect(() => {
        if (showContentType === "AI") {
            onGenerateClicked()
        }
    }, [showContentType])
    return <div style={{...containerStyle, position: "relative"}}>
        <div style={{position: "relative", backgroundColor: "#EFF2F9", borderRadius: "4px"}}>
            <div style={{width: "100%"}}>
                <textarea readOnly={ showContentType === "AI"} onChange={(e) => {
                    setTextValue(e.target.value)
                    setPreviousTextValue(e.target.value)
                }} value={showContentType === "AI" ? aiGeneratedValue : textValue} style={{ position: "relative", backgroundColor: "rgba(0,0,0,0)", borderRadius: "4px", padding: "18px", width: "100%", fontSize: "1vw" }} placeholder={placeholder} />
            </div>
            <div style={{position: "absolute", bottom: "18px", width: "100%", display: "flex", alignItems: "center", justifyContent: "end", gap: "8px", padding: "0px 12px"}}>
                {textValue.length >= 50 && <div>
                    <ShortTagMenu shortTags={["OR", "AI"]} onToggleClicked={(value) => {setShowContentType(value)}} longTags={["Original", "AI Generated"]} selected={ showContentType} />
                </div>}
                <div tabIndex={0} onBlur={() => onToggleRecognition(true)} onClick={() => onToggleRecognition()} style={{ position: "relative" }}>
                    <img src={isListening? "./microphone-red.png": "./microphone-blue.png"} style={{width: "24px", height: "24px", cursor: "pointer"}}/>
                </div>
            </div>
        </div>
        {afterAction && afterActionValue && <div style={{width: "100%", fontSize: "1vw"}}>
            <div>
                {afterAction.type === "questions" && "Questions based on above description"}
            </div>
            <div style={{width: "100%", color: "#8D8D8D"}}>
                {afterActionValue.split("\n").map((actionVal) => <div style={{width: "100%"}}>
                    {actionVal}
                </div>)}
            </div>
        </div>}
    </div>
}