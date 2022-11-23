
//Propriedades


type TweetProps = {
    text: string; //text: (obrigatorio) text?: (opcional)
}

export function Tweet(props: TweetProps){
    return(
        <p>{props.text}</p>   //para incluir um código JS dentro do HTML, coloca-se chaves em volta
    );
}