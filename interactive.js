const firstIcon = document.getElementById('first-icon');
const socialMedia = document.getElementById('social-media-section');
const profileInformation = document.getElementById('profile-information');
const closeBtn = document.getElementById('close-btn');




const displayMedia = ()=>{

    let width = window.innerWidth;

    if (width<375){
        profileInformation.style.visibility = 'hidden';
        socialMedia.style.visibility = 'visible';
    } else if( width > 376){
        profileInformation.style.visibility = 'visible';
        socialMedia.style.visibility = 'visible';
    }
}

const hideMedia = ()=>{
    socialMedia.style.visibility = 'hidden';
    profileInformation.style.visibility = 'visible';
}

firstIcon.addEventListener('click',displayMedia);
closeBtn.addEventListener('click',hideMedia);

