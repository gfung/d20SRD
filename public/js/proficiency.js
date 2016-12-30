function probonus(edition, bab_class) {
    let pro_bonus=[0];
    //
    switch (edition) {
        case 3 :
            if(bab_class === "full") {
                for (let i = 1;i < 21; i++){
                    pro_bonus.push(i);
                };
                return pro_bonus[bab_class] //currently not working as intended
            }
            
            break
        case 5 :
            for (let i = 1;i < 21; i++){
                let divide = Math.ceil(i/4) + 1;
                pro_bonus.push(divide);
            };
            return pro_bonus[bab_class]
            break
    }
}
