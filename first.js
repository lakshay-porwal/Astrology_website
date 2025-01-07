//-------zodiac_sign
const zodiacSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

//20 complements
const compliments = [
    "You are an incredibly thoughtful person.",
    "Your creativity knows no bounds.",
    "You have a remarkable ability to stay focused.",
    "Your positivity is contagious.",
    "You are a great problem solver.",
    "Your hard work is inspiring.",
    "You always bring a smile to people's faces.",
    "Your dedication is admirable.",
    "You have a fantastic sense of humor.",
    "You are a great listener and communicator.",
    "You always know how to make others feel valued.",
    "Your confidence is truly inspiring.",
    "You have an amazing ability to balance everything.",
    "You have a natural gift for making people feel comfortable.",
    "Your kindness makes the world a better place.",
    "You have an impressive ability to learn new things quickly.",
    "You have a great eye for detail.",
    "Your ambition is truly admirable.",
    "You have an incredible work ethic.",
    "Your presence lights up the room."
];

//20 VictimCardComplements
const victimCardCompliments = [
    "You always put others first, even when they don't see it.",
    "You care deeply for everyone, but sometimes it feels like no one cares for you.",
    "Your kindness often goes unnoticed, but it's truly inspiring.",
    "You give so much of yourself, even when others don't seem to acknowledge it.",
    "You always help those in need, yet rarely get the same support in return.",
    "You're always there for others, even when you need someone to lean on.",
    "Your selflessness is remarkable, but it often feels like it's taken for granted.",
    "You go out of your way to make others feel valued, even when you don't feel the same.",
    "You bring warmth to others, yet sometimes you're left in the cold.",
    "You are the first to offer a helping hand, yet no one seems to offer theirs when you need it.",
    "You constantly show care and concern, but it feels like no one shows the same for you.",
    "You're always the listener, but rarely the one being heard.",
    "You give your all, but sometimes it feels like you're just giving and never receiving.",
    "You do so much for others, but it often feels like you're left unnoticed.",
    "You are the rock for everyone else, even when you're feeling fragile.",
    "You put others' needs above your own, even when you're in need of help.",
    "Your support is unwavering, even when you don't feel supported in return.",
    "You are always considerate of others, but rarely does anyone consider you.",
    "You give so much, but it feels like it's never enough for the ones you care about.",
    "You put in all the effort, but sometimes it feels like no one notices."
];

//10 recomendation
const recommendations = [
    "Take time for yourself and recharge when needed.",
    "Keep pushing forward, even when things feel difficult.",
    "Focus on the positive aspects of your journey.",
    "Seek balance in life between work and rest.",
    "Don't hesitate to ask for help when you need it.",
    "Embrace change and growth, even when it's uncomfortable.",
    "Celebrate small victories along the way.",
    "Make time for the things that bring you joy.",
    "Reflect on your progress and be proud of how far you've come.",
    "Stay true to your values and goals, no matter the obstacles."
];

//future predictions 10
const futurePredictions = [
    "You will achieve financial success and become a crorepati by 2027.",
    "Your hard work will pay off, leading to a major career breakthrough soon.",
    "You will form meaningful connections that will significantly impact your future.",
    "Your health and well-being will improve as you adopt a better lifestyle.",
    "A new opportunity will come your way, changing your life for the better.",
    "You will travel to new places and gain life-changing experiences.",
    "Your creativity will lead to an exciting new venture or project.",
    "You will find a sense of inner peace and fulfillment in the next few years.",
    "A surprising breakthrough in your personal life will bring you great joy.",
    "By 2027, you will have made a name for yourself in your field."
];

// function monthToNumber(month){
//     const date=new Date(`${month} 1, 2022`);
//     return date.getMonth()+1;
// }

//find zodiac sign
function getZodiacSign(date,month){
    if ((month === 'March' && date >= 21) || (month === 'April' && date <= 19)) {
        return 'Aries';
    }
    else if ((month === 'April' && date >= 20) || (month === 'May' && date <= 20)) {
        return 'Taurus';
    }
    else if ((month === 'May' && date >= 21) || (month === 'June' && date <= 20)) {
        return 'Gemini';
    }
    else if ((month === 'June' && date >= 21) || (month === 'July' && date <= 22)) {
        return 'Cancer';
    }
    else if ((month === 'July' && date >= 23) || (month === 'August' && date <= 22)) {
        return 'Leo';
    }
    else if ((month === 'August' && date >= 23) || (month === 'September' && date <= 22)) {
        return 'Virgo';
    }
    else if ((month === 'September' && date >= 23) || (month === 'October' && date <= 22)) {
        return 'Libra';
    }
    else if ((month === 'October' && date >= 23) || (month === 'November' && date <= 21)) {
        return 'Scorpio';
    }
    else if ((month === 'November' && date >= 22) || (month === 'December' && date <= 21)) {
        return 'Sagittarius';
    }
    else if ((month === 'December' && date >= 22) || (month === 'January' && date <= 19)) {
        return 'Capricorn';
    }
    else if ((month === 'January' && date >= 20) || (month === 'February' && date <= 18)) {
        return 'Aquarius';
    }
    else if ((month === 'February' && date >= 19) || (month === 'March' && date <= 20)) {
        return 'Pisces';
    }
    
}

const form=document.getElementById('astroForm');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const f_name=document.getElementById('firstName').value;
    const s_name=document.getElementById('lastName').value;
    const d_birth=Number(document.getElementById('dob').value);
    // const m_birth=monthToNumber(document.getElementById('month').value);
    const m_birth=document.getElementById('month').value;
    const y_birth=Number(document.getElementById('year').value);
    const result=document.getElementById('result');

 const f_message=`Hello ${f_name} ${s_name}`;
 const s_message=`Your Zodiac sign is ${getZodiacSign(d_birth,m_birth)}`;

 let index=((f_name.length)+(s_name.length)+(y_birth%100)+1)%20;
 const t_message=`${compliments[index]}`

 const fourth_message=`${victimCardCompliments[index]}`
 let index2=((f_name.length+(y_birth%100))+(s_name.length)+69)%10;

 const five_message=`${recommendations[index2]}`;
 const six_message=`${futurePredictions[index2]}`;
 

 result.innerHTML = `${f_message} !!!<br> <b>${s_message}.</b> ${t_message} ${fourth_message}<br>
 <b>Our recommendation:</b> ${five_message}<br>
 <b>Future Prediction:</b> ${six_message}`;
})

//rest button is clicked
document.getElementById('reset').addEventListener('click',()=>{
    result.innerHTML=``;
})









