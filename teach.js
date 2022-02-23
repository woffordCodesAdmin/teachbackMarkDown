// Functions()
// typesOfFunctions? { Original , Arrow}


// 1) TakeAways: Why is This Important?
// --> Why do we care...{!!FOCUS!!}

// 1a> Create Actions and Assign those Actions to Things In your Code/Program.

// 2) Anecdote/Story
// --> High-Level View/Understanding

// --> Sports Reference
// --> FriendsReference

// 3) Ask For Feedback
// ==> Make Sure 2 Pause and Clarify

// IF_STUMPED => {
// useItAs: {
// learningExperience
// troubleshootingTips
// moment2Research
// }
// }

// dontUseCodeTerms, use REAL terms

const ourFirstFunctionExample = (valueToBeInsertedIntoFunction) => {
  // Between These 2 Brackets {}
  // Write Instructions For Function Behavior
};











// Sending An Email. 
// find recipient -> aaa@b.com
// composeMessage
// req us to them







const printMyName = (name) => {
  
  name = prompt("Please Enter Your Name");
  $('.palCheck').append(`<h1>${name}</h1>`)
}

// Invoking/ Calling Function
  printMyName()



















// const sendEmail = () => {
//   usersEmail = prompt("Enter Your Email")
//   message = prompt("Enter Message To Be Sent.") 
//   $('.palCheck').append(`${message}`)

// }

// (Function Declarations):
  // {This is One Way --> Function_DECLARATION : }

    // function one() {
    //   console.log("one");
    //   return 1;
    // }
    // one();

  // {This is Another Way --> Function_EXPRESSION// ArrowFunction}
      
    // const two = () => {
    //   console.log("two")
    //   return 2
    // }
    // two();




//  Demo Functions === DO NOT DELETE

const addText = () => {
  $(".secretBox").append(
    "<h1 style='color:green;'>Text Added!</h1><h4 style='text-align:center;color:lemonchiffon;'>Thanks To Our Function Call Attached To the Button We Pressed!  </h4>"
  );
};

const makeSonicRun = () => {
  $(".sonix").replaceWith(
    "<img class='runner' src='https://i.gifer.com/origin/aa/aa7d3af3e7c2ac4c8ec0df7f6dddcff1_w200.gif'>"
  );
};

const changeBackground = () => {
  asker = prompt("Would You Like To Add Image or Color?");
  if (asker.toLowerCase() === "image") {
    imageName = prompt("Upload Background Image");
    $(".sonicHolster").css("background-image", `url('${imageName}')`);
  } else {
    chosenColor = prompt("What Color Would You Like To Use ? ");
    $(".sonicHolster").css("background-image", `${chosenColor}`);
  }
  $(".sonicHolster").css("background-color", `${chosenColor}`);
};

const concatNthaHat = (x,y) => {
  x = prompt("Enter Value [1/2]");
  y = prompt("Enter Value [2/2]");
  endString = x + y
  $('.screencct').append(`<div class='bgStr'> ${ endString } </div>`)

}

const palindromeNthHouse = () => {
  word = prompt("Enter A Word To See If Its A Palindrome");
  $('.palCheck').append(`<h1>${word}</h1>`)

  backWords = word.split('').reverse().join().toLowerCase()
  
  if (word.split('') == backWords){
    console.log("This is A Palindrome")
    $('.palCheck').append(`<h1>TRUE</h1>`)
  }else{
    $('.palCheck').append(`<h1>FALSE</h1>`)
  }
}
