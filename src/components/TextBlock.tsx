const TextBlock = ({content}: {content: string}) => {
    return (
        <div className="text-block">
            <p>{content}</p>
        </div>
    )
}

export default TextBlock;