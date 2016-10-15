let csrf = $("[name='csrf-token']").prop('content')

let temp = JSON.parse($("#model_one").html())
for (each in temp.paths) {
    if ( (each != "_id") && (each !="__v") ) {
        switch (temp.paths[each].instance) {
            case "Number":
                $("#here").append("<div><label >"+each+"</label> : <input name='"+each+"' type='number' value=10></div>")
                break;
            case "Array":
                // $("#here").append("<div><label >"+each+"</label> : <input name='"+each+"' type='text' placeholder='Separate by comma'></div>")
                console.log(each)
                $("#here").append("<div><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
            case "String":
                $("#here").append("<div ><label id='"+each+"'>"+each+"</label> :</div> <div id='"+each+"_input'><input name='"+each+"' type='text'></div>")
                break;
            case "Object":
                console.log(temp.paths[each])
                break;
        }
    }
}

if ($("#player_race")) {
    $.post("/race/list", {'_csrf':csrf}).then(function(data){
        $("#player_race_input").html(`
            <select id='player_race_input_select' name="player_race"></select>
        `)
        for (let i = 0;i <data.length;i++){
            if(data[i].name != undefined){
                $("#player_race_input_select").append(`
                    <option> `+data[i].name+` </option>
                `)
            }
        }
    })
}

if ($("#player_class")){
    $.post("/class/list", {'_csrf':csrf}).then(function(data){
        $("#player_class_input").html(`
            <select id='player_class_input_select' name="player_class"></select>
        `)
        for (let i = 0;i <data.length;i++){
            if(data[i].name != undefined){
                $("#player_class_input_select").append(`
                    <option> `+data[i].name+` </option>
                `)
            }
        }
    })
}