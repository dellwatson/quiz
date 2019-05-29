const solution = relation => {
    let answer = 0;
    let arr = []
    let saveNonKey = []
    let compare = []
    //preventing the super key to be involved, find which column has the real super key
    for(let i = 0; i < relation[0].length; i++ ){ arr.push([]) }
    for(let i = 0; i < relation.length; i++ ){
        
        for(let j = 0; j < relation[i].length; j++ ){
            arr[j].push(relation[i][j])
        }
    }

    //checking if single row has non duplicate = + key -- 
    arr.map(item => {
        let duplicate = false

        item.filter((value, index) => {
            if(item.indexOf(value) != index){
                duplicate = true
            }
        })

        if(duplicate){
            saveNonKey.push(arr.indexOf(item))
        }else{
            answer += 1
        }
    })

    console.log(arr)
    console.log(saveNonKey)
    for(let i = 0; i < saveNonKey.length -1; i++) {
        
        for(let j = i +1; j < saveNonKey.length; j++){
            for(let k = 0; k < arr[saveNonKey[i]].length; k++) {
                compare.push(arr[saveNonKey[i]][k] + arr[saveNonKey[j]][k])
            }
        }
    }



    return compare;
}


const relation = [
    [100,"ryan","music",2],
    [200,"apeach","math",2],
    [300,"tube","computer",3],
    [400,"con","computer",4],
    [500,"muzi","music",3],
    [600,"apeach","music",2],
]

console.log(solution(relation))