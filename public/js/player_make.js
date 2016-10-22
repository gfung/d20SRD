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
                $("#here").append("<div><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
            case "String":
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
        console.log(data)
        //add class function
       
        //append to html stuff
        $("#player_class_input").html(`
            <select id='player_class_input_select' name="player_class"></select>
            Level : <input id='player_class_level' name="player_class_level" type="number">
            <div id="multi"></div>
            <br>
            <button type="button" id="add_class_button" onclick='add_class()'>Add Another Class</button>
            <div><u>Skills</u></div>
            <div id="skills"></div>
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
        
        function skill_list() {    
            $("#skills").empty();
            for (let h=0;h<data.length;h++){
                for (let j=0;j<data[h].proficiencies.skills.length;j++){
                    if( $("#player_class_input_select").val() ==  data[h].name){
                        $("#skills").append('<div><input type="checkbox" name="skills" value="'+data[h].proficiencies.skills[j]+'"> '+data[h].proficiencies.skills[j]+'</div>')
                    }
                }
            }
        };
        skill_list();

        $("#player_class_input_select").change(function(){
            skill_list();
        })
        //check on change
    //    $("#player_class_input_select").change(function(){
    //        for (let i = 0;i <data.length;i++){
    //            if (data[i].name ==$("#player_class_input_select").val()){
    //                for (let j=0;j<data[i].proficiencies.skills;j++)
    //                $("#skills").append('<input type="checkbox" name="skills"> '+ data[i].proficiencies.skills[j])
    //            }
    //        }
    //    })
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