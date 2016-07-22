var bio = {
    "Name": "Malak Lopez",
    "Role": "Digital Strategist",
    "image": "images/malak-lopez-profilepic.jpg",
    "welcomeMessage" : "Hi thereeee!",
    "contacts" : [{
        "mobile": "213-884-8259",
        "email": "malak.lopez76@gmail.com",
        "github": "https://github.com/scriptmediala",
        "skype": "malakd33",
        "twitter": "https://twitter.com/MalakLopezLA",
        "location": "Los Angeles"
    }], 
    "skills" : ["Dedicated", "Intuitive", "Analytical", "Charasmatic"]
};
bio.Show = function(){
    var formattedMessage = HTMLbannerMessage.replace("%data%", bio.welcomeMessage);
    var formattedName = HTMLbannerName.replace("%data%", bio.Name);
    var formattedPosition = HTMLbannerPosition.replace("%data%", bio.Role);
    
    $("#banner-text").prepend(formattedMessage).prepend(formattedName).append(formattedPosition)
};
bio.Show();