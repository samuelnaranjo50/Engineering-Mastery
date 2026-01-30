

export default function DarkModeBar(){

    let darkModeSate = false; //Default mode

    function darkModeHandler(){
        darkModeSate = !darkModeSate;
        let message = darkModeSate?  "Dark" : "Ligth"
        console.log("App theme is:", message);

    }

    return(
        <>
        <h1>App theme is: {darkModeSate?  "Dark" : "Ligth" }</h1>
        <button onClick={darkModeHandler}>Change the theme</button>
        </>

    );


}