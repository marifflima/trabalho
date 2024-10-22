return(
    <div className="button-area">
        <div className="button-inside" onClick={goToCultos}>
            {isMobile ? <FontAwesomeIcon icon={faChurch} /> : "Cultos"}
        </div>
        <div className="button-inside" onClick={goToDevocionais}>
            {isMobile ? <FontAwesomeIcon icon={faBookBible} /> : "Devocionais"}
        </div>
        <img className="logo" src= "/logo_black.png" alt="logo" onClick={goToInicio}>
        <div className="button-inside" onClick={goToPodcast}>
            {isMobile ? <FontAwesomeIcon icon={faPodcast} /> : "Podcast"}
        </div>
       <div className="login-button" onClick={goToLogin}>
         {nameUser ? nameUser : (isMobile ? <FontAwesomeIcon icon={faSignInAlt} /> : "Entrar")}
         </div>
         </div>
);