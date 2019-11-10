import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faSave } from "@fortawesome/free-solid-svg-icons";

function Studio () {

    return (
        <article className="studio">

            <div className="studio-heading">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/MTV_Logo.svg" className="studio-logo" />  
                <div className="name-and-availability">
                    <h1 className="studio-name">Urban sound</h1>
                    <p className="studio-availability"><span className="blink"></span>Available now</p>
                </div>
            </div>

            <p className="studio-description">Helping Artists, Producers Labels Achieve Mixes & Masters</p>

            <div className="studio-images">
                <img className="studio-image" src="https://miro.medium.com/fit/c/256/256/0*ga4DgZJHaHrPMG6w." />
                <img className="studio-image" src="http://photos1.blogger.com/blogger/3954/945/1600/wilsonpickett00.jpg" />
                <img className="studio-image" src="https://c-sf.smule.com/sf/s80/arr/f5/27/012c1534-7bb5-42e3-8d92-551a18f938d7.jpg" />
                <img className="studio-image" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/arts/2004/07/30/andyCatlin_macgowan1.jpg?width=300&quality=85&auto=format&fit=max&s=b5657c333f4ad1f38b6ec363ee02597d" />
            </div>
            

            <div className="call-to-action">
                <p><FontAwesomeIcon icon={faComment} className="studio-comment" /> Send message</p>                
                <p><FontAwesomeIcon icon={faSave} className="studio-comment" /> Save for later</p>
            </div>
        </article>
    )
}

export default Studio