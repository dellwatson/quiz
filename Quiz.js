const solution = record => {
    let answer = []
    let id = {}
    for( let i = record.length -1; i >= 0; i-- ){
      const temp_id = record[i].split(" ")
      const status = temp_id[0]
      const uid = temp_id[1]
      const name = temp_id[2]
  
      if(!id[uid]) {
        id = {
          ...id,
           [uid] : { name, uid }
         }
      }
  
      if(status === 'Enter'){
        answer.unshift(`${id[uid].name} came in`)
      }else if(status === 'Leave'){
        answer.unshift(`${id[uid].name} has left`)
      }
    }
    return answer
  }
  
  const run = solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
  console.log(run)
  

  