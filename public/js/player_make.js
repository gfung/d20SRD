let csrf = $("[name='csrf-token']").prop('content');
let temp = JSON.parse($("#model_one").html());
let skills=[];
let feats=[];

for (each in temp.paths) {
    if ( (each != "_id") && (each !="__v") ) {

        switch (temp.paths[each].instance) {
            case "Number":
                $("#here").append("<div><label >"+each+"</label> : <input name='"+each+"' type='number' value=10></div>")
                break;
            case "Array":
                // $("#here").append("<div><label >"+each+"</label> : <input name='"+each+"' type='text' placeholder='Separate by comma'></div>")
                if(each =="skills"){
                    break;
                }
                $("#here").append("<div><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
            case "String":
                if(each =="skills"){
                    break;
                }
                $("#here").append("<div ><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
            case "ObjectID":
                $("#here").append("<div><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
        }
    }
}

if ($("#player_race")) {
    $.post("/race/list", {'_csrf':csrf}).then(function(data){
        // console.log(data)
        //append to html stuff
        $("#player_race_input").html(`
            <select id='player_race_input_select' name="player_race"></select>
        `)
        for (let i = 0;i <data.length;i++){
            if(i==0){
                if(data[i].name != undefined){
                    $("#player_race_input_select").append(`
                        <option selected> `+data[i].name+` </option>
                    `)
                }
            }else {
                if(data[i].name != undefined){
                    $("#player_race_input_select").append(`
                        <option> `+data[i].name+` </option>
                    `)
                }
            }
        }
    })
}

if ($("#player_class")){
    $.post("/class/list", {'_csrf':csrf}).then(function(data){
        //add class function
       
        //append to html stuff
        $("#player_class_input").html(`
            <select id='player_class_input_select' name="player_class"></select>
            Level : <input id='player_class_level' name="player_class_level" type="number">
            <div id="multi"></div>
            <br>
            <button type="button" id="add_class_button" onclick='add_class()'>Add Another Class</button>
            <div>
                <u>Skills</u>
                <div>Choose <b><span id="skill_count"></span></b> Skills</div>
            </div>
            <div id="skills_list"></div>
        `)
        for (let i = 0;i <data.length;i++){
            //class select
            if(i==0){
                if(data[i].name != undefined){
                    $("#player_class_input_select").append(`
                        <option selected> `+data[i].name+` </option>
                    `)
                }
            }else {
                if(data[i].name != undefined){
                    $("#player_class_input_select").append(`
                        <option> `+data[i].name+` </option>
                    `)
                }
            }
        }
        let skillcount;
        function skill_list() {    
            $("#skills_list").empty();
            
            for (let h=0;h<data.length;h++){
                for (let j=1;j<data[h].proficiencies.skills.length;j++){
                    $("#skill_count").html(data[h].proficiencies.skills[0])
                    if( $("#player_class_input_select").val() ==  data[h].name){
                        $("#skills_list").append('<div><input type="checkbox" name="class_skills_list" value="'+data[h].proficiencies.skills[j]+'"> '+data[h].proficiencies.skills[j]+'</div>')
                    }
                }
            }
            skillcount = $("#skill_count").html()
        };
        skill_list();
        //change on class select
        $("#player_class_input_select").change(function(){
            skill_list();
        })
        //change on skill select
        $("input[name='class_skills_list']").change(function(){
            if( (skillcount - $("input[name='class_skills_list']:checked").length) <= 0 ){
                $("input[name='class_skills_list']:not(:checked)").attr('disabled', true)
            }else{
                $("input[name='class_skills_list']").attr('disabled', false)
            }
            $("#skill_count").html(skillcount - $("input[name='class_skills_list']:checked").length )
        })
    })
}



let classnum=0;
function add_class(){
    $("#multi").append(`
        <div id="`+classnum+`">
            <select id='player_class_multi`+classnum+`' name="player_class_multi"></select>
            Level : <input id='player_class_level' name="player_class_level" type="number">
            <button type="button" onclick="$('#`+classnum+`').remove();">Remove me</button>
        </div>`
    )
    
    var $options = $("#player_class_input_select > option").clone();
    $("#player_class_multi"+classnum).append($options)
    classnum++
}

$(document).ready(function(){
    //check selections
})