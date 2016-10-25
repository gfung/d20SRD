let csrf = $('[name="csrf-token"]').prop('content')
let sheet = window.location.pathname.split('/')
$.post("/player/character_sheet/"+sheet[3], {'_csrf': csrf, 'name': sheet[3]}).then(function(data){ 
    /** 
     * vars 
     */
    let ecl=0;
    
    /** 
     * display data 
     */

    //levels and ECL
    for (let i =0;i < data.player_class.length;i++){
        //get class levels and ecl
        $("#classlevel").append(data.player_class[i].pclass.name+" "+data.player_class[i].pclass_level)
        ecl += data.player_class[i].pclass_level
        //get features
        
    }

    //name
    $("#charname").append(data.player_name)
    //race name
    $("#charrace").append(data.player_race.name)
    //char align
    $("#charalign").append(data.player_align) // need to add this
    
    //ability scores
    let abi_scores=[]
    for(let each in data.ability_scores){
        abi_scores.push( data.ability_scores[each] + data.player_race.stat_bonus[each] ) 
    }

    $('#Strength').append(abi_scores[0])
    $('#Strengthbonus').append("+" + ((abi_scores[0]-10)/2) || 0 )
    $('#Dexterity').append(abi_scores[1])
    $('#Dexteritybonus').append("+" + ((abi_scores[1]-10)/2) || 0 )
    $('#Constitution').append(abi_scores[2])
    $('#Constitutionbonus').append("+" + ((abi_scores[2]-10)/2) || 0 )
    $('#Intelligence').append(abi_scores[3])
    $('#Intelligencebonus').append("+" + ((abi_scores[3]-10)/2) || 0 )
    $('#Wisdom').append(abi_scores[4])
    $('#Wisdombonus').append("+" + ((abi_scores[4]-10)/2) || 0 )
    $('#Charisma').append(abi_scores[5])
    $('#Charismabonus').append("+" + ((abi_scores[5]-10)/2) || 0 )
    
    //check off saving throws
    for (let i=0;i< data.player_class.length;i++){
        for ( let j=0;j<data.player_class[i].pclass.proficiencies.saving_throws.length;j++){
            let saving_pro_total=parseInt( probonus(5, ecl) ) + parseInt($("#"+data.player_class[i].pclass.proficiencies.saving_throws[j]+"_save").siblings()[1].innerText.substring(7))
            $("#"+data.player_class[i].pclass.proficiencies.saving_throws[j]+"_save").append(' <i class="fa fa-check" aria-hidden="true"></i>: +'+saving_pro_total)
        }
    }
    //check off skills
    for (let i=0;i< data.skills.length;i++){ 
        let skill_pro_total=parseInt( probonus(5, ecl) ) + parseInt($("#skill_"+data.skills[i]).siblings()[1].innerText.substring(7))
        $("#skill_"+data.skills[i]).append(' <i class="fa fa-check" aria-hidden="true"></i>: +'+ skill_pro_total )
    }
    /**
     *  race bonuses
     */
    //languages and feats
    for (let i=0;i < data.player_race.features.length;i++){
        $("#feats").append("<div>"+data.player_race.features[i]+"</div>")
    }
    for (let i=0;i < data.player_race.languages.length;i++){
        $("#Other").append("<div>"+data.player_race.languages[i]+"</div>")
    }

    /**
     *  class bonuses
     */

    //skills


    
    $("#classlevel").append(" ECL"+ecl)
    $("#pro_bonus").append(probonus(5, ecl))
    $("#classlevel").append(data.player_class[0])
})