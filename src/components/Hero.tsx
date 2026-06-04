const Hero = ({image}: {image: string}) => {
    return (
        <div className="hero">
            <img src={image} className="base" />
        </div>
    )
}

export default Hero;
