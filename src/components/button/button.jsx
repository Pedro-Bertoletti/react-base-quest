const labelAlert = (label) => {
    alert(`A label desse botão é: ${label}`)
}


function Button({ label = 'Baixar CV' }) {
    return (
        <>
            <button onClick={() => labelAlert(label)}>{label}</button>
        </>
    )
}

export default Button