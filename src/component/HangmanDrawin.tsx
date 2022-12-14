

const Head  = (
    <div style={{
        width:"50px",
        height:"50px",
        borderRadius:"100%",
        position: "absolute",
        border: "10px solid black",
        top : "50px",
        right : "-30px"

    }}/>
)
const Body  = (
    <div style={{
        width:"10px",
        height:"100px",
        position: "absolute",
        background:"black",
        top : "120px",
        right : "0px"

    }}/>
)
const Right_Arm  = (
    <div style={{
        width:"100px",
        height:"10px",
        position: "absolute",
        background:"black",
        top : "150px",
        right : "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"

    }}/>
)
const Left_Arm  = (
    <div style={{
        width:"100px",
        height:"10px",
        position: "absolute",
        background:"black",
        top : "150px",
        right : "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"

    }}/>
)

const Right_Leg  = (
    <div style={{
        width:"100px",
        height:"10px",
        position: "absolute",
        background:"black",
        top : "210px",
        right : "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"

    }}/>
)
const Left_Leg  = (
    <div style={{
        width:"100px",
        height:"10px",
        position: "absolute",
        background:"black",
        top : "210px",
        right : "0",
        rotate: "-60deg",
        transformOrigin: "right bottom"

    }}/>
)
type HangmanDrawinProps =
{
    numberOfGuesses:number
}

const BodyParts = [ 
    Head,
    Body,
    Left_Arm,
    Right_Arm,
    Left_Leg,
    Right_Leg
 ]
 export const HangmanDrawin = ({numberOfGuesses}:HangmanDrawinProps) => {
     return (
        <div style={{ position: "relative" }}>
            {BodyParts.slice(0 , numberOfGuesses)} 
          
            <div style={{ position: "absolute", right: "0" , top : "0", height: "50px", width: "10px", background: "black" , marginLeft: "120px"}}/>
            <div style={{ height: "10px", width: "200px", background: "black" , marginLeft: "120px"}}/>
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }}/>
            <div style={{ height: "10px", width: "250px", background: "black" }}/>
        </div>
    )
}