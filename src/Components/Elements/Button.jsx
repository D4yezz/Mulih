export default function Button({text, variant, onClick}){

    return(
        <>
            <button className={`px-6 py-2  ${variant}`} onClick={onClick}>
                {text}
            </button>
        </>
    )
}