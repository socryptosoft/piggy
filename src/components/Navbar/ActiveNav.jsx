import { useState, useEffect } from "react" 




import arrow from "../../images_videos/arrow.png"




function ActiveNav(props) {

    // eslint-disable-next-line
    const [isLinks, setLinks] = useState(false)

    function handleSwith() {
        props.toggler(false)
    }

    // eslint-disable-next-line
    useEffect(() => {
        if (isLinks === false) {
            setLinks(true)
        } else if (isLinks === true) {
            setLinks(false)
        }
    }, [props.toggler])

    return(
        <>
            <div className="toggler" onClick={handleSwith}><img src={arrow} alt="" height="25px"/></div>
            <div className="info">
                <div className={`info__name ${isLinks ? '' : 'hidden'}`}><a href="#priceInfo"> $PIGGY</a></div>
                <div className={`info__key ${isLinks ? '' : 'hidden'}`}><a href="#key">Key detais</a></div>
                <div className={`info__buy ${isLinks ? '' : 'hidden'}`}><a href="#howToBuy">How to buy</a></div>
                <div className={`info__bucke ${isLinks ? '' : 'hidden'}`}><a href="#piggy">Farm piggy</a></div>
                <div className={`info__oinknomicks ${isLinks ? '' : 'hidden'}`}><a href="#oinkenomicks">Oinknomicks</a></div>
            </div>
            <div className="socials">
                <div className="socials__x"><a href="https://x.com/based_piggy" target="_blank" rel="noopener noreferrer">X</a></div>
                <div className="socials__tg"><a href="https://t.me/piggyisforthepeople" target="_blank" rel="noopener noreferrer">Telegram</a></div>
            </div>
        </>
    )
}

export {ActiveNav}