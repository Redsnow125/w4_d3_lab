const resBtn = document.querySelector('button')
const body = document.querySelector('#holder')

const clearContainer = () => {
    body.innerHTML = ''
}



const btnPress = evt =>{
    console.log('You pressed me')
    axios.get("https://swapi.dev/api/planets?search=alderaan")
         .then(response =>{
            clearContainer()
            let arr = response.data.results[0].residents;
            console.log(arr)
            for(i=0; i < arr.length; i++){
                console.log(arr[i]);
                // let temp = arr[i];
                // console.log(temp)
                axios.get(arr[i])
                     .then(response =>{
                        console.log(response.data)
                        let tempName =response.data.name
                        const nameList = document.createElement('div')
                        nameList.innerHTML = `<div><h1>${tempName}</h1></div>`
                        body.appendChild(nameList)
                        
                    })
                     .catch(err => console.log(err))

            }
            
         })
}

resBtn.addEventListener('click',btnPress)