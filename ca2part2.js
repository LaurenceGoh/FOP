// Name: Laurence Goh Ming Shen
// Class: DIT/1A/06
// Adm: 2220327

var input = require('readline-sync');

class Member {
    constructor(name,memtype,joindate,dob,points){
        this.name = name;
        this.memtype = memtype;
        this.joindate = joindate;
        this.dob = dob;
        this.points = points;
    }
    getDetails(){
        console.log("Name: " + this.name);
        console.log("Membership type: "  + this.memtype);
        console.log("Join date: " + this.joindate);
        console.log("Date of birth: " + this.dob);
        console.log("Points earned: " +this.points)
    }
}
class MemberGroup {
    constructor(){
        this.memberArray=[];
        this.memberArray.push(new Member('Leonardo', 'Gold', '1 Dec 2019', '1 Jan 1980', 1400));
        this.memberArray.push(new Member('Catherine', 'Ruby', '14 Jan 2020', '28 Oct 1985', 250));
        this.memberArray.push(new Member('Luther', 'Gold', '29 Apr 2020', '16 Mar 1992', 3350));
        this.memberArray.push(new Member('Bruce', 'Diamond', '3 Jun 2020', '18 Mar 1994', 40200));
        this.memberArray.push(new Member('Amy', 'Ruby', '5 Jun 2020', '31 May 2000', 500));
    }   
    
    // If 2 or more members have the same date of birth, the member who joined the earliest will be printed out
    findAge(){
        var oldest=Infinity;
        var youngest=0;
        for (var a=0;a<memberInfo.memberArray.length;a++){
            var birthYear = new Date(memberInfo.memberArray[a].dob);
           
            if (birthYear<oldest){
                oldest = birthYear;
                var oldestMember = memberInfo.memberArray[a].name;
            }
            
            else if (birthYear>youngest){
                youngest = birthYear;
                var youngestMember = memberInfo.memberArray[a].name;
            }
        }
        console.log("\n\t\tYoungest member is : " + youngestMember);
        console.log("\t\tOldest member is : " + oldestMember + "\n");
    }

    // Finding lowest and highest points
    findPoints(){
        var leastPoints=Infinity;
        var mostPoints=0;
        for (var a=0;a<memberInfo.memberArray.length;a++){
            var memberPoints = memberInfo.memberArray[a].points
           
            if (memberPoints<leastPoints){
                leastPoints=memberPoints
                var leastName = memberInfo.memberArray[a].name
                
            }
        
            else if (memberPoints>mostPoints){
                mostPoints=memberPoints;
                var mostName = memberInfo.memberArray[a].name;
            }
        }
        console.log("\n\t\tHighest member: " + mostName)
        console.log("\t\tLowest member: " + leastName + "\n")
    }

    // Finding how many members in a membership type
    findMembersType(){
        var ruby=0,gold=0,platinum=0,diamond =0;
        for (var i=0;i<memberInfo.memberArray.length;i++){
            switch(memberInfo.memberArray[i].memtype.toLowerCase()){
                case "ruby" :
                    ruby++;
                    break;
                case "gold":
                    gold++;
                    break;
                case "platinum":
                    platinum++;
                    break;
                case "diamond":
                    diamond++
                    break;
            }
        }
            console.log("\n\t\tRuby: " + ruby);
            console.log("\t\tGold: " + gold);
            console.log("\t\tPlatinum: " + platinum);
            console.log("\t\tDiamond: " + diamond + "\n");
    }

    // Total points in each membership type
    findTypePoints(){
        var ruby=0,gold=0,platinum=0,diamond=0;
        
        for (var i=0;i<memberInfo.memberArray.length;i++){
            switch(memberInfo.memberArray[i].memtype.toLowerCase()){
                case "ruby" :
                    ruby+=memberInfo.memberArray[i].points;
                    break;
                case "gold":
                    gold+=memberInfo.memberArray[i].points;
                    break;
                case "platinum":
                    platinum+=memberInfo.memberArray[i].points;
                    break;
                case "diamond":
                    diamond+=memberInfo.memberArray[i].points;
                    break;
            }
        }
            console.log("\n\t\tRuby: " + ruby);
            console.log("\t\tGold: " + gold);
            console.log("\t\tPlatinum: " + platinum);
            console.log("\t\tDiamond: " + diamond + "\n");
    }

    // Finding members that have the same type based on input
    findMembershipType(){
        do{
            var membershipInput = input.question("\n\t\tEnter membership type: ").toLowerCase();
            var ruby="",diamond="",gold="",platinum="";
    
            for (var i=0;i<memberInfo.memberArray.length;i++){
                if (membershipInput=="ruby"||membershipInput=="gold"||membershipInput=="platinum"||membershipInput=="diamond"){
                    if (membershipInput=="ruby" && membershipInput==memberInfo.memberArray[i].memtype.toLowerCase()){
                        ruby += memberInfo.memberArray[i].name + " ";
                    }
    
                    else if (membershipInput=="gold" && membershipInput==memberInfo.memberArray[i].memtype.toLowerCase()){
                        gold +=memberInfo.memberArray[i].name + " ";
                    }
    
                    else if (membershipInput=="platinum" && membershipInput==memberInfo.memberArray[i].memtype.toLowerCase()){
                        platinum +=memberInfo.memberArray[i].name + " ";
                    }
    
                    else if (membershipInput=="diamond" && membershipInput==memberInfo.memberArray[i].memtype.toLowerCase()){
                        diamond +=memberInfo.memberArray[i].name + " "; 
                    }
                    
                }
                else {
                    console.log("\t\tPlease enter a membership type.")
                    break;
                }
                
            }
            switch(membershipInput){
                case "ruby": 
                    console.log("\t\tMember(s) of membership type " + membershipInput+ ": " + ruby + "\n");
                    break;
                case "gold":
                    console.log("\t\tMember(s) of membership type " + membershipInput + ": " + gold + "\n");
                    break;
                case "platinum":
                    console.log("\t\tMember(s) of membership type " + membershipInput + ": " + platinum + "\n");
                    break;
                case "diamond":
                    console.log("\t\tMember(s) of membership type " + membershipInput + ": " + diamond+ "\n");
                    break;
            }
        } while (membershipInput!="ruby"&& membershipInput!="gold"&& membershipInput!="platinum"&& membershipInput!="diamond")
    }

    // Update membership type when minimum points has reached
    updateMembership(){
        for (var i=0;i<memberInfo.memberArray.length;i++){
            if (memberInfo.memberArray[i].points>=500 && memberInfo.memberArray[i].points<5000){
                memberInfo.memberArray[i].memtype = "Gold";
            }
            else if (memberInfo.memberArray[i].points>=5000 && memberInfo.memberArray[i].points<20000){
                memberInfo.memberArray[i].memtype = "Platinum";
            }
            else if (memberInfo.memberArray[i].points>=20000){
                memberInfo.memberArray[i].memtype = "Diamond"
            }
        }
    }
}

var typeList = ['Name: ', 'Membership type: ', 'Date Joined: ', 'Date of birth: ', 'Points earned: '];

// Calling the member Objects
const memberInfo = new MemberGroup(new Member());
memberInfo.updateMembership();
console.log("Welcome to XYZ Membership Loyalty Programme!");

do {
var userName = input.question("Please enter your name: ");
var nameResult = /^[a-zA-Z ]+$/.test(userName);

if (nameResult==false){ 
    console.log("Invalid input.")
    }
} while (nameResult==false) 

do {
    console.log("\nHi " + userName + ", please select your choice:");
    console.log("\t1. Display all members' information");
    console.log("\t2. Display member information");
    console.log("\t3. Add new member");
    console.log("\t4. Update points earned");
    console.log("\t5. Statistics");
    console.log("\t6. Delete member");
    console.log("\t7. Exit");
 
    var menuInput = input.question("\t>> ");
    var menuResult = /^[1-7]$/.test(menuInput);

    if (menuResult==false) {
        console.log("Please enter a valid Input.");
    }
 
    else if (menuInput==1){ 
        for (var i=0;i<memberInfo.memberArray.length;i++){
            console.log('');
            memberInfo.memberArray[i].getDetails();
            
        }
    } 
    // Since 2,4,6 need name validation to check if name exists in the array of objects
    else if (menuInput==2 || menuInput==4 || menuInput==6){
        var counter='';
        var memberInput = (input.question("Please enter member's name: ")).toLowerCase()
            for (var a=0;a<memberInfo.memberArray.length;a++){
            var testResult = memberInput.toLowerCase()==memberInfo.memberArray[a].name.toLowerCase();
            // If name exists
            if (testResult==true){
                counter ++;
            }    
        }
        // If input=1
        if (counter==1 && menuInput==2) {
            console.log("")
            for (var b=0;b<memberInfo.memberArray.length;b++){
                if(memberInput.toLowerCase()==memberInfo.memberArray[b].name.toLowerCase()) {
                    memberInfo.memberArray[b].getDetails();
                }
            }
        }
        // If input=4
         else if (counter==1 && menuInput==4) {
            do {
            var pointsInput = input.questionInt("Please enter amount spent: ")
            if (pointsInput<=0) {
                console.log("Invalid input.");
                }
            }while (pointsInput<=0)

            var addPoints=0;
            
            if (pointsInput<=50) {
                addPoints+=10;
            }
            else if (pointsInput>50 && pointsInput<=100) {
                addPoints+=50;
            }
            else if (pointsInput>100 && pointsInput<=200){
                addPoints+=100;
            }
            else if (pointsInput>200 && pointsInput<=500){
                addPoints+=200;
            }
            else if (pointsInput>500 && pointsInput<=1000){
                addPoints+=500;
            }
            else if (pointsInput>1000 && pointsInput<=2500){
                addPoints+=1000;
            }
            else if (pointsInput>2500) {
                addPoints+=2000;
            }
            for (var b=0;b<memberInfo.memberArray.length;b++){
                if(memberInput.toLowerCase()==memberInfo.memberArray[b].name.toLowerCase()) {  
                    memberInfo.memberArray[b].points+=addPoints;
                    memberInfo.updateMembership();
                }
            }
            
        }
        // Remove member
        else if (counter == 1 && menuInput==6){
            for (var a=0;a<memberInfo.memberArray.length;a++){

                for (var b=0;b<memberInfo.memberArray.length;b++){
                        if(memberInput.toLowerCase()==memberInfo.memberArray[b].name.toLowerCase()) {
                        memberInfo.memberArray.splice(b,1);
                    }
                }
            }
        }
        else if (counter==0) {
            console.log("Member does not exist.");
    }
}

    else if (menuInput==3) {
        do {
            var counter=0;
            var newMember = input.question("Please enter member's name: ");
            var testNewMember = /^[a-zA-Z ]+$/.test(newMember)
            if (testNewMember==false){
                console.log("\nPlease enter a name.")
                counter++
            }

            for (var a=0;a<memberInfo.memberArray.length;a++){
                var testInput = memberInfo.memberArray[a].name.toLowerCase()==newMember.toLowerCase()
                if (testInput==true){
                    counter++;
                    console.log("\nMember's name exists in database. Please enter a new name.");
                }
            } 

        } while(counter !=0);

        do {
            var counter=0;
            var dateInput = input.question("\nPlease enter member's date of birth (eg. 1 Jan 2022, first letter of the month should be capitalised.): ");
            // Regex for date input (accepts values from 01-31 for day, first letter of the month should be capitalised and any year )
            var testDate = /^(([0-1][1-9])|([1-9])|([0-2][0-9])|([3][0-1])) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/.test(dateInput);
            if (testDate==false){
                counter++
                console.log("\nPlease enter a valid date input format.")
            }
        }while(counter !=0);

        // Assume member joins as of today
        const day = new Date();
        var newDay = day.getDate();
        var newMonth = day.toLocaleString('default', { month: 'short' })
        var newYear = day.getFullYear();
        var dateToday = newDay + " " + newMonth + " " + newYear;

        // Push new member object into memberInfo.memberArray
        memberInfo.memberArray.push(new Member(newMember,'Ruby', dateToday ,dateInput,0));
    }

    else if (menuInput==5) {
        // Sub menu
        do {
            console.log("\t\tPlease select an option from the sub-menu:");
            console.log("\t\t1. Display names of (all) a certain type of members only.");
            console.log("\t\t2. Display the name of the youngest and oldest in the system.");
            console.log("\t\t3. Display the name of members with the highest and lowest points earned.");
            console.log("\t\t4. Display the total number of members in each membership type.");
            console.log("\t\t5. Display the total points in each membership type.");
            console.log("\t\t6. Return to main menu");
            var subInput = input.question("\t\t>> ");
            var subResult = /^[1-6]$/.test(subInput);

            if (subResult==false){
                console.log("Please enter a valid input.")
            }
        
            if (subInput==1){
                memberInfo.findMembershipType();
            }
            
            else if (subInput==2){
               memberInfo.findAge();
            }

            else if (subInput==3){
                memberInfo.findPoints();
            }

            else if (subInput==4){
                memberInfo.findMembersType();
            }

            else if (subInput==5){
                memberInfo.findTypePoints();
            }
            
        } while (subInput!=6) 
    }
    else if (menuInput==7) {
        console.log("Thank you & goodbye!");
    }
} while (menuInput!=7) 
