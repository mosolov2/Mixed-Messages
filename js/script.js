const button = document.getElementById("btn-generate")
const intro = document.getElementById("intro")
const container = document.getElementById("container")
const greetingDIV = document.getElementById("greeting")
const messageDIV = document.getElementById("message")
const goodbyeDIV = document.getElementById("goodbye")

const greetings = ['Listen here, you little mutt,',
    'Dear Figgs Listenbee (if that\'s even your real name),',
    'There\'s my pumpkin!',
    ' Ello gov\'nor,',
    'Um, hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,',
    'M\'Lady (tips hat),',
    'Generic greeting!',
    'Morning, Lord Cucuface!',
    'Well, look at you!'
]

const messages = [
    'Your dog needs to stop licking my feet.',
    'Why am I so amazing?',
    'I woke up this morning and found a highly trained military llama on my front porch. I don\'t even have a front porch.',
    'Always remember: you\'re unique, just like everyone else.',
    'I stopped fighting my inner demons, we\'re on the same side now.',
    'I don\'t deserve this award, but I have arthritis and I don\'t deserve that either.',
    'This sentence is a lie.',
    'Remember that time flies like an arrow, but fruit flies like a banana.'
]

const sendoff = [
    'And that\'s a wrap!',
    'Gotta go, buffalo.',
    'I shall return.',
    'I\'m outta here like spit through a trumpet.',
    'Hasta lasagna, don\'t get any on ya.',
    'Goodbye forever.',
    'You haven\'t seen the last of me'
]

const buildEmail = () =>  {
    greetingDIV.innerHTML = greetings[Math.floor(Math.random() * greetings.length)]
    messageDIV.innerHTML = messages[Math.floor(Math.random() * messages.length)]
    goodbyeDIV.innerHTML = sendoff[Math.floor(Math.random() * sendoff.length)]
}

button.addEventListener('click', () => {
    intro.style.display = "none";
    buildEmail()
    container.style.display = "flex";
    container.style.animationName = "slide-in"

})

container.addEventListener('animationend', () => container.style.animationName = "")

