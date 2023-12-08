export const ShortTagMenu = function ({shortTags, longTags, selected, onToggleClicked}) {
    const getTags = () => {
        let rows = []
        for (let i = 0; i < shortTags.length; i++){
            rows.push(<div onClick={() => onToggleClicked(shortTags[i])} style={{cursor: "pointer", backgroundColor: shortTags[i] === selected? "#605BFF":"rgba(96, 91, 255, 0.1)", color: shortTags[i] === selected?"#FFFFFF":"#000000", borderRadius: "4px", fontSize: "12px", padding: "4px 8px"}}>
                {shortTags[i] === selected? longTags[i]: shortTags[i]}
            </div>)
        }
        console.log(rows)
        return rows
    }
    return <div>
        <div style={{ position: "relative", backgroundColor: "rgba(96, 91, 255, 0.1)", padding: "2px", display: "flex", gap: "2px", alignItems: "center", borderRadius: "4px", justifyContent: "center" }}>
            {getTags()}
        </div>
    </div>
}