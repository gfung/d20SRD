let csrf = $("[name='csrf-token']").prop('content');

let skills=[];
let feats=[];



$.get("/elf.json", function(data){
    $("#race_select").append("<option>"+data.name+"</option>")
        // //append to html stuff
        // $("#player_race_input").html(`
        //     <select id='player_race_input_select' name="player_race"></select>
        // `)
        // for (let i = 0;i <data.length;i++){
        //     if(i==0){
        //         if(data[i].name != undefined){
        //             $("#player_race_input_select").append(`
        //                 <option selected> `+data[i].name+` </option>
        //             `)
        //         }
        //     }else {
        //         if(data[i].name != undefined){
        //             $("#player_race_input_select").append(`
        //                 <option> `+data[i].name+` </option>
        //             `)
        //         }
        //     }
        // }
}) 

// if ($("#player_class")){
//     $.get("/barbarian.json", {'_csrf':csrf}).then(function(data){
//         console.log(data)
//         // //add class function
       
//         // //append to html stuff
//         // $("#player_class_input").html(`
//         //     <select id='player_class_input_select' name="player_class"></select>
//         //     Level : <input id='player_class_level' name="player_class_level" type="number" min=1 max=20>
//         //     <div id="multi"></div>
//         //     <br>
//         //     <!-- <button type="button" id="add_class_button" onclick='add_class()'>Add Another Class</button> -->
//         //     <div>
//         //         <u>Skills</u>
//         //         <div>Choose <b><span id="skill_count"></span></b> Skills</div>
//         //     </div>
//         //     <div id="skills_list"></div>
//         // `)

//         // for (let i = 0;i <data.length;i++){
//         //     //class select
//         //     if(i==0){
//         //         if(data[i].name != undefined){
//         //             $("#player_class_input_select").append(`
//         //                 <option selected> `+data[i].name+` </option>
//         //             `)
//         //         }
//         //     }else {
//         //         if(data[i].name != undefined){
//         //             $("#player_class_input_select").append(`
//         //                 <option> `+data[i].name+` </option>
//         //             `)
//         //         }
//         //     }
//         // }
//         // let skillcount;
//         // function skill_list() {    
//         //     $("#skills_list").empty();
//         //     $("#skill_count").empty();
//         //     for (let h=0;h<data.length;h++){
//         //         for (let j=1;j<data[h].proficiencies.skills.length;j++){
//         //             $("#skill_count").html(data[h].proficiencies.skills[0])
//         //             if( $("#player_class_input_select").val() ==  data[h].name){
//         //                 $("#skills_list").append('<div><input type="checkbox" name="class_skills_list" value="'+data[h].proficiencies.skills[j]+'"> '+data[h].proficiencies.skills[j]+'</div>')
//         //             }
//         //         }
//         //     }
//         //     skillcount = $("#skill_count").html()
//         // };
//         // skill_list();
//         // //change on class select
//         // $("#player_class_input_select").change(function(){
//         //     skill_list();
//         // })
//         // //change on skill select
//         // $("input[name='class_skills_list']").change(function(){
//         //     if( (skillcount - $("input[name='class_skills_list']:checked").length) <= 0 ){
//         //         $("input[name='class_skills_list']:not(:checked)").attr('disabled', true)
//         //     }else{
//         //         $("input[name='class_skills_list']").attr('disabled', false)
//         //     }
//         //     $("#skill_count").html(skillcount - $("input[name='class_skills_list']:checked").length )
//         // })
//     })
// }

$(document).ready(function(){});