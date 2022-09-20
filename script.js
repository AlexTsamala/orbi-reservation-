import i18next from 'https://deno.land/x/i18next/index.js'

const flagOfBritain = document.getElementById("kingdom-flag");
const reservation = document.getElementById("reservation");
const language = document.getElementById("geo-style");
const entreeDate = document.getElementById("entree-date");
const checkOut = document.getElementById("check-out-date");
const roomNumber = document.getElementById("room-number");
const guestName = document.getElementById("guest-name");
const guestSurname = document.getElementById("guest-surname");
const approve = document.getElementById("approve");
const decline = document.getElementById("decline");
i18next.init({
    lng: 'ka', 
    resources: {
      en: {
        translation: {
          "reservation": "Reservation",
          "checkInDate": "Check In Date :",
          "checkOut": "Check Out Date :",
          "roomNumber": "Room Number :",
          "guestName": "Guest's Name :",
          "guestSurname": "Guest's Surname :",
          "approve": "Approve",
          "decline": "Decline"
        }
      },
      ka: {
        translation: {
          "reservation": "ჩემი ჯავშანი",
          "checkInDate": "შემოსვლის თარიღი :",
          "checkOut":"გასვლის თარიღი :",
          'roomNumber': "ოთახის ნომერი :",
          "guestName": "სტუმრის სახელი :",
          "guestSurname": "სტუმრის გვარი :",
          "approve": "დადასტურება",
          "decline": "უარყოფა"
        }
      }
    }
  });

 

  flagOfBritain.addEventListener("click",(event) => {
    
    if(i18next.language==="ka"){
        event.target.src="./assets/Flag_of_Georgia.svg.png";
        language.textContent="GEO";
        i18next.changeLanguage("en");
    }else{
        event.target.src="./assets/Flag_of_the_United_Kingdom.svg.png"
        language.textContent="ENG";
        i18next.changeLanguage("ka");
    }
    changeLanguage();
  }) 

function changeLanguage (){
    reservation.innerHTML = i18next.t('reservation');
    entreeDate.innerHTML = i18next.t('checkInDate');
    checkOut.innerHTML = i18next.t('checkOut');
    roomNumber.innerHTML = i18next.t('roomNumber');
    guestName.innerHTML = i18next.t('guestName');
    guestSurname.innerHTML = i18next.t('guestSurname');
    approve.innerHTML = i18next.t('approve');
    decline.innerHTML = i18next.t('decline');
}
changeLanguage();