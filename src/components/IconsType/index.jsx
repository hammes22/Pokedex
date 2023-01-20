export default function IconsType({type}) {
    return (
        <span>
            <img src={require(`../../assets/icons/${type}.png`)} alt={type} />
        </span>
    )
}