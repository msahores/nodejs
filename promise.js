const pini = new Promise((resolve, reject)=> {
		setTimeout(()=>{
			resolve("Promise Solved!")
		}, 2000)
})

const pem = new Promise((res, rej)=>{
	res("Buenisimo PEM")
})

pini
.then(text=>console.log("Ready! & " + text))
.then(()=>pem)
.then(text=>console.log(text + " ¡FIN!"))
