// alert("dvhdjsb");

function createCountDown(){
	const countDown =document.getElementById("countDown");


let futureDate = new Date(2023, 3, 10);
console.log(futureDate);

let currentDate = new Date();
console.log(currentDate);

let diff = futureDate.getTime() - currentDate.getTime();
console.log(diff);

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days);

let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hrs);

let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
console.log(mins);

let sec = Math.floor(diff %(1000 * 60) / (1000));
console.log(sec);

let millsec = Math.floor((diff % 1000));
console.log(millsec);


result = `<div class= "counter">
		   <p>Days</p>
		   <p>${setZero(days)}</p>
		</div>
		
		<div class= "counter">
		   <p>Hours</p>
		   <p>${setZero(hrs)}</p>
		</div>
		
		<div class= "counter">
		   <p>Minutes</p>
		   <p>${setZero(mins)}</p>
		</div>
		
		<div class= "counter">
		   <p>Seconds</p>
		   <p>${setZero(sec)}</p>
		</div>
		
		<div class= "counter">
		   <p>MilliSeconds</p>
		   <p>${setZero(millsec)}</p>
		</div>`


countDown.innerHTML = result;
setTimeout(createCountDown, 1000);
}
createCountDown();

function setZero(num){
	return (num < 10) ? "0" + num : num
}










