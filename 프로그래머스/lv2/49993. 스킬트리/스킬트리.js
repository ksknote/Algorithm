function solution(skill, skill_trees) {
    var answer = 0;
    const skillArr = skill_trees.map(x=> x.split(''))
    const shortSkillArr = skillArr.map((x)=> {
        var shortSkill = ''
        for(let i=0; i< x.length; i++) {
            if(skill.includes(x[i])) shortSkill += x[i];
        }
        return shortSkill
    })
    for (let s of shortSkillArr) {
        if(s === skill.slice(0, s.length)) answer++;
    }
    return answer;
}