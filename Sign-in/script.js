function getName () {
    let fname = document.getElementById("name").value;
    return fname
}
function getUserName () {
    let username = document.getElementById("username").value;
    return username
}
function getUserEmail () {
    let useremail = document.getElementById("mail").value;
    return useremail
}
function getUserPassword () {
    let userpassword = document.getElementById("pw").value;
    return userpassword
}
function getUserPasswordRepeat () {
    let userpassword2 = document.getElementById("pw2").value;
    return userpassword2
}
function getLoginUserName () {
    let loginusername = document.getElementById("usernameLogin").value;
    return loginusername
}
function getLoginUserPassword () {
    let loginuserpassword = document.getElementById("userpassword").value;
    return loginuserpassword
}

function getData () {
    let userName = getUserName()
    let userPassword = getUserPassword()
    let userEmail =getUserEmail()
    //const dataList = [userName,userPassword,userEmail]
    //console.log(dataList)
    let firstName = getName();
    let userPasswordRepeat = getUserPasswordRepeat();

    let dataJson = {};

    if(firstName.length >= 3){ 
        if(userName.length >= 5){
            if(userPassword.length >= 6){
                if (userPassword == userPasswordRepeat){
                    dataJson = {
                        user: userName,
                        userpw: userPassword,
                        userContact: userEmail,
                    }
                    
                    document.getElementById("kayitol").innerText = "successfully";
                    document.getElementById("kayitol").style.color = "green"; 

                } else {
                    alert("registration is successfully")
                }
               
            } else {
                alert("Your password cannot be shorter than 6 digits")
            }
        } else {
            alert("Username must be 5 or more letters.")
        }
    } else {
        alert("Username must be 3 or more letters.")
    }
 
    return dataJson
} 

function log () {
    let signIn = getData() 
    let loginName = getLoginUserName()
    let loginPassword = getLoginUserPassword()

    if (loginName == signIn.user){
        if (loginPassword == signIn.userPassword){
            alert("Welcome"+loginName)
            
        } else {
            alert("Your password do not match.")
        }
    } else {
        alert("Your username does not match.")
        document.getElementById("Log-in").style.backgroundColor = "red"
    }
}

function reflesh(){
    location.reload();
}