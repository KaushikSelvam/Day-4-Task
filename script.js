let Resume = {
    "Name":"kaushik",
    "Email":"kaushikselvam05@gmail.com",
    "Phone No" : 8838472600,
    "Address" : "130-B Arasu Nagar,P.C.Patti,Theni",
    "Summary" : "E Commerce Executiver Enthusiast with a Passion for Learning and Growth",
    "Education" : [
        {
            "College Name" : "Bharath University",
            "Degree" : "B.Tech",
            "Batch"  : "2020-2024",
            "Percentage" : "80%"
        },
        {
            "School Name" : "Kammavar",
            "Standard" : "12",
            "Passed Out" : 2020,
            "Percentage" : "75%"
        },
        {
            "School Name" : "Velammal",
            "Standard" : "10",
            "Passed Out" : 2018,
            "Percentage" : "82%"
        }
    ],
    
    "Skills" : [
        "HTML",
        "CSS",
        "GIT&GITHUB",
        "Amazon Product listing"
    ],
    "Languages" : [
        "Tamil",
        "English"
    ]


}
console.log(Resume);

//Using for...in loop
console.log("Using for...in loop:");
for ( let key in Resume){
    console.log(`${key} : ${Resume[key]}`)
}

//\nUsing for...of loop
console.log("\nUsing for...of loop:");
for (let Education of Resume.Education ){
    console.log(Education);
}


//\nUsing forEach loop
console.log("\nUsing forEach loop:");
for (let Skills of Resume.Skills ){
    console.log(Skills);
}

//\nUsing for...of loop
console.log("\nUsing for...of loop:");
for (let Languages of Resume.Languages){
    console.log(Languages);
}


//read about the differece between window,screen and document  in javascript

//window: 
//Represents the browser window and provides methods and properties for controlling it.

//document: 
//Represents the HTML document loaded in the browser window and provides methods and properties for accessing and manipulating its content.

//screen: 
//Represents the properties of the user's screen and provides information about its size and capabilities.
