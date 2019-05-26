const solution = record => {
    let answer = []
    let history = []
    let id = {}

    record.map(item => {
        const temp_id = item.split(" ")
        const status = temp_id[0]
        const uid = temp_id[1]
        const name = temp_id[2]

        if(status === 'Enter'){
            history.push(`${uid} came in`)
        }else if(status === 'Leave'){
            history.push(`${uid} has left`)
        }

        if(name){
            id = { ...id, [uid] : { name }}
        }
    })

    history.map(item => {
        const word = item.split(" ")
        const uid = word[0]
        const nickname = id[uid].name

        answer.push(`${nickname} ${word[1]} ${word[2]}`)
    })
    
    return answer
  }
  
  const run = solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
    "Leave uid1234",
    "Enter uid5555 NewGuy",
    "Change uid4567 Kevin",
    "Leave uid1234",
    "Change uid4567 Ryan",
    "Leave uid1234",
    "Enter uid5555 NewGuy",
    "Change uid4567 Kevin",
    "Leave uid1234","Change uid4567 Ryan",
    "Leave uid1234",
    "Enter uid5555 NewGuy",
    "Change uid4567 Kevin",
    "Leave uid1234",

  ])
  console.log(run)
  
  